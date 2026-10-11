/**
 * «Те Самые» — Мобильное приложение администратора
 * Кабинет Директора треста (Android APK / Web)
 * Полнофункциональный контроллер заказов, витрины, отзывов и защиты от взлома.
 */

(function () {
  'use strict';

  // ================= 1. Конфигурация и Состояние =================
  const STATE = {
    token: localStorage.getItem('tesamye_admin_token') || '',
    directorLogin: localStorage.getItem('tesamye_admin_login') || '',
    serverUrl: getInitialHost(),
    activeTab: 'tab-orders',
    orderFilter: 'all',
    orderSearch: '',
    orders: [],
    products: [],
    reviews: [],
    securityLogs: [],
    securityStats: null,
    isOnline: false,
    selectedTicketForSlot: null,
    selectedReviewId: null,
    lastActivity: Date.now(),
    autoLockTimer: null,
    syncInterval: null,
  };

  function getDefaultHost() {
    // Если запущено внутри Android WebView или из локального файла APK (file://)
    if (window.AndroidBridge || window.location.protocol === 'file:') {
      return 'http://192.168.0.153:3001';
    }
    // Если запущено в браузере с того же хоста
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://127.0.0.1:3001';
    }
    if (window.location.origin && window.location.origin !== 'null') {
      return window.location.origin;
    }
    return 'http://192.168.0.153:3001';
  }

  function getInitialHost() {
    const saved = localStorage.getItem('tesamye_admin_host');
    // Если ранее был сохранён адрес эмулятора 10.0.2.2 на реальном устройстве, переключаем на реальный Wi-Fi IP
    if (saved && saved.includes('10.0.2.2')) {
      localStorage.removeItem('tesamye_admin_host');
      return 'http://192.168.0.153:3001';
    }
    if (saved) return saved;
    return getDefaultHost();
  }

  // ================= 2. Нативная интеграция (Android Bridge & Audio) =================
  const Native = {
    vibrate(ms = 35) {
      if (window.AndroidBridge && window.AndroidBridge.vibrate) {
        window.AndroidBridge.vibrate(ms);
      } else if (navigator.vibrate) {
        navigator.vibrate(ms);
      }
    },
    toast(msg) {
      if (window.AndroidBridge && window.AndroidBridge.showToast) {
        window.AndroidBridge.showToast(msg);
      } else {
        showWebToast(msg);
      }
    },
    dial(phone) {
      if (window.AndroidBridge && window.AndroidBridge.dialPhone) {
        window.AndroidBridge.dialPhone(phone);
      } else {
        window.location.href = 'tel:' + phone;
      }
    },
    copy(text) {
      if (window.AndroidBridge && window.AndroidBridge.copyToClipboard) {
        window.AndroidBridge.copyToClipboard(text);
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        showWebToast('Скопировано: ' + text);
      }
    },
    playChime(type = 'click') {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        if (type === 'success') {
          osc.frequency.setValueAtTime(587, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        } else if (type === 'alert') {
          osc.frequency.setValueAtTime(320, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        } else {
          osc.frequency.setValueAtTime(700, ctx.currentTime);
          gain.gain.setValueAtTime(0.05, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);
          osc.start();
          osc.stop(ctx.currentTime + 0.05);
        }
      } catch (e) {}
    }
  };

  function showWebToast(msg) {
    const existing = document.querySelector('.web-toast-banner');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = 'web-toast-banner';
    t.textContent = msg;
    Object.assign(t.style, {
      position: 'fixed',
      bottom: '84px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#242220',
      color: '#f5f2eb',
      border: '1px solid #e6b422',
      borderRadius: '24px',
      padding: '8px 18px',
      fontSize: '13px',
      fontWeight: '600',
      boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
      zIndex: '150',
      pointerEvents: 'none',
      transition: 'opacity 0.25s ease',
    });
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 250);
    }, 2200);
  }

  // ================= 3. Защита от Взлома & Anti-Brute Force =================
  const SecurityShield = {
    MAX_ATTEMPTS: 3,
    LOCKOUT_TIME_MS: 30 * 1000, // 30 секунд блокировки после 3 ошибок
    HARD_LOCKOUT_TIME_MS: 5 * 60 * 1000, // 5 минут после 5 ошибок

    getAttemptRecord() {
      try {
        const rec = JSON.parse(localStorage.getItem('tesamye_sec_attempts') || '{}');
        return {
          fails: rec.fails || 0,
          lockedUntil: rec.lockedUntil || 0,
        };
      } catch (e) {
        return { fails: 0, lockedUntil: 0 };
      }
    },

    saveAttemptRecord(record) {
      localStorage.setItem('tesamye_sec_attempts', JSON.stringify(record));
    },

    recordFailedAttempt() {
      const rec = this.getAttemptRecord();
      rec.fails += 1;
      const now = Date.now();
      if (rec.fails >= 5) {
        rec.lockedUntil = now + this.HARD_LOCKOUT_TIME_MS;
      } else if (rec.fails >= this.MAX_ATTEMPTS) {
        rec.lockedUntil = now + this.LOCKOUT_TIME_MS;
      }
      this.saveAttemptRecord(rec);
      Native.playChime('alert');
      Native.vibrate(100);
      return rec;
    },

    resetAttempts() {
      localStorage.removeItem('tesamye_sec_attempts');
    },

    checkLockout() {
      const rec = this.getAttemptRecord();
      const now = Date.now();
      if (rec.lockedUntil && now < rec.lockedUntil) {
        const remainingSec = Math.ceil((rec.lockedUntil - now) / 1000);
        return { isLocked: true, remainingSec, fails: rec.fails };
      }
      return { isLocked: false, remainingSec: 0, fails: rec.fails };
    },

    createHeaders() {
      return {
        'Content-Type': 'application/json',
        'X-Admin-Token': STATE.token || '',
        'X-Admin-Timestamp': String(Date.now()),
        'X-Admin-Nonce': Math.random().toString(36).substring(2, 10),
      };
    },

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  };

  // ================= 4. Сетевые Запросы к API =================
  async function api(path, options = {}) {
    const url = `${STATE.serverUrl.replace(/\/+$/, '')}${path}`;
    const headers = {
      ...SecurityShield.createHeaders(),
      ...(options.headers || {}),
    };

    const timeoutMs = options.timeout || 6000;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const start = Date.now();
      const res = await fetch(url, {
        ...options,
        headers,
        signal: options.signal || controller.signal,
      });
      clearTimeout(timeoutId);
      const latency = Date.now() - start;
      updateStatus(true, latency);

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        const err = new Error(errJson.error || `HTTP ${res.status}`);
        err.status = res.status;
        throw err;
      }
      return await res.json();
    } catch (err) {
      clearTimeout(timeoutId);
      updateStatus(false);
      throw err;
    }
  }

  function updateStatus(online, latencyMs = 0) {
    STATE.isOnline = online;
    const bar = document.getElementById('status-bar');
    const text = document.getElementById('status-text');
    if (bar && text) {
      if (online) {
        bar.className = 'status-bar status-online';
        text.textContent = `Связь с MariaDB установлена (${latencyMs}ms)`;
      } else {
        bar.className = 'status-bar status-offline';
        text.textContent = 'Нет связи с сервером MariaDB (Офлайн)';
      }
    }
    updateAuthServerUI();
  }

  function updateAuthServerUI() {
    const label = document.getElementById('auth-current-host-label');
    const dot = document.querySelector('.auth-server-dot');
    const input = document.getElementById('auth-custom-server-ip');
    if (label) label.textContent = 'Сервер: ' + STATE.serverUrl.replace(/^https?:\/\//, '');
    if (input && document.activeElement !== input) input.value = STATE.serverUrl;
    if (dot) {
      if (STATE.isOnline) {
        dot.classList.remove('offline');
      } else {
        dot.classList.add('offline');
      }
    }
  }

  // ================= 5. Инициализация и Авторизация =================
  let lockoutTimerInterval = null;
  const MASTER_LOGIN = 'KatyaOwner';
  const MASTER_PASSWORD = '2012!KirMax_Nas!2009!1981_Mih';

  function initApp() {
    setupEventListeners();
    setupInactivityWatcher();
    updateAuthServerUI();

    // Проверяем сохранённую сессию
    if (STATE.token) {
      unlockApp();
    } else {
      showAuthScreen();
    }
  }

  function showAuthScreen() {
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) authScreen.style.display = 'flex';
    updateAuthServerUI();
    checkAndDisplayLockout();
  }

  function checkAndDisplayLockout() {
    if (lockoutTimerInterval) {
      clearInterval(lockoutTimerInterval);
      lockoutTimerInterval = null;
    }
    const lockout = SecurityShield.checkLockout();
    const alertBox = document.getElementById('auth-security-alert');
    const submitBtn = document.getElementById('btn-submit-auth');
    const pwdInput = document.getElementById('auth-password');
    const loginInput = document.getElementById('auth-login');

    if (lockout.isLocked) {
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.textContent = `🚨 Блокировка защиты от подбора паролей! Доступ временно закрыт. Подождите ${lockout.remainingSec} сек.`;
      }
      if (submitBtn) submitBtn.disabled = true;
      if (pwdInput) pwdInput.disabled = true;
      if (loginInput) loginInput.disabled = true;

      // Единственный контролируемый таймер обратного отсчёта
      lockoutTimerInterval = setInterval(() => {
        const check = SecurityShield.checkLockout();
        if (!check.isLocked) {
          clearInterval(lockoutTimerInterval);
          lockoutTimerInterval = null;
          if (alertBox) alertBox.style.display = 'none';
          if (submitBtn) submitBtn.disabled = false;
          if (pwdInput) pwdInput.disabled = false;
          if (loginInput) loginInput.disabled = false;
        } else if (alertBox) {
          alertBox.textContent = `🚨 Блокировка защиты! Доступ временно закрыт. Подождите ${check.remainingSec} сек.`;
        }
      }, 1000);
    } else {
      if (alertBox && !alertBox.dataset.sticky) alertBox.style.display = 'none';
      if (submitBtn) submitBtn.disabled = false;
      if (pwdInput) pwdInput.disabled = false;
      if (loginInput) loginInput.disabled = false;
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    Native.vibrate(30);

    // 1. Проверка поля-ловушки для ботов (Honeypot)
    const trap1 = document.getElementById('_hp_security_trap')?.value;
    const trap2 = document.getElementById('website_url_field')?.value;
    if (trap1 || trap2) {
      Native.vibrate(200);
      alert('Запрос отклонён защитным фильтром HoneyPot!');
      return;
    }

    // 2. Проверка активного таймаута брутфорса
    const lockout = SecurityShield.checkLockout();
    if (lockout.isLocked) {
      checkAndDisplayLockout();
      return;
    }

    const login = document.getElementById('auth-login')?.value.trim();
    const password = document.getElementById('auth-password')?.value.trim();
    const remember = document.getElementById('auth-remember')?.checked;

    const isMasterMatch = (login === MASTER_LOGIN && password === MASTER_PASSWORD);

    const submitBtn = document.getElementById('btn-submit-auth');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');

    if (btnText) btnText.textContent = 'Проверка пропуска...';
    if (btnSpinner) btnSpinner.style.display = 'inline-block';
    submitBtn.disabled = true;

    try {
      // Запрос к серверу с таймаутом 4 секунды
      const res = await api('/api/auth/admin-login', {
        method: 'POST',
        timeout: 4000,
        body: JSON.stringify({
          login,
          password,
          _hp: trap1,
        }),
      });

      if (res.success) {
        SecurityShield.resetAttempts();
        STATE.token = res.token || 'adm_valid';
        STATE.directorLogin = res.login || login;

        if (remember) {
          localStorage.setItem('tesamye_admin_token', STATE.token);
          localStorage.setItem('tesamye_admin_login', STATE.directorLogin);
        }

        Native.playChime('success');
        Native.vibrate(50);
        Native.toast('Добро пожаловать в кабинет директора!');
        unlockApp();
        return;
      }
    } catch (err) {
      // Если это реальный неверный логин/пароль с сервера (HTTP 401 / 403)
      if (err.status === 401 || err.status === 403) {
        if (!isMasterMatch) {
          const rec = SecurityShield.recordFailedAttempt();
          const alertBox = document.getElementById('auth-security-alert');
          if (alertBox) {
            alertBox.dataset.sticky = 'true';
            alertBox.style.display = 'block';
            alertBox.textContent = `Ошибка допуска: Неверный логин или пароль директора треста. Попытка ${rec.fails} из 3.`;
          }
          checkAndDisplayLockout();
          return;
        }
      }

      // Если произошла сетевая ошибка (сервер не ответил, оффлайн, таймаут, другой IP)
      if (isMasterMatch) {
        // ДИРЕКТОР ВВЁЛ ПРАВИЛЬНЫЙ МАСТЕР-ПАРОЛЬ!
        // Безусловный допуск даже при сбое сети или выключенном Wi-Fi
        SecurityShield.resetAttempts();
        STATE.token = 'sec_offline_master_' + Date.now();
        STATE.directorLogin = MASTER_LOGIN;

        if (remember) {
          localStorage.setItem('tesamye_admin_token', STATE.token);
          localStorage.setItem('tesamye_admin_login', STATE.directorLogin);
        }

        Native.playChime('success');
        Native.vibrate(50);
        Native.toast('Вход разрешён! (Автономный режим директора)');
        unlockApp();
        return;
      } else {
        // Сетевая ошибка при неопознанных учётных данных: не брутфорсим счётчик ошибок!
        const alertBox = document.getElementById('auth-security-alert');
        if (alertBox) {
          alertBox.dataset.sticky = 'true';
          alertBox.style.display = 'block';
          alertBox.textContent = `Связь с сервером не установлена (${STATE.serverUrl}). Проверьте Wi-Fi или настройте адрес (шестерёнка ⚙️ ниже).`;
        }
      }
    } finally {
      if (btnText) btnText.textContent = 'Войти в кабинет директора';
      if (btnSpinner) btnSpinner.style.display = 'none';
      submitBtn.disabled = false;
    }
  }

  function unlockApp() {
    const authScreen = document.getElementById('auth-screen');
    const lockScreen = document.getElementById('lock-screen');
    if (authScreen) authScreen.style.display = 'none';
    if (lockScreen) lockScreen.style.display = 'none';

    syncAllData();
    if (!STATE.syncInterval) {
      STATE.syncInterval = setInterval(syncAllData, 6000);
    }
  }

  function lockApp() {
    Native.vibrate(40);
    Native.playChime('alert');
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.style.display = 'flex';
  }

  function logout() {
    if (!confirm('Вы действительно хотите завершить сеанс директора?')) return;
    STATE.token = '';
    localStorage.removeItem('tesamye_admin_token');
    clearInterval(STATE.syncInterval);
    STATE.syncInterval = null;
    showAuthScreen();
  }

  // ================= 6. Синхронизация Данных =================
  async function syncAllData() {
    const syncBtn = document.getElementById('btn-sync');
    if (syncBtn) syncBtn.classList.add('spinning');

    try {
      const [ordersRes, productsRes, reviewsRes, secStatsRes, secLogsRes] = await Promise.allSettled([
        api('/api/orders'),
        api('/api/products'),
        api('/api/reviews'),
        api('/api/security/stats'),
        api('/api/security/logs'),
      ]);

      if (ordersRes.status === 'fulfilled' && ordersRes.value.success) {
        STATE.orders = ordersRes.value.data || [];
        localStorage.setItem('tesamye_cached_orders', JSON.stringify(STATE.orders));
        renderOrders();
      }

      if (productsRes.status === 'fulfilled' && productsRes.value.success) {
        STATE.products = productsRes.value.data || [];
        renderProducts();
      }

      if (reviewsRes.status === 'fulfilled' && reviewsRes.value.success) {
        STATE.reviews = reviewsRes.value.data || [];
        renderReviews();
      }

      if (secStatsRes.status === 'fulfilled' && secStatsRes.value.success) {
        STATE.securityStats = secStatsRes.value.security || null;
        renderAnalytics();
      }

      if (secLogsRes.status === 'fulfilled' && secLogsRes.value.success) {
        STATE.securityLogs = secLogsRes.value.data || [];
        renderSecurityLogs();
      }
    } catch (err) {
      // Использование локального кэша в случае офлайн
      const cached = localStorage.getItem('tesamye_cached_orders');
      if (cached) {
        STATE.orders = JSON.parse(cached);
        renderOrders();
      }
    } finally {
      if (syncBtn) syncBtn.classList.remove('spinning');
    }
  }

  // ================= 7. Вкладка: Заказы (Orders) =================
  function renderOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;

    // Подсчёт количества по категориям
    const counts = { all: STATE.orders.length, new: 0, accepted: 0, ready: 0, completed: 0 };
    STATE.orders.forEach((o) => {
      if (o.status === 'new') counts.new++;
      else if (o.status === 'accepted' || o.status === 'baking' || o.status === 'packed') counts.accepted++;
      else if (o.status === 'ready') counts.ready++;
      else if (o.status === 'completed') counts.completed++;
    });

    document.getElementById('count-all').textContent = counts.all;
    document.getElementById('count-new').textContent = counts.new;
    document.getElementById('count-accepted').textContent = counts.accepted;
    document.getElementById('count-ready').textContent = counts.ready;
    document.getElementById('count-completed').textContent = counts.completed;

    const navBadge = document.getElementById('nav-orders-badge');
    if (navBadge) {
      const activeCount = counts.new + counts.accepted;
      navBadge.textContent = activeCount;
      navBadge.style.display = activeCount > 0 ? 'inline-block' : 'none';
    }

    // Фильтрация
    let list = STATE.orders;
    if (STATE.orderFilter === 'new') list = list.filter((o) => o.status === 'new');
    else if (STATE.orderFilter === 'accepted') list = list.filter((o) => ['accepted', 'baking', 'packed'].includes(o.status));
    else if (STATE.orderFilter === 'ready') list = list.filter((o) => o.status === 'ready');
    else if (STATE.orderFilter === 'completed') list = list.filter((o) => o.status === 'completed');

    // Поиск
    if (STATE.orderSearch) {
      const q = STATE.orderSearch.toLowerCase();
      list = list.filter(
        (o) =>
          (o.ticket && o.ticket.toLowerCase().includes(q)) ||
          (o.name && o.name.toLowerCase().includes(q)) ||
          (o.phone && o.phone.includes(q))
      );
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📭</div>
          <p>В данной категории заказов нет</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((order) => buildOrderCardHtml(order)).join('');
  }

  function buildOrderCardHtml(o) {
    const esc = SecurityShield.escapeHtml;
    const ticket = esc(o.ticket);
    const name = esc(o.name || 'Покупатель');
    const phone = esc(o.phone || '');
    const slot = esc(o.slot || 'В любое время');
    const total = Number(o.total || 0).toLocaleString('ru-RU');
    const items = o.items || [];
    const withBow = o.withBow;

    const statusBadgeClass = `status-badge-${o.status}`;
    const statusTitles = {
      new: 'Новый заказ',
      accepted: 'В сборке',
      baking: 'Выпекается',
      packed: 'Упакован',
      ready: 'Готов к выдаче',
      completed: 'Выдан покупателю',
      cancelled: 'Отменён',
    };
    const statusTitle = statusTitles[o.status] || o.status;

    const itemsHtml = items
      .map(
        (it) => `
        <div class="order-item-row">
          <span class="item-name-qty">
            <span class="item-qty-tag">${it.qty} шт</span>
            <span>${esc(it.name || it.slug)}</span>
          </span>
          <span class="item-price">${(it.price * it.qty).toLocaleString('ru-RU')} ₽</span>
        </div>
      `
      )
      .join('');

    return `
      <div class="order-card" data-ticket="${ticket}">
        <div class="order-card-header">
          <div class="ticket-num-badge">
            <span class="ticket-tag-chip">ТАЛОН</span>
            <span>№ ${ticket}</span>
          </div>
          <span class="order-status-badge ${statusBadgeClass}">${statusTitle}</span>
        </div>

        <div class="order-card-body">
          <div class="customer-info-row">
            <span class="customer-name">${name}</span>
            ${phone ? `<a href="tel:${phone}" class="phone-call-btn" data-phone="${phone}" title="Позвонить покупателю">📞 ${phone}</a>` : ''}
          </div>

          <div class="order-slot-row">
            <div>
              <span class="slot-label">Готовность:</span>
              <span class="slot-value">⏰ ${slot}</span>
            </div>
            <button class="edit-slot-btn" data-change-slot="${ticket}">Назначить время ✏️</button>
          </div>

          <div class="order-items-list">
            ${itemsHtml || '<span class="text-muted">Состав уточняется у цеха</span>'}
          </div>

          <div class="order-footer-row">
            <span class="package-badge">${withBow ? '🎀 Подарочная лента' : '📦 Стандартная коробка'}</span>
            <span class="total-amount">${total} ₽</span>
          </div>

          <div class="order-actions-bar">
            ${o.status === 'new' ? `
              <button class="btn-action-status btn-status-assemble" data-set-status="accepted" data-ticket="${ticket}">В сборку ➔</button>
              <button class="btn-action-status btn-status-ready" data-set-status="ready" data-ticket="${ticket}">Готов ✓</button>
            ` : ''}

            ${o.status === 'accepted' || o.status === 'baking' || o.status === 'packed' ? `
              <button class="btn-action-status btn-status-ready" data-set-status="ready" data-ticket="${ticket}">Готов к выдаче ✓</button>
            ` : ''}

            ${o.status === 'ready' ? `
              <button class="btn-action-status btn-status-complete" data-set-status="completed" data-ticket="${ticket}">Выдан покупателю 📦</button>
            ` : ''}

            ${o.status !== 'completed' && o.status !== 'cancelled' ? `
              <button class="btn-action-status btn-status-cancel" data-cancel-order="${ticket}" title="Отменить">✕</button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // Смена статуса заказа
  async function updateOrderStatus(ticket, newStatus) {
    Native.vibrate(35);
    try {
      const res = await api(`/api/orders/${encodeURIComponent(ticket)}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.success) {
        if (newStatus === 'ready') {
          Native.playChime('success');
          Native.toast(`Заказ № ${ticket} отмечен как ГОТОВ К ВЫДАЧЕ!`);
        } else {
          Native.toast(`Статус заказа № ${ticket} обновлен`);
        }
        syncAllData();
      }
    } catch (err) {
      alert(`Ошибка обновления заказа: ${err.message}`);
    }
  }

  // Назначение времени готовности (админ сам выбирает время!)
  function openSlotPickerModal(ticket) {
    STATE.selectedTicketForSlot = ticket;
    const modal = document.getElementById('modal-slot-picker');
    const tag = document.getElementById('slot-modal-ticket');
    const input = document.getElementById('custom-slot-val');
    if (tag) tag.textContent = `№ ${ticket}`;
    if (input) input.value = '';

    // Сброс выделения с чипсов
    document.querySelectorAll('.slot-chip').forEach((c) => c.classList.remove('selected'));

    if (modal) modal.style.display = 'flex';
  }

  async function saveSelectedSlot(slotValue) {
    if (!STATE.selectedTicketForSlot) return;
    const ticket = STATE.selectedTicketForSlot;

    Native.vibrate(30);
    try {
      const res = await api(`/api/orders/${encodeURIComponent(ticket)}`, {
        method: 'PATCH',
        body: JSON.stringify({ slot: slotValue }),
      });

      if (res.success) {
        Native.playChime('click');
        Native.toast(`Время выдачи для № ${ticket} установлено: ${slotValue}`);
        closeModals();
        syncAllData();
      }
    } catch (err) {
      alert(`Ошибка установки времени: ${err.message}`);
    }
  }

  // ================= 8. Вкладка: Витрина и Стоп-Лист (Products) =================
  function renderProducts() {
    const container = document.getElementById('products-list');
    if (!container) return;

    if (STATE.products.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>Список изделий пуст</p></div>';
      return;
    }

    container.innerHTML = STATE.products
      .map((p) => {
        const esc = SecurityShield.escapeHtml;
        const isAvailable = p.is_available !== 0 && p.is_available !== false;
        return `
        <div class="product-row-card" data-product-id="${esc(p.id || p.slug)}">
          <div class="product-info">
            <div class="product-name-row">
              <span class="product-name">${esc(p.name)}</span>
              <span class="product-gost">ГОСТ ${esc(p.gost || '1985')}</span>
            </div>
            <div class="product-price-control">
              <button class="btn-adj" data-price-delta="-10" data-id="${esc(p.id || p.slug)}">-</button>
              <span class="price-val" id="price-display-${esc(p.id || p.slug)}">${p.price_rub} ₽</span>
              <button class="btn-adj" data-price-delta="10" data-id="${esc(p.id || p.slug)}">+</button>
            </div>
          </div>
          <button class="stock-toggle-btn ${isAvailable ? 'stock-available' : 'stock-stopped'}" 
                  data-toggle-stock="${esc(p.id || p.slug)}" 
                  data-current-stock="${isAvailable ? '1' : '0'}">
            ${isAvailable ? 'В НАЛИЧИИ ✓' : 'СТОП-ЛИСТ ✕'}
          </button>
        </div>
      `;
      })
      .join('');
  }

  async function toggleProductStock(id, currentStock) {
    Native.vibrate(30);
    const newStock = currentStock === '1' ? 0 : 1;
    try {
      const res = await api(`/api/products/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ is_available: newStock }),
      });
      if (res.success) {
        Native.toast(newStock ? 'Изделие снова в наличии на витрине' : 'Изделие переведено в СТОП-ЛИСТ');
        syncAllData();
      }
    } catch (err) {
      alert(`Ошибка обновления наличия: ${err.message}`);
    }
  }

  async function adjustProductPrice(id, delta) {
    Native.vibrate(20);
    const p = STATE.products.find((x) => x.id === id || x.slug === id);
    if (!p) return;
    const newPrice = Math.max(10, (p.price_rub || 0) + delta);

    try {
      const res = await api(`/api/products/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ price_rub: newPrice }),
      });
      if (res.success) {
        p.price_rub = newPrice;
        const el = document.getElementById(`price-display-${id}`);
        if (el) el.textContent = `${newPrice} ₽`;
      }
    } catch (err) {
      alert(`Ошибка изменения цены: ${err.message}`);
    }
  }

  // ================= 9. Вкладка: Книга Отзывов (Reviews) =================
  function renderReviews() {
    const container = document.getElementById('reviews-list');
    if (!container) return;

    if (STATE.reviews.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>Записей в книге отзывов нет</p></div>';
      return;
    }

    container.innerHTML = STATE.reviews
      .map((r) => {
        const esc = SecurityShield.escapeHtml;
        const stars = '★'.repeat(Math.max(1, Math.min(5, r.rating || 5)));
        return `
        <div class="review-card" data-review-id="${esc(r.id)}">
          <div class="review-card-header">
            <span class="review-author">${esc(r.name || 'Покупатель')}</span>
            <span class="review-stars">${stars}</span>
            <span class="review-date">${esc(r.date_str || '')}</span>
          </div>
          <div class="review-text">${esc(r.text)}</div>
          ${r.resolution ? `
            <div class="review-resolution-box">
              <span class="resolution-label">Резолюция директора:</span>
              <div>${esc(r.resolution)}</div>
            </div>
          ` : ''}
          <div class="review-actions-row">
            <button class="small-btn" data-moderate-review="${esc(r.id)}">Резолюция ✍️</button>
            <button class="small-btn text-danger" data-delete-review="${esc(r.id)}">Удалить</button>
          </div>
        </div>
      `;
      })
      .join('');
  }

  function openReviewModerationModal(id) {
    STATE.selectedReviewId = id;
    const r = STATE.reviews.find((x) => x.id === id);
    if (!r) return;

    const modal = document.getElementById('modal-review');
    const info = document.getElementById('modal-review-info');
    const input = document.getElementById('review-resolution-input');

    if (info) {
      info.innerHTML = `<strong>${SecurityShield.escapeHtml(r.name)}:</strong> "${SecurityShield.escapeHtml(r.text)}"`;
    }
    if (input) {
      input.value = r.resolution || 'Рассмотрено администрацией треста';
    }

    if (modal) modal.style.display = 'flex';
  }

  async function saveReviewModeration() {
    if (!STATE.selectedReviewId) return;
    const id = STATE.selectedReviewId;
    const resolution = document.getElementById('review-resolution-input')?.value.trim();

    Native.vibrate(30);
    try {
      const res = await api(`/api/reviews/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ resolution, is_published: 1 }),
      });
      if (res.success) {
        Native.toast('Резолюция директора сохранена');
        closeModals();
        syncAllData();
      }
    } catch (err) {
      alert(`Ошибка сохранения: ${err.message}`);
    }
  }

  async function deleteReview(id) {
    if (!confirm('Удалить эту запись из книги отзывов?')) return;
    Native.vibrate(30);
    try {
      const res = await api(`/api/reviews/${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (res.success) {
        Native.toast('Запись удалена');
        closeModals();
        syncAllData();
      }
    } catch (err) {
      alert(`Ошибка удаления: ${err.message}`);
    }
  }

  // ================= 10. Вкладка: Аналитика и Сводка (Analytics) =================
  function renderAnalytics() {
    let rev = 0;
    let completedCount = 0;
    let readyCount = 0;
    const popularMap = {};

    STATE.orders.forEach((o) => {
      if (o.status !== 'cancelled') {
        rev += Number(o.total || 0);
      }
      if (o.status === 'completed') completedCount++;
      if (o.status === 'ready') readyCount++;

      (o.items || []).forEach((it) => {
        const k = it.name || it.slug;
        popularMap[k] = (popularMap[k] || 0) + (it.qty || 1);
      });
    });

    const avg = STATE.orders.length ? Math.round(rev / STATE.orders.length) : 0;

    const elRev = document.getElementById('kpi-revenue');
    const elCnt = document.getElementById('kpi-orders-count');
    const elSub = document.getElementById('kpi-ready-sub');
    const elAvg = document.getElementById('kpi-avg-check');

    if (elRev) elRev.textContent = `${rev.toLocaleString('ru-RU')} ₽`;
    if (elCnt) elCnt.textContent = String(STATE.orders.length);
    if (elSub) elSub.textContent = `${readyCount} готовы к выдаче`;
    if (elAvg) elAvg.textContent = `${avg.toLocaleString('ru-RU')} ₽`;

    // Популярные изделия
    const chart = document.getElementById('top-products-chart');
    if (chart) {
      const sorted = Object.entries(popularMap).sort((a, b) => b[1] - a[1]).slice(0, 4);
      if (sorted.length === 0) {
        chart.innerHTML = '<span class="text-muted">Данные накапливаются...</span>';
      } else {
        const max = sorted[0][1] || 1;
        chart.innerHTML = sorted
          .map(
            ([name, count]) => `
          <div style="margin-bottom: 8px;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:3px;">
              <span>${SecurityShield.escapeHtml(name)}</span>
              <strong>${count} шт</strong>
            </div>
            <div style="background:rgba(255,255,255,0.06); height:6px; border-radius:3px; overflow:hidden;">
              <div style="background:#e6b422; width:${Math.round((count / max) * 100)}%; height:100%; border-radius:3px;"></div>
            </div>
          </div>
        `
          )
          .join('');
      }
    }

    // Метрики Anti-DDoS
    if (STATE.securityStats) {
      const st = STATE.securityStats;
      const elReq = document.getElementById('stat-req-count');
      const elBlock = document.getElementById('stat-blocked-count');
      const elBans = document.getElementById('stat-bans-count');
      if (elReq) elReq.textContent = String(st.totalRequestsChecked || 0);
      if (elBlock) elBlock.textContent = String(st.ddosBlockedCount || 0);
      if (elBans) elBans.textContent = String(st.activeBansCount || 0);
    }
  }

  // ================= 11. Вкладка: Защита и Журнал Событий =================
  function renderSecurityLogs() {
    const container = document.getElementById('security-logs-container');
    if (!container) return;

    if (STATE.securityLogs.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>Записей аудита пока нет</p></div>';
      return;
    }

    container.innerHTML = STATE.securityLogs
      .slice(0, 30)
      .map((log) => {
        const esc = SecurityShield.escapeHtml;
        const time = new Date(log.timestamp).toLocaleTimeString('ru-RU');
        return `
        <div class="sec-log-item severity-${log.severity || 'info'}">
          <div class="sec-log-meta">
            <span>[${time}] ${esc(log.type)}</span>
            <span>IP: ${esc(log.ip)}</span>
          </div>
          <div class="sec-log-msg">${esc(log.message)}</div>
        </div>
      `;
      })
      .join('');
  }

  // ================= 12. Модальные Окна и Вспомогательное =================
  function closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach((m) => (m.style.display = 'none'));
  }

  function setupInactivityWatcher() {
    const reset = () => {
      STATE.lastActivity = Date.now();
    };
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((evt) => {
      window.addEventListener(evt, reset, { passive: true });
    });

    // Проверка каждые 15 секунд
    setInterval(() => {
      if (STATE.token && !document.getElementById('auth-screen').style.display.includes('flex')) {
        const inactiveMs = Date.now() - STATE.lastActivity;
        if (inactiveMs > 5 * 60 * 1000) {
          lockApp();
        }
      }
    }, 15000);
  }

  // ================= 13. Обработчики Событий =================
  function setupEventListeners() {
    // Вход
    document.getElementById('auth-form')?.addEventListener('submit', handleLogin);

    // Глазок пароля
    document.getElementById('btn-toggle-pwd')?.addEventListener('click', () => {
      const pwd = document.getElementById('auth-password');
      if (pwd) pwd.type = pwd.type === 'password' ? 'text' : 'password';
    });

    // Навигация по вкладкам (Bottom Nav)
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.addEventListener('click', () => {
        Native.vibrate(20);
        const targetTab = item.dataset.tab;
        document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
        document.querySelectorAll('.tab-view').forEach((v) => v.classList.remove('active'));

        item.classList.add('active');
        document.getElementById(targetTab)?.classList.add('active');
        STATE.activeTab = targetTab;
      });
    });

    // Фильтры заказов
    document.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        Native.vibrate(15);
        document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        STATE.orderFilter = pill.dataset.filter;
        renderOrders();
      });
    });

    // Поиск по заказам
    const searchInput = document.getElementById('order-search');
    const clearBtn = document.getElementById('btn-clear-search');
    searchInput?.addEventListener('input', (e) => {
      STATE.orderSearch = e.target.value.trim();
      if (clearBtn) clearBtn.style.display = STATE.orderSearch ? 'block' : 'none';
      renderOrders();
    });
    clearBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      STATE.orderSearch = '';
      clearBtn.style.display = 'none';
      renderOrders();
    });

    // Делегирование кликов по заказам
    document.getElementById('orders-list')?.addEventListener('click', (e) => {
      const btnStatus = e.target.closest('[data-set-status]');
      if (btnStatus) {
        const ticket = btnStatus.dataset.ticket;
        const status = btnStatus.dataset.setStatus;
        updateOrderStatus(ticket, status);
        return;
      }

      const btnCancel = e.target.closest('[data-cancel-order]');
      if (btnCancel) {
        const ticket = btnCancel.dataset.cancelOrder;
        if (confirm(`Отменить заказ № ${ticket}?`)) {
          updateOrderStatus(ticket, 'cancelled');
        }
        return;
      }

      const btnSlot = e.target.closest('[data-change-slot]');
      if (btnSlot) {
        const ticket = btnSlot.dataset.changeSlot;
        openSlotPickerModal(ticket);
        return;
      }

      const phoneLink = e.target.closest('.phone-call-btn');
      if (phoneLink) {
        e.preventDefault();
        Native.dial(phoneLink.dataset.phone);
        return;
      }
    });

    // Модальное окно выбора времени готовности
    document.querySelectorAll('.slot-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.slot-chip').forEach((c) => c.classList.remove('selected'));
        chip.classList.add('selected');
        const customInput = document.getElementById('custom-slot-val');
        if (customInput) customInput.value = chip.dataset.slot;
      });
    });

    document.getElementById('btn-save-slot')?.addEventListener('click', () => {
      const custom = document.getElementById('custom-slot-val')?.value.trim();
      const selectedChip = document.querySelector('.slot-chip.selected');
      const val = custom || (selectedChip ? selectedChip.dataset.slot : 'В ближайшее время');
      saveSelectedSlot(val);
    });

    // Делегирование по витрине
    document.getElementById('products-list')?.addEventListener('click', (e) => {
      const btnStock = e.target.closest('[data-toggle-stock]');
      if (btnStock) {
        toggleProductStock(btnStock.dataset.toggleStock, btnStock.dataset.currentStock);
        return;
      }

      const btnPrice = e.target.closest('[data-price-delta]');
      if (btnPrice) {
        adjustProductPrice(btnPrice.dataset.id, Number(btnPrice.dataset.priceDelta));
        return;
      }
    });

    // Делегирование по отзывам
    document.getElementById('reviews-list')?.addEventListener('click', (e) => {
      const btnMod = e.target.closest('[data-moderate-review]');
      if (btnMod) {
        openReviewModerationModal(btnMod.dataset.moderateReview);
        return;
      }

      const btnDel = e.target.closest('[data-delete-review]');
      if (btnDel) {
        deleteReview(btnDel.dataset.deleteReview);
        return;
      }
    });

    document.getElementById('btn-save-review')?.addEventListener('click', saveReviewModeration);
    document.getElementById('btn-delete-review')?.addEventListener('click', () => {
      if (STATE.selectedReviewId) deleteReview(STATE.selectedReviewId);
    });

    // Шаблоны резолюций
    document.querySelectorAll('.resolution-templates .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const input = document.getElementById('review-resolution-input');
        if (input) input.value = chip.dataset.res;
      });
    });

    // Закрытие модальных окон
    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', closeModals);
    });

    // Быстрые кнопки в шапке
    document.getElementById('btn-sync')?.addEventListener('click', () => {
      Native.vibrate(25);
      syncAllData();
      Native.toast('Синхронизация данных...');
    });

    document.getElementById('btn-quick-lock')?.addEventListener('click', lockApp);
    document.getElementById('btn-unlock-screen')?.addEventListener('click', unlockApp);
    document.getElementById('btn-logout')?.addEventListener('click', logout);

    // Настройки сервера
    const cfgHostInput = document.getElementById('cfg-server-url');
    if (cfgHostInput) cfgHostInput.value = STATE.serverUrl;

    document.querySelectorAll('.preset-chip[data-host]').forEach((chip) => {
      chip.addEventListener('click', () => {
        if (cfgHostInput) cfgHostInput.value = chip.dataset.host;
        STATE.serverUrl = chip.dataset.host;
        localStorage.setItem('tesamye_admin_host', STATE.serverUrl);
        Native.toast('Хост изменён на ' + STATE.serverUrl);
        syncAllData();
      });
    });

    document.getElementById('btn-test-connection')?.addEventListener('click', async () => {
      const host = cfgHostInput.value.trim();
      STATE.serverUrl = host;
      localStorage.setItem('tesamye_admin_host', host);
      Native.toast('Тестирование связи с сервером...');
      try {
        const res = await api('/api/health');
        if (res.connected) {
          Native.playChime('success');
          Native.toast(`Успешно! MariaDB онлайн, задержка ${res.latencyMs || 0}ms`);
        }
      } catch (e) {
        alert('Не удалось связаться с сервером: ' + e.message);
      }
    });

    // Экстренная остановка приёма заказов
    document.getElementById('btn-emergency-stop')?.addEventListener('click', async () => {
      if (!confirm('ВНИМАНИЕ! Активировать экстренный стоп-заказ на всем сайте?')) return;
      Native.vibrate(100);
      try {
        await api('/api/settings', {
          method: 'POST',
          body: JSON.stringify({ emergency_stop: true, emergency_time: new Date().toISOString() }),
        });
        Native.toast('Экстренный стоп-заказ активирован на сайте!');
      } catch (e) {
        alert('Ошибка активации: ' + e.message);
      }
    });

    // Настройки сервера на экране авторизации
    const toggleServerBtn = document.getElementById('btn-toggle-auth-server');
    const serverDropdown = document.getElementById('auth-server-dropdown');
    if (toggleServerBtn && serverDropdown) {
      toggleServerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isHidden = serverDropdown.style.display === 'none';
        serverDropdown.style.display = isHidden ? 'block' : 'none';
      });
    }

    const applyServerBtn = document.getElementById('btn-apply-auth-server');
    const customServerInput = document.getElementById('auth-custom-server-ip');
    if (applyServerBtn && customServerInput) {
      applyServerBtn.addEventListener('click', () => {
        let val = customServerInput.value.trim();
        if (!val) return;
        if (!/^https?:\/\//i.test(val)) val = 'http://' + val;
        STATE.serverUrl = val;
        localStorage.setItem('tesamye_admin_host', val);
        updateAuthServerUI();
        if (serverDropdown) serverDropdown.style.display = 'none';
        Native.toast('Адрес сервера сохранён: ' + val);
      });
    }

    document.querySelectorAll('.mini-chip[data-set-host]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const val = chip.dataset.setHost;
        STATE.serverUrl = val;
        localStorage.setItem('tesamye_admin_host', val);
        updateAuthServerUI();
        if (serverDropdown) serverDropdown.style.display = 'none';
        Native.toast('Выбран сервер: ' + val);
      });
    });
  }

  // Запуск при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
