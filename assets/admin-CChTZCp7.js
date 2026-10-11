import{$ as e,A as t,C as n,Q as r,S as i,T as a,a as o,at as s,ft as c,i as l,j as u,k as d,m as f,mt as p,ot as m,pt as h,ut as g,x as _,y as v}from"./index-CfIXPHmC.js";import{c as y,i as b,l as x,n as S,o as C,s as w,t as T,u as E}from"./order-BKRgHAB3.js";import{clearAllReviews as D,loadUserReviews as O}from"./kniga-CL5lNkbF.js";var k=`tesamye:admin_auth`,A=`KatyaOwner`,j=`2012!KirMax_Nas!2009!1981_Mih`;function M(){try{return sessionStorage.getItem(k)===`granted`}catch{return!1}}function N(){let e=r(`div`,{class:`admin-lock-wrap`});return e.innerHTML=`
    <div class="admin-lock-box" role="dialog" aria-labelledby="lock-h">
      <div class="admin-lock-emblem" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      </div>
      <p class="admin-lock-subtitle">Особый отдел №1 · Министерство пищевой промышленности СССР</p>
      <h1 id="lock-h" class="admin-lock-title">Кабинет директора</h1>
      <p class="admin-lock-desc">Доступ к кастомизации, прейскуранту и рецептурам треста защищён служебной авторизацией.</p>

      <form class="admin-lock-form" data-admin-login-form novalidate>
        <div style="text-align: left; margin-bottom: 1rem;">
          <label style="font-family:var(--font-mono); font-size:0.8rem; text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.35rem; color:var(--ink);">Служебный логин директора</label>
          <input
            type="text"
            name="login"
            class="admin-lock-input"
            required
            autocomplete="username"
            placeholder="Введите логин"
            autofocus
          />
        </div>

        <div style="text-align: left; margin-bottom: 1.2rem;">
          <label style="font-family:var(--font-mono); font-size:0.8rem; text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.35rem; color:var(--ink);">Секретный пароль доступа</label>
          <div style="position:relative;">
            <input
              type="password"
              name="password"
              class="admin-lock-input"
              required
              autocomplete="current-password"
              placeholder="Введите пароль директора"
              data-admin-pwd-input
            />
            <button type="button" data-toggle-pwd style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; font-size:1.15rem; color:var(--ink); opacity:0.75;" aria-label="Показать или скрыть пароль">👁</button>
          </div>
        </div>

        <div class="admin-lock-status" data-lock-status role="status">Введите служебный логин и пароль</div>

        <button type="submit" class="btn btn--kumach" style="width:100%; padding:0.8rem 1rem; font-size:1.05rem; margin-bottom:1.2rem; cursor:pointer;">
          ★ Войти в кабинет директора ★
        </button>
      </form>

      <div style="margin-top: 1rem;">
        <a href="/" class="btn" style="font-size:0.85rem; padding:0.5em 1.2em;">← Вернуться на прилавок</a>
      </div>
    </div>
  `,e}function P(e,t){let n=s(`[data-admin-login-form]`,e),r=s(`[data-lock-status]`,e),i=s(`[data-admin-pwd-input]`,e);s(`[data-toggle-pwd]`,e)?.addEventListener(`click`,()=>{if(!i)return;let e=i.type===`password`;i.type=e?`text`:`password`});let a=e=>{if(e.preventDefault(),!n)return;let a=new FormData(n),o=String(a.get(`login`)||``).trim(),s=String(a.get(`password`)||``).trim();if(o===`KatyaOwner`&&s===`2012!KirMax_Nas!2009!1981_Mih`||s===`2012!KirMax_Nas!2009!1981_Mih`){r&&(r.textContent=`✓ Допуск разрешён! Отпираем кабинет директора…`,r.className=`admin-lock-status is-success`),f(`stamp`);try{sessionStorage.setItem(k,`granted`),localStorage.setItem(`tesamye:admin_user`,A)}catch{}setTimeout(()=>{t()},400)}else r&&(r.textContent=`✕ Неверный логин или пароль! Доступ заблокирован.`,r.className=`admin-lock-status is-error`),f(`click`),i?.focus()};return n?.addEventListener(`submit`,a),()=>{n?.removeEventListener(`submit`,a)}}function F(){let t=c(),n=a(),r=O(),i=b();return`
    <header class="admin-header">
      <div class="admin-header-inner">
        <div>
          <p class="admin-badge-dept">Министерство пищевой промышленности СССР · Главпирожторг</p>
          <h1 class="admin-title">Кабинет директора треста</h1>
        </div>
        <div class="admin-header-actions">
          <div class="admin-db-pill" data-admin-db-pill title="Состояние базы данных MariaDB">
            <span class="admin-db-dot" data-admin-db-dot></span>
            <span class="admin-db-name">MariaDB</span>
            <span class="admin-db-status-badge" data-admin-db-status-badge>Опрос…</span>
          </div>
          <a href="/admin-app/" target="_blank" class="btn btn--gold-accent" title="Открыть мобильную админку в браузере">📱 Мобильная админка</a>
          <a href="/admin-tesamye.apk" download="admin-tesamye.apk" class="btn btn--apk" title="Скачать готовый Android APK файл">📥 Скачать APK</a>
          <button class="btn" type="button" data-admin-lock title="Запереть кабинет директора">🔒 Запереть кабинет</button>
          <a href="/" class="btn">← На прилавок</a>
          <button class="btn btn--kumach" data-admin-save-all>Утвердить все изменения</button>
        </div>
      </div>
    </header>

      <nav class="admin-tabs" role="tablist" aria-label="Разделы кабинета">
        <button class="admin-tab-btn is-active" data-tab="products" role="tab" aria-selected="true">Продукция и полки</button>
        <button class="admin-tab-btn" data-tab="orders" role="tab" aria-selected="false">Заказы и талоны <span class="admin-tab-badge" data-tab-orders-count>${i.length}</span></button>
        <button class="admin-tab-btn" data-tab="database" role="tab" aria-selected="false">База данных MariaDB</button>
        <button class="admin-tab-btn" data-tab="apk-app" role="tab" aria-selected="false">📱 Android Приложение (APK)</button>
        <button class="admin-tab-btn" data-tab="texts" role="tab" aria-selected="false">Тексты и лозунги</button>
        <button class="admin-tab-btn" data-tab="colors" role="tab" aria-selected="false">Оформление и палитра</button>
        <button class="admin-tab-btn" data-tab="features" role="tab" aria-selected="false">Стандарты ГОСТ</button>
        <button class="admin-tab-btn" data-tab="reviews" role="tab" aria-selected="false">Книга отзывов</button>
        <button class="admin-tab-btn" data-tab="backup" role="tab" aria-selected="false">Архив и сброс</button>
      </nav>

      <main class="admin-body">
        <!-- Вкладка: Заказы -->
        <section class="admin-panel-section" data-panel="orders">
          <div class="admin-card">
            <div class="admin-card-head">
              <div>
                <h2 class="admin-card-title">Журнал заказов и выдачи</h2>
                <p>Управление статусами покупательских талонов, передача в пекарские цеха и на кассу.</p>
              </div>
              <div style="display:flex; gap:0.6rem;">
                <button class="btn btn--kumach" data-action="refresh-orders">↻ Обновить журнал</button>
              </div>
            </div>

            <!-- Статистика -->
            <div class="admin-stats-grid" data-orders-stats>
              ${B(i)}
            </div>

            <!-- Поиск и фильтры -->
            <div class="admin-orders-controls">
              <input
                type="text"
                class="admin-search-input"
                placeholder="Поиск по номеру талона, имени или телефону…"
                data-orders-search
              />
              <div class="admin-filter-chips" data-orders-filter-chips>
                <button type="button" class="admin-chip-btn is-active" data-filter-status="all">Все (<span data-count-status="all">${i.length}</span>)</button>
                <button type="button" class="admin-chip-btn" data-filter-status="new">Новые</button>
                <button type="button" class="admin-chip-btn" data-filter-status="baking">В цеху</button>
                <button type="button" class="admin-chip-btn" data-filter-status="ready">Ждут в кассе</button>
                <button type="button" class="admin-chip-btn" data-filter-status="completed">Выданы</button>
              </div>
            </div>

            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Талон и время</th>
                    <th>Покупатель</th>
                    <th>Содержимое авоськи</th>
                    <th>Сумма</th>
                    <th>Текущий статус</th>
                    <th>Управление статусом</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody data-orders-tbody>
                  ${V(i)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Вкладка: Продукция -->
        <section class="admin-panel-section is-active" data-panel="products">
          <div class="admin-card">
            <div class="admin-card-head">
              <div>
                <h2 class="admin-card-title">Ассортимент витрины</h2>
                <p>Управление карточками пирожных: названия, рецептуры, цены и категории.</p>
              </div>
              <div style="display:flex; gap:0.6rem;">
                <button class="btn btn--kumach" data-action="open-add-modal">+ Добавить пирожное</button>
                <button class="btn" data-action="reset-products">Сбросить до ГОСТа</button>
              </div>
            </div>

            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Вид</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Цена</th>
                    <th>1985 г.</th>
                    <th>ГОСТ</th>
                    <th>Статус</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody data-products-tbody>
                  ${R(n)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Вкладка: Тексты -->
        <section class="admin-panel-section" data-panel="texts">
          <div class="admin-card">
            <div class="admin-card-head">
              <h2 class="admin-card-title">Тексты и вывески треста</h2>
              <button class="btn btn--kumach" data-save-texts>Сохранить тексты</button>
            </div>
            <form class="admin-form-grid" data-texts-form>
              <div class="admin-field">
                <label>Название треста (логотип)</label>
                <input type="text" name="brandName" value="${e(t.brandName)}" required />
              </div>
              <div class="admin-field">
                <label>Главный девиз / слоган</label>
                <input type="text" name="brandSlogan" value="${e(t.brandSlogan)}" required />
              </div>
              <div class="admin-field" style="grid-column: 1 / -1;">
                <label>Официальное объявление треста (плакат вверху сайта)</label>
                <textarea name="announcement" rows="2">${e(t.announcement)}</textarea>
              </div>
              <div class="admin-field">
                <label>Телефон для заказов</label>
                <input type="text" name="phone" value="${e(t.phone)}" />
              </div>
              <div class="admin-field">
                <label>Адрес прилавка и пекарни</label>
                <input type="text" name="address" value="${e(t.address)}" />
              </div>
            </form>
          </div>
        </section>

        <!-- Вкладка: Цвета -->
        <section class="admin-panel-section" data-panel="colors">
          <div class="admin-card">
            <div class="admin-card-head">
              <h2 class="admin-card-title">Советская колористика</h2>
              <button class="btn btn--kumach" data-save-colors>Применить палитру</button>
            </div>

            <p style="margin-bottom:1rem;">Быстрые цветовые пресеты эпохи:</p>
            <div class="admin-presets">
              ${Object.entries(g).map(([t,n])=>`
                <button type="button" class="btn" data-preset="${t}">★ ${e(n.label)}</button>`).join(``)}
            </div>

            <div class="admin-colors-grid" data-colors-inputs>
              <div class="admin-color-picker-item">
                <input type="color" name="kumach" value="${t.colors.kumach}" />
                <div class="admin-color-info">
                  <span class="admin-color-title">Красный Кумач</span>
                  <span class="admin-color-val">${t.colors.kumach}</span>
                </div>
              </div>
              <div class="admin-color-picker-item">
                <input type="color" name="paper" value="${t.colors.paper}" />
                <div class="admin-color-info">
                  <span class="admin-color-title">Газетная бумага</span>
                  <span class="admin-color-val">${t.colors.paper}</span>
                </div>
              </div>
              <div class="admin-color-picker-item">
                <input type="color" name="cream" value="${t.colors.cream}" />
                <div class="admin-color-info">
                  <span class="admin-color-title">Сливочный крем</span>
                  <span class="admin-color-val">${t.colors.cream}</span>
                </div>
              </div>
              <div class="admin-color-picker-item">
                <input type="color" name="ink" value="${t.colors.ink}" />
                <div class="admin-color-info">
                  <span class="admin-color-title">Чернила / Бакелит</span>
                  <span class="admin-color-val">${t.colors.ink}</span>
                </div>
              </div>
              <div class="admin-color-picker-item">
                <input type="color" name="gold" value="${t.colors.gold}" />
                <div class="admin-color-info">
                  <span class="admin-color-title">Карамель / Золото</span>
                  <span class="admin-color-val">${t.colors.gold}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Вкладка: Опции ГОСТ -->
        <section class="admin-panel-section" data-panel="features">
          <div class="admin-card">
            <div class="admin-card-head">
              <h2 class="admin-card-title">Стандарты витрины и визуальные эффекты</h2>
              <button class="btn btn--kumach" data-save-features>Сохранить стандарты</button>
            </div>
            <div class="admin-toggles-grid" data-features-inputs>
              <label class="admin-toggle-label">
                <input type="checkbox" name="showAnnouncement" ${t.showAnnouncement?`checked`:``} />
                <span>Показывать верхнее объявление треста</span>
              </label>
              <label class="admin-toggle-label">
                <input type="checkbox" name="steam" ${t.features.steam?`checked`:``} />
                <span>Горячий пар над свежей выпечкой</span>
              </label>
              <label class="admin-toggle-label">
                <input type="checkbox" name="neonGlow" ${t.features.neonGlow?`checked`:``} />
                <span>Мерцание неоновой вывески «Газосвет»</span>
              </label>
              <label class="admin-toggle-label">
                <input type="checkbox" name="pennants" ${t.features.pennants?`checked`:``} />
                <span>Советская праздничная гирлянда флажков</span>
              </label>
              <label class="admin-toggle-label">
                <input type="checkbox" name="soundDefault" ${t.features.soundDefault?`checked`:``} />
                <span>Звуковое сопровождение (радио «Маяк», щелчки)</span>
              </label>
            </div>
          </div>
        </section>

        <!-- Вкладка: Книга отзывов -->
        <section class="admin-panel-section" data-panel="reviews">
          <div class="admin-card">
            <div class="admin-card-head">
              <div>
                <h2 class="admin-card-title">Модерация Книги жалоб и предложений</h2>
                <p>Всего записей покупателей: <b data-reviews-count>${r.length}</b></p>
              </div>
              <button class="btn btn--kumach" data-action="clear-all-reviews">Очистить все отзывы</button>
            </div>
            <div class="admin-table-wrap">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Дата</th>
                    <th>Оценка</th>
                    <th>Текст</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody data-reviews-tbody>
                  ${z(r)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Вкладка: Архив и сброс -->
        <section class="admin-panel-section" data-panel="backup">
          <div class="admin-card">
            <div class="admin-card-head">
              <h2 class="admin-card-title">Резервная копия и заводской сброс</h2>
            </div>
            <p style="margin-bottom:1.5rem;">Вы можете выгрузить всю конфигурацию треста в файл JSON или загрузить сохранённую ранее.</p>
            <div style="display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:2rem;">
              <button class="btn btn--kumach" data-action="export-json">Экспорт настроек (JSON)</button>
              <label class="btn" style="cursor:pointer;">
                Импорт настроек (JSON)
                <input type="file" accept=".json" data-action="import-json" style="display:none;" />
              </label>
              <button class="btn" style="background:#fee; color:#900; border-color:#900;" data-action="full-reset">
                ⚠ Полный сброс к заводскому ГОСТу
              </button>
            </div>
          </div>
        </section>

        <!-- Вкладка: База данных MariaDB -->
        <section class="admin-panel-section" data-panel="database">
          <div class="admin-card">
            <div class="admin-card-head">
              <div>
                <h2 class="admin-card-title">Центральная база данных MariaDB</h2>
                <p>Управление реляционной базой данных треста: продукция, покупатели, заказы, чеки и архивы.</p>
              </div>
              <div style="display:flex; gap:0.6rem;">
                <button class="btn btn--kumach" data-action="ping-mariadb">↻ Проверить связь</button>
              </div>
            </div>

            <div class="admin-db-info-card">
              <div class="admin-db-info-grid">
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">СУБД</span>
                  <span class="admin-db-info-value" data-db-info-type>MariaDB 11.x (InnoDB)</span>
                </div>
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">Состояние узла</span>
                  <span class="admin-db-info-value" data-db-info-status>Опрос состояния…</span>
                </div>
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">Хост / Порт</span>
                  <span class="admin-db-info-value" data-db-info-host>127.0.0.1:3306</span>
                </div>
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">База данных</span>
                  <span class="admin-db-info-value">tesamye_trest</span>
                </div>
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">Кодировка</span>
                  <span class="admin-db-info-value">utf8mb4_unicode_ci</span>
                </div>
                <div class="admin-db-info-item">
                  <span class="admin-db-info-label">Сетевой отклик</span>
                  <span class="admin-db-info-value" data-db-info-latency>—</span>
                </div>
              </div>
            </div>

            <div style="margin-top: 1.5rem; background: var(--cream); border: 2px solid var(--ink); border-radius: var(--radius); padding: 1.2rem;">
              <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--ink);">Таблицы MariaDB треста:</h3>
              <ul style="margin: 0.5rem 0 1rem 1.2rem; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6;">
                <li><code>products</code> — 12 видов пирожных по ГОСТу СССР</li>
                <li><code>orders</code> — покупательские талоны и статусы выпечки</li>
                <li><code>order_items</code> — позиции чека и количество</li>
                <li><code>users</code> — карточки покупателей, звёзды и телефон</li>
                <li><code>sms_codes</code> — проверочные коды телеграмм</li>
                <li><code>reviews</code> — записи книги жалоб и предложений</li>
                <li><code>site_settings</code> — конфигурация витрины и цвета</li>
              </ul>
              <div style="display:flex; flex-wrap:wrap; gap:0.8rem; margin-top:1rem;">
                <button class="btn btn--kumach" data-action="sync-all-to-mariadb">Зафиксировать все данные в MariaDB</button>
              </div>
            </div>

            <div style="margin-top: 1.5rem; border-top: 1px dashed var(--ink); padding-top: 1rem; font-family: var(--font-mono); font-size: 0.82rem; opacity: 0.85;">
              <p style="margin:0.2rem 0;"><b>Запуск СУБД MariaDB в Docker:</b> <code>docker compose up -d</code></p>
              <p style="margin:0.2rem 0;"><b>Запуск шлюза Node.js:</b> <code>npm run server</code> (порт 3001)</p>
            </div>
          </div>
        </section>

        <!-- Вкладка: Мобильное приложение (Android APK) -->
        <section class="admin-panel-section" data-panel="apk-app">
          <div class="admin-card">
            <div class="admin-card-head">
              <div>
                <h2 class="admin-card-title">Мобильное приложение директора треста (Android APK)</h2>
                <p>Официальный автономный Android-клиент для оперативного управления заказами, витриной и безопасностью.</p>
              </div>
              <div style="display:flex; gap:0.6rem; align-items:center; flex-wrap:wrap;">
                <a href="/admin-tesamye.apk" download="admin-tesamye.apk" class="btn btn--apk">📥 Скачать APK (1.17 МБ)</a>
                <a href="/admin-app/" target="_blank" class="btn btn--gold-accent">Запустить Web-версию ↗</a>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.2rem; margin-top:1.5rem;">
              <div style="background:var(--parchment, #fffdf8); border:2px solid var(--ink); padding:1.2rem; border-radius:var(--radius, 4px);">
                <h3 style="font-family:var(--font-display); font-size:1.15rem; margin-bottom:0.6rem; color:var(--kumach);">🛡️ Встроенная защита от взлома</h3>
                <ul style="line-height:1.6; font-size:0.9rem; padding-left:1.2rem; color:var(--ink);">
                  <li><strong>Anti-Brute-Force:</strong> Блокировка на 30 сек после 3 ошибок, на 5 минут после 5.</li>
                  <li><strong>Honeypot:</strong> Невидимые ловушки ботов, отсекающие автосканеры.</li>
                  <li><strong>Журнал безопасности:</strong> Аудит всех попыток входа и атак в реальном времени.</li>
                  <li><strong>Автоблокировка экрана:</strong> Защита кабинета при неактивности более 5 минут.</li>
                  <li><strong>Защита сессий:</strong> Доступ строго по мастер-паролю с защитой токенами.</li>
                </ul>
              </div>

              <div style="background:var(--parchment, #fffdf8); border:2px solid var(--ink); padding:1.2rem; border-radius:var(--radius, 4px);">
                <h3 style="font-family:var(--font-display); font-size:1.15rem; margin-bottom:0.6rem; color:var(--ink);">📋 Возможности управления</h3>
                <ul style="line-height:1.6; font-size:0.9rem; padding-left:1.2rem; color:var(--ink);">
                  <li><strong>Заказы:</strong> Фильтрация, статусы («В сборку», «Готов к выдаче», «Выдан»).</li>
                  <li><strong>Назначение времени:</strong> Админ сам выбирает и меняет время готовности покупателю.</li>
                  <li><strong>Витрина и Стоп-лист:</strong> Включение/отключение пирожных и смена цен в 1 касание.</li>
                  <li><strong>Книга отзывов:</strong> Проверка отзывов и публикация официальных резолюций.</li>
                  <li><strong>Офлайн-режим:</strong> Локальный кэш данных при обрыве связи с сервером.</li>
                </ul>
              </div>
            </div>

            <div style="margin-top:1.5rem; background:rgba(46,125,50,0.08); border:1px solid #2e7d32; padding:1.2rem; border-radius:var(--radius, 4px);">
              <strong style="color:#1b5e20; font-size:1rem;">Инструкция по установке на Android телефон / планшет:</strong>
              <ol style="margin-top:0.6rem; padding-left:1.2rem; font-size:0.9rem; line-height:1.6;">
                <li>Нажмите кнопку <strong>«Скачать APK»</strong> прямо с телефона (или перенесите файл <code>admin-tesamye.apk</code> через USB / Telegram).</li>
                <li>Разрешите установку из доверенного источника в настройках безопасности Android при первом открытии.</li>
                <li>Приложение установится с фирменным гербом «Те Самые» и готово к работе сразу же!</li>
                <li>Приложение подключается к вашему серверу (по умолчанию <code>http://10.0.2.2:3001</code> или Wi-Fi IP вашего ПК).</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <!-- Модальное окно создания/редактирования пирожного -->
      <div class="admin-modal" data-product-modal role="dialog" aria-modal="true" aria-labelledby="apm-title">
        <div class="admin-modal-backdrop" data-close-modal></div>
        <div class="admin-modal-dialog">
          <button class="admin-modal-close" data-close-modal type="button" aria-label="Закрыть">✕</button>
          <h2 id="apm-title" class="admin-card-title" style="margin-bottom:1.2rem;" data-modal-title>Добавить пирожное</h2>
          <form data-product-form class="admin-form-grid">
            <input type="hidden" name="id" value="" />
            <div class="admin-field">
              <label>Название пирожного</label>
              <input type="text" name="name" required placeholder="напр., Птичье молоко" />
            </div>
            <div class="admin-field">
              <label>Форма выпечки (SVG)</label>
              <select name="slug" required>
                ${l.map(e=>`
                  <option value="${e}">${e}</option>`).join(``)}
              </select>
            </div>
            <div class="admin-field">
              <label>Категория</label>
              <select name="category" required>
                <option value="chocolate">Шоколадные</option>
                <option value="cream">Кремовые</option>
                <option value="puff">Слоёные</option>
                <option value="light">Лёгкие</option>
                <option value="classic">Классика</option>
              </select>
            </div>
            <div class="admin-field">
              <label>Короткий слоган</label>
              <input type="text" name="tagline" placeholder="напр., Нежность в шоколаде" required />
            </div>
            <div class="admin-field">
              <label>Цена сегодня (руб.)</label>
              <input type="number" name="priceRub" min="10" max="9900" value="180" required />
            </div>
            <div class="admin-field">
              <label>Цена 1985 г. (коп.)</label>
              <input type="number" name="priceKop1985" min="1" max="999" value="22" required />
            </div>
            <div class="admin-field">
              <label>Вес (грамм)</label>
              <input type="number" name="weightG" min="10" max="1000" value="75" required />
            </div>
            <div class="admin-field">
              <label>Штамп ГОСТ</label>
              <input type="text" name="gost" value="ГОСТ ТС-001" required />
            </div>
            <div class="admin-field" style="grid-column: 1 / -1;">
              <label>Описание</label>
              <textarea name="description" rows="3" required placeholder="Описание вкуса и рецептуры..."></textarea>
            </div>
            <div class="admin-field">
              <label>Тег прилавка</label>
              <select name="tag">
                <option value="">Без тега</option>
                <option value="hit">ХИТ СЕЗОНА</option>
                <option value="new">НОВИНКА</option>
                <option value="limited">ОСТАЛОСЬ 3 ШТ.</option>
              </select>
            </div>
            <div class="admin-field" style="grid-column: 1 / -1;">
              <label>Фотография изделия (URL или путь, напр. /images/kartoshka.jpg)</label>
              <input type="text" name="image" placeholder="/images/kartoshka.jpg (необязательно)" />
            </div>
            <div style="grid-column: 1 / -1; display:flex; justify-content:flex-end; gap:0.8rem; margin-top:1rem;">
              <button type="button" class="btn" data-close-modal>Отмена</button>
              <button type="submit" class="btn btn--kumach" data-modal-submit>Сохранить пирожное</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Всплывающий советский штамп об успехе -->
      <div class="admin-stamp-toast" data-stamp-toast aria-live="polite">
        <span>★ УТВЕРЖДЕНО ДИРЕКТОРОМ ★</span>
      </div>
    `}function I(e,r){let o=a(),l=c(),_=s(`[data-admin-lock]`,e);_&&_.addEventListener(`click`,()=>{try{sessionStorage.removeItem(k)}catch{}f(`click`),r()});let v=s(`[data-stamp-toast]`,e),A=(e=`★ УТВЕРЖДЕНО ДИРЕКТОРОМ ★`)=>{v.querySelector(`span`).textContent=e,v.classList.add(`is-shown`),f(`stamp`),setTimeout(()=>v.classList.remove(`is-shown`),2200)},j=m(`.admin-tab-btn`,e),M=m(`.admin-panel-section`,e);j.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;j.forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),M.forEach(e=>{e.classList.toggle(`is-active`,e.dataset.panel===t)}),f(`click`)})});let N=s(`[data-product-modal]`,e),P=s(`[data-product-form]`,e),F=s(`[data-modal-title]`,e),I=e=>{P.reset(),e?(F.textContent=`Редактировать пирожное`,P.elements.namedItem(`id`)&&(P.elements.namedItem(`id`).value=e.id),P.elements.namedItem(`name`).value=e.name,P.elements.namedItem(`slug`).value=e.slug,P.elements.namedItem(`category`).value=e.category,P.elements.namedItem(`tagline`).value=e.tagline,P.elements.namedItem(`priceRub`).value=String(e.priceRub),P.elements.namedItem(`priceKop1985`).value=String(e.priceKop1985),P.elements.namedItem(`weightG`).value=String(e.weightG),P.elements.namedItem(`gost`).value=e.gost,P.elements.namedItem(`description`).value=e.description,P.elements.namedItem(`tag`).value=e.tags[0]||``,P.elements.namedItem(`image`)&&(P.elements.namedItem(`image`).value=e.image||``)):(F.textContent=`Добавить новое пирожное`,P.elements.namedItem(`id`).value=``,P.elements.namedItem(`image`)&&(P.elements.namedItem(`image`).value=``)),N.classList.add(`is-open`),f(`click`)},L=()=>{N.classList.remove(`is-open`)};e.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-close-modal]`))L();else if(t.closest(`[data-action="open-add-modal"]`))I();else if(t.closest(`[data-edit-prod]`)){let e=t.closest(`[data-edit-prod]`).dataset.editProd,n=o.find(t=>t.id===e);n&&I(n)}else if(t.closest(`[data-del-prod]`)){let e=t.closest(`[data-del-prod]`).dataset.delProd;confirm(`Вы уверены, что хотите снять это пирожное с производства?`)&&(n(e),o=a(),Z(),A(`Товар снят с производства`))}else if(t.closest(`[data-action="reset-products"]`))confirm(`Восстановить заводской перечень изделий ГОСТ?`)&&(d(),o=a(),Z(),A(`Ассортимент ГОСТ восстановлен`));else if(t.closest(`[data-del-review]`)){let e=t.closest(`[data-del-review]`).dataset.delReview,n=O().filter(t=>t.id!==e);try{localStorage.setItem(`tesamye:reviews:v1`,JSON.stringify(n))}catch{}Q(),A(`Запись изъята из книги`)}else if(t.closest(`[data-action="clear-all-reviews"]`))confirm(`Очистить все отзывы в Книге жалоб и предложений?`)&&(D(),Q(),A(`Книга отзывов очищена`));else if(t.closest(`[data-action="full-reset"]`))confirm(`ВНИМАНИЕ: Сбросить ВСЕ настройки сайта, тексты, цвета и ассортимент до заводских?`)&&(h(),d(),D(),A(`Все параметры сброшены до ГОСТа`),setTimeout(()=>location.reload(),1200));else if(t.closest(`[data-action="export-json"]`)){let e={settings:c(),products:a(),reviews:O(),orders:b()},t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tesamye-trest-backup-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n),A(`Архив треста выгружен`)}}),P.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(P),n=String(t.get(`id`)||``),r=String(t.get(`name`)||``).trim(),s=String(t.get(`slug`)||`kartoshka`),c=String(t.get(`category`)||`classic`),l=String(t.get(`tagline`)||``).trim(),d=String(t.get(`description`)||``).trim(),f=Number(t.get(`priceRub`)||150),p=Number(t.get(`priceKop1985`)||22),m=Number(t.get(`weightG`)||75),h=String(t.get(`gost`)||`ГОСТ ТС-001`).trim(),g=String(t.get(`tag`)||``),_=String(t.get(`image`)||``).trim(),v=g?[g]:[];n?(u(n,{name:r,slug:s,category:c,tagline:l,description:d,priceRub:f,priceKop1985:p,weightG:m,gost:h,tags:v,image:_||void 0}),A(`Пирожное обновлено в картотеке`)):(i({name:r,slug:s,category:c,tagline:l,description:d,priceRub:f,priceKop1985:p,weightG:m,shelfLifeHours:72,gost:h,composition:[`Мука высшего сорта`,`Сливочное масло ГОСТ`,`Сахарный песок`],layers:[{id:`top`,label:`Верхний слой`,note:`по ГОСТу`},{id:`mid`,label:`Начинка`,note:`натуральные ингредиенты`}],tags:v,image:_||void 0}),A(`Новое пирожное утверждено в цех!`)),L(),o=a(),Z()});let H=s(`[data-save-texts]`,e);H?.addEventListener(`click`,()=>{let t=s(`[data-texts-form]`,e),n=new FormData(t);l.brandName=String(n.get(`brandName`)||`ТЕ САМЫЕ`),l.brandSlogan=String(n.get(`brandSlogan`)||``),l.announcement=String(n.get(`announcement`)||``),l.phone=String(n.get(`phone`)||``),l.address=String(n.get(`address`)||``),p(l),A(`Тексты треста утверждены`)});let U=s(`[data-save-colors]`,e);U?.addEventListener(`click`,()=>{s(`[data-colors-inputs]`,e).querySelectorAll(`input[type="color"]`).forEach(e=>{let t=e.name;t in l.colors&&(l.colors[t]=e.value)}),p(l),A(`Палитра утверждена`)}),m(`[data-preset]`,e).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.preset,r=g[n];if(r){l.colors={...r.colors};let t=s(`[data-colors-inputs]`,e);Object.entries(r.colors).forEach(([e,n])=>{let r=t.querySelector(`input[name="${e}"]`);r&&(r.value=n);let i=r?.parentElement?.querySelector(`.admin-color-val`);i&&(i.textContent=n)}),p(l),A(`Пресет «${r.label}» применён`)}})}),e.querySelectorAll(`.admin-color-picker-item input[type="color"]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=e.parentElement?.querySelector(`.admin-color-val`);t&&(t.textContent=e.value)})});let W=s(`[data-save-features]`,e);W?.addEventListener(`click`,()=>{let t=s(`[data-features-inputs]`,e);l.showAnnouncement=t.querySelector(`input[name="showAnnouncement"]`).checked,l.features.steam=t.querySelector(`input[name="steam"]`).checked,l.features.neonGlow=t.querySelector(`input[name="neonGlow"]`).checked,l.features.pennants=t.querySelector(`input[name="pennants"]`).checked,l.features.soundDefault=t.querySelector(`input[name="soundDefault"]`).checked,p(l),A(`Стандарты ГОСТ сохранены`)}),s(`[data-admin-save-all]`,e)?.addEventListener(`click`,()=>{H?.click(),U?.click(),W?.click(),A(`★ ВСЕ ИЗМЕНЕНИЯ УТВЕРЖДЕНЫ ДИРЕКТОРОМ ★`)});async function G(){let t=s(`[data-admin-db-dot]`,e),n=s(`[data-admin-db-status-badge]`,e),r=s(`[data-db-info-status]`,e),i=s(`[data-db-info-latency]`,e),a=s(`[data-db-info-host]`,e),o=s(`[data-db-info-type]`,e),c=await y();c.connected?(t?.classList.add(`is-connected`),n&&(n.textContent=`Подключено`,n.classList.add(`is-connected`)),r&&(r.textContent=`Активен (В сети)`,r.style.color=`#235C3B`),i&&(i.textContent=`${c.latencyMs??1} мс`),a&&c.host&&(a.textContent=`${c.host}:3306`),o&&c.version&&(o.textContent=`${c.version} (InnoDB)`)):(t?.classList.remove(`is-connected`),n&&(n.textContent=`Автономно`,n.classList.remove(`is-connected`)),r&&(r.textContent=`Автономный режим (Локально)`,r.style.color=`#B57B3C`),i&&(i.textContent=`—`))}G(),e.addEventListener(`click`,e=>{let t=e.target;t.closest(`[data-action="ping-mariadb"]`)?G().then(()=>{A(`Связь с MariaDB проверена`)}):t.closest(`[data-action="sync-all-to-mariadb"]`)&&(b().forEach(e=>{x({ticket:e.ticket,name:e.name,phone:e.phone,slot:e.slot,withBow:e.withBow,total:e.total,status:e.status,note:e.note,items:e.lines.map(e=>({id:e.product.id||e.product.slug,slug:e.product.slug,name:e.product.name,qty:e.qty,price:e.product.priceRub}))})}),E(l),A(`Все данные зафиксированы в MariaDB`))}),s(`[data-action="import-json"]`,e)?.addEventListener(`change`,e=>{let n=e.target.files?.[0];if(!n)return;let r=new FileReader;r.onload=e=>{try{let n=e.target?.result,r=JSON.parse(n);r.settings&&p(r.settings),Array.isArray(r.products)&&t(r.products),Array.isArray(r.reviews)&&localStorage.setItem(`tesamye:reviews:v1`,JSON.stringify(r.reviews)),Array.isArray(r.orders)&&localStorage.setItem(`tesamye:orders:v1`,JSON.stringify(r.orders)),A(`Архив успешно импортирован`),setTimeout(()=>location.reload(),1200)}catch{alert(`Ошибка чтения файла архива JSON!`)}},r.readAsText(n)});let K=b(),q=`all`,J=``;function Y(){K=b();let t=K;if(q!==`all`&&(t=t.filter(e=>e.status===q)),J){let e=J.toLowerCase();t=t.filter(t=>t.ticket.toLowerCase().includes(e)||t.name.toLowerCase().includes(e)||t.phone.toLowerCase().includes(e))}let n=s(`[data-orders-tbody]`,e);n&&(n.innerHTML=V(t));let r=s(`[data-orders-stats]`,e);r&&(r.innerHTML=B(K));let i=s(`[data-tab-orders-count]`,e);i&&(i.textContent=String(K.length));let a=s(`[data-count-status="all"]`,e);a&&(a.textContent=String(K.length))}e.addEventListener(`change`,e=>{let t=e.target.closest(`[data-status-change]`);if(t){let e=t.dataset.statusChange,n=t.value;if(w(e,n)){f(`stamp`);let t=T[n]||T.new;A(`Талон ${e}: «${t.label}»`),Y()}return}let n=e.target.closest(`[data-slot-edit]`);if(n){let e=n.dataset.slotEdit,t=n.value.trim()||`По готовности`;C(e,t),f(`click`),A(`Талон ${e}: время «${t}» сохранено`)}});let X=s(`[data-orders-search]`,e);X?.addEventListener(`input`,()=>{J=X.value.trim(),Y()}),e.querySelectorAll(`[data-filter-status]`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`[data-filter-status]`).forEach(e=>e.classList.remove(`is-active`)),t.classList.add(`is-active`),q=t.dataset.filterStatus,Y(),f(`click`)})}),e.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-del-order]`)){let e=t.closest(`[data-del-order]`).dataset.delOrder;confirm(`Аннулировать и удалить талон № ${e}?`)&&(S(e),A(`Талон № ${e} аннулирован`),Y())}else t.closest(`[data-action="refresh-orders"]`)&&(Y(),A(`Журнал заказов синхронизирован`))});function Z(){let t=s(`[data-products-tbody]`,e);t&&(t.innerHTML=R(o))}function Q(){let t=O(),n=s(`[data-reviews-tbody]`,e),r=s(`[data-reviews-count]`,e);n&&(n.innerHTML=z(t)),r&&(r.textContent=String(t.length))}return()=>{}}var L={meta:{title:`Кабинет директора — Трест «Те Самые»`,description:`Панель управления и кастомизации треста сладостей и выпечки Главпирожторга.`},render(){let e=r(`div`,{class:`admin-page`});return M()?e.innerHTML=F():e.appendChild(N()),e},mount(e){let t=e.root,n=null,r=()=>{n?.(),n=null,n=M()?I(t,()=>{t.innerHTML=``,t.appendChild(N()),r()}):P(t,()=>{t.innerHTML=F(),r()})};return r(),()=>{n?.()}}};function R(t){return t.length?t.map(t=>`
    <tr>
      <td><div class="admin-prod-preview">${t.image?`<img class="admin-thumb-photo" src="${t.image}" alt="${e(t.name)}" style="width:36px;height:36px;object-fit:cover;border-radius:4px;border:1px solid var(--ink);display:block;" />`:o(t.slug,`mini`)}</div></td>
      <td><b>${e(t.name)}</b><br><small style="color:#666;">${e(t.tagline)}</small></td>
      <td>${v[t.category]||t.category}</td>
      <td><b>${t.priceRub} ₽</b></td>
      <td>${t.priceKop1985} коп.</td>
      <td><code style="font-size:0.8rem;">${e(t.gost)}</code></td>
      <td>${t.tags[0]?`<span class="admin-tag-badge">${_[t.tags[0]]||t.tags[0]}</span>`:`—`}</td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn" style="padding:0.3rem 0.6rem; font-size:0.8rem;" data-edit-prod="${t.id}">Ред.</button>
          <button class="btn" style="padding:0.3rem 0.6rem; font-size:0.8rem; background:#fee; color:#900; border-color:#900;" data-del-prod="${t.id}">✕</button>
        </div>
      </td>
    </tr>`).join(``):`<tr><td colspan="8" style="text-align:center; padding:2rem;">В картотеке нет пирожных. Нажмите «+ Добавить пирожное».</td></tr>`}function z(t){return t.length?t.map(t=>`
    <tr>
      <td><b>${e(t.name)}</b></td>
      <td><small>${e(t.date)}</small></td>
      <td>${`★`.repeat(t.rating)}</td>
      <td style="max-width:320px;"><small>«${e(t.text)}»</small></td>
      <td>
        <button class="btn" style="padding:0.3rem 0.6rem; font-size:0.8rem; background:#fee; color:#900; border-color:#900;" data-del-review="${t.id}">Удалить</button>
      </td>
    </tr>`).join(``):`<tr><td colspan="5" style="text-align:center; padding:2rem;">В Книге отзывов сейчас нет записей.</td></tr>`}function B(e){return`
    <div class="admin-stat-card">
      <span class="admin-stat-label">Всего талонов</span>
      <span class="admin-stat-val">${e.length}</span>
    </div>
    <div class="admin-stat-card">
      <span class="admin-stat-label">В пекарских цехах</span>
      <span class="admin-stat-val" style="color:var(--kumach);">${e.filter(e=>[`new`,`accepted`,`baking`,`packed`].includes(e.status)).length}</span>
    </div>
    <div class="admin-stat-card">
      <span class="admin-stat-label">Ждут в кассе №3</span>
      <span class="admin-stat-val" style="color:#235C3B;">${e.filter(e=>e.status===`ready`).length}</span>
    </div>
    <div class="admin-stat-card">
      <span class="admin-stat-label">Сумма заказов</span>
      <span class="admin-stat-val">${e.reduce((e,t)=>e+(t.status===`cancelled`?0:t.total),0).toLocaleString(`ru-RU`)} ₽</span>
    </div>
  `}function V(t){return t.length?t.map(t=>{let n=T[t.status]||T.new;return`
    <tr data-order-row="${e(t.ticket)}">
      <td>
        <span class="admin-ticket-num">№ ${e(t.ticket)}</span><br>
        <small style="color:#666;">${new Date(t.createdAt).toLocaleTimeString(`ru-RU`,{hour:`2-digit`,minute:`2-digit`})} · ${new Date(t.createdAt).toLocaleDateString(`ru-RU`,{day:`2-digit`,month:`2-digit`})}</small>
      </td>
      <td>
        <b>${e(t.name)}</b><br>
        <div style="margin-top:0.35rem;">
          <small style="color:#666; display:block; font-size:0.75rem;">Время выдачи (выбор админа):</small>
          <input
            type="text"
            value="${e(t.slot||`По согласованию`)}"
            data-slot-edit="${e(t.ticket)}"
            title="Нажмите Enter или смените фокус для сохранения времени"
            style="font-family:var(--font-mono); font-size:0.78rem; padding:0.2rem 0.4rem; border:1px solid var(--ink); border-radius:3px; width:100%; max-width:160px; background:#fff; margin-top:2px;"
          />
        </div>
      </td>
      <td>
        <ul class="admin-order-items">
          ${t.lines.map(t=>`<li><b>${t.qty} шт.</b> × ${e(t.product.name)}</li>`).join(``)}
        </ul>
        ${t.withBow?`<span style="font-size:0.75rem; color:var(--kumach); font-weight:700;">★ С праздничным бантиком</span>`:``}
        ${t.note?`<div style="font-size:0.75rem; color:#555; margin-top:0.2rem; font-style:italic;">«${e(t.note)}»</div>`:``}
      </td>
      <td>
        <b style="font-size:1.05rem;">${t.total} ₽</b>
      </td>
      <td>
        <span class="admin-status-badge" style="color:${n.color}; background:${n.bg}; border-color:${n.color};" data-order-status-badge="${e(t.ticket)}">
          ${e(n.label)}
        </span>
      </td>
      <td>
        <select class="admin-status-select" data-status-change="${e(t.ticket)}" aria-label="Сменить статус талона ${e(t.ticket)}">
          ${Object.values(T).map(e=>`<option value="${e.code}" ${e.code===t.status?`selected`:``}>${e.label}</option>`).join(``)}
        </select>
      </td>
      <td>
        <button class="btn" style="padding:0.3rem 0.6rem; font-size:0.8rem; background:#fee; color:#900; border-color:#900;" data-del-order="${e(t.ticket)}" title="Аннулировать / удалить талон">✕</button>
      </td>
    </tr>`}).join(``):`<tr><td colspan="7" style="text-align:center; padding:2rem; color:#666;">В журнале нет подходящих талонов.</td></tr>`}export{A as ADMIN_LOGIN,j as ADMIN_PASSWORD,L as default};