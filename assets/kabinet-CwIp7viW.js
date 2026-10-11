import{$ as e,Q as t,at as n,m as r,r as i,v as a}from"./index-CfIXPHmC.js";import{r as o,t as s}from"./order-BKRgHAB3.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./user-hZISlmUs.js";function h(t=`phone`,n=``,r=``,i=``){return`
    <header class="kabinet-header">
      <div class="kabinet-header-inner">
        <div>
          <p class="admin-badge-dept">Министерство связи СССР · Главпирожторг</p>
          <h1 class="kabinet-title">Личный кабинет покупателя</h1>
        </div>
        <div>
          <a href="/vitrina" class="btn">← В витрину</a>
        </div>
      </div>
    </header>

    <div class="kabinet-container">
      <div class="kabinet-auth-wrap">
        <div class="kabinet-auth-box">
          <div class="kabinet-auth-emblem">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
              <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.5-6.2 4.5 2.3-7.3-6.1-4.5h7.6z"/>
            </svg>
          </div>
          <h2 class="kabinet-auth-title">Вход по табелю связи</h2>
          <p class="kabinet-auth-desc">Введите номер телефона, чтобы получить правительственную телеграмму с кодом и открыть книжку ударника с заказами.</p>

          ${t===`phone`?`
            <form data-auth-phone-form class="admin-form-grid" style="text-align:left;">
              <div class="admin-field" style="grid-column: 1 / -1;">
                <label>Номер телефона</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 (916) 123-45-67"
                  value="${e(n)}"
                  autocomplete="tel"
                  autofocus
                  style="font-family:var(--font-mono); font-size:1.1rem; padding:0.65rem 0.9rem;"
                />
              </div>
              <div style="grid-column: 1 / -1; margin-top:0.8rem;">
                <button type="submit" class="btn btn--kumach" style="width:100%; padding:0.8rem; font-size:1rem;">
                  ✉ Вызвать телеграмму с кодом
                </button>
              </div>
              <p style="font-size:0.75rem; color:#777; margin-top:0.5rem; text-align:center;">
                Принимаются городские и мобильные телефоны всех союзных республик.
              </p>
            </form>
          `:`
            <div class="telegram-card" data-telegram-card>
              <div class="telegram-head">
                <span>ПРАВИТЕЛЬСТВЕННАЯ ТЕЛЕГРАММА</span>
                <span>СЕРИЯ ТС-85</span>
              </div>
              <p class="telegram-body">
                МОСКВА ГЛАВПИРОЖТОРГ = ПРИЛАВОК № 1 = ВАШ ПРОВЕРОЧНЫЙ КОД: 
                <span class="telegram-code-highlight">${e(i)}</span> 
                = ПРЕДЪЯВИТЕ ДЛЯ ВХОДА ТЧК
              </p>
              <div style="text-align:right;">
                <button type="button" class="telegram-copy-btn" data-insert-code="${e(i)}">
                  ✓ Вставить код в поле
                </button>
              </div>
            </div>

            <form data-auth-code-form class="admin-form-grid" style="text-align:left;">
              <input type="hidden" name="phone" value="${e(n)}" />
              <div class="admin-field" style="grid-column: 1 / -1;">
                <label>Код из телеграммы</label>
                <input
                  type="text"
                  name="code"
                  required
                  maxlength="6"
                  placeholder="напр., ${e(i||`1985`)}"
                  value="${e(i)}"
                  autocomplete="one-time-code"
                  autofocus
                  style="font-family:var(--font-mono); font-size:1.4rem; letter-spacing:0.3em; text-align:center; padding:0.5rem;"
                />
              </div>
              <div class="admin-field" style="grid-column: 1 / -1;">
                <label>Как к вам обращаться в чеках и картотеке?</label>
                <input
                  type="text"
                  name="customName"
                  placeholder="Товарищ Иванов (необязательно)"
                  style="font-size:0.95rem; padding:0.55rem 0.8rem;"
                />
              </div>
              <div style="grid-column: 1 / -1; display:flex; gap:0.6rem; margin-top:0.8rem;">
                <button type="button" class="btn" data-auth-back style="flex:1;">
                  ← Другой номер
                </button>
                <button type="submit" class="btn btn--kumach" style="flex:2; padding:0.8rem; font-size:1rem;">
                  ★ Войти в кабинет
                </button>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.75rem; color:#888; margin-top:0.6rem; text-align:center;">
                Универсальный директорский код: <b>1985</b>
              </div>
            </form>
          `}
        </div>
      </div>
    </div>
  `}function g(t,n){let r=Math.min(t.stamps||1,5),a=Math.max(0,5-r);return`
    <header class="kabinet-header">
      <div class="kabinet-header-inner">
        <div>
          <p class="admin-badge-dept">Министерство пищевой промышленности СССР · Главпирожторг</p>
          <h1 class="kabinet-title">Учётная карточка покупателя</h1>
        </div>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <a href="/vitrina" class="btn">В витрину</a>
          <button class="btn" type="button" data-kabinet-cart>Открыть авоську</button>
          <button class="btn" style="background:#fee; color:#900; border-color:#900;" type="button" data-kabinet-logout>Выйти</button>
        </div>
      </div>
    </header>

    <div class="kabinet-container">
      <!-- Паспорт-книжка ударника -->
      <section class="kabinet-passport" aria-labelledby="pass-title">
        <div class="passport-header">
          <div>
            <div class="passport-seal-title">★ УДОСТОВЕРЕНИЕ ПОКУПАТЕЛЯ-УДАРНИКА ★</div>
            <h2 id="pass-title" class="passport-name" data-user-display-name>${e(t.name)}</h2>
            <div class="passport-phone">Табельный телефон: <b>${e(t.phone)}</b></div>
          </div>
          <button type="button" class="passport-edit-btn" data-edit-profile-btn>
            ✎ Изменить имя
          </button>
        </div>

        <div class="stamps-section">
          <div class="stamps-title">
            <span>КНИЖКА УДАРНИКА: ЗНАКИ КАЧЕСТВА ГОСТ</span>
            <span>${r} из 5</span>
          </div>

          <div class="stamps-row">
            ${Array.from({length:5}).map((e,t)=>{let n=t<r;return`
                <div class="stamp-star-slot ${n?`is-filled`:``}" title="${n?`Штамп заказа №${t+1} проставлен`:`Ожидает покупки`}">
                  ★
                </div>`}).join(``)}
          </div>

          <p class="stamps-reward-note">
            ${a===0?`★ Поздравляем! Норма ударника выполнена — предъявите табель кассиру при следующем заказе и получите праздничное пирожное «Картошка» или «Безе» бесплатно!`:`Ещё ${a} ${a===1?`заказ`:`заказа`} до бесплатного подарочного пирожного по рецептуре 1985 года.`}
          </p>
        </div>
      </section>

      <!-- История заказов -->
      <section class="kabinet-orders-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.2rem;">
          <h2 class="kabinet-section-title">
            <span>📋 История заказов и талонов</span>
            <span class="admin-tab-badge">${n.length}</span>
          </h2>
          <button class="btn" type="button" data-refresh-user-orders>↻ Обновить статус талонов</button>
        </div>

        ${n.length?`
          <div class="user-orders-grid">
            ${n.map(t=>{let n=s[t.status]||s.new;return`
              <article class="user-order-card" data-ticket="${e(t.ticket)}">
                <div class="user-order-top">
                  <div>
                    <span class="user-order-ticket">ТАЛОН № ${e(t.ticket)}</span>
                    <div class="user-order-date">
                      ${new Date(t.createdAt).toLocaleString(`ru-RU`,{dateStyle:`long`,timeStyle:`short`})}
                      · Слот выдачи: <b>${e(t.slot)}</b>
                    </div>
                  </div>
                  <div>
                    <span class="admin-status-badge" style="color:${n.color}; background:${n.bg}; border-color:${n.color}; font-size:0.82rem;">
                      ★ ${e(n.label)}
                    </span>
                  </div>
                </div>

                <div class="user-order-items-grid">
                  ${t.lines.map(t=>`
                    <div class="kabinet-product-card" data-slug="${e(t.product.slug)}">
                      <div class="kpc-image-wrap" aria-hidden="true">
                        ${t.product.image?`<img src="${e(t.product.image)}" alt="${e(t.product.name)}" class="kpc-img" />`:t.product.slug===`bushe`?`<img src="/images/bushe.jpg" alt="${e(t.product.name)}" class="kpc-img" />`:i(t.product.slug,56)}
                      </div>
                      <div class="kpc-info">
                        <h4 class="kpc-title">${e(t.product.name)}</h4>
                        <div class="kpc-meta">${t.product.weightG} г · ГОСТ ТС · ${t.product.priceRub} ₽/шт.</div>
                      </div>
                      <div class="kpc-calc">
                        <span class="kpc-qty-badge">× ${t.qty} шт.</span>
                        <b class="kpc-line-total">${t.product.priceRub*t.qty} ₽</b>
                      </div>
                    </div>`).join(``)}
                </div>

                <div style="font-size:0.8rem; color:#666; margin-bottom:0.8rem; display:flex; gap:1rem; flex-wrap:wrap;">
                  <span>${t.withBow?`🎀 С праздничным бантиком`:`Обычная пергаментная упаковка`}</span>
                  <span style="color:${n.color}; font-weight:600;">Этап: ${e(n.desc)}</span>
                </div>

                <div class="user-order-foot">
                  <div class="user-order-total">
                    ИТОГО: ${t.total} ₽
                  </div>
                  <div style="display:flex; gap:0.6rem;">
                    <button class="btn btn--kumach" type="button" data-repeat-order="${e(t.ticket)}">
                      ↻ Повторить в авоську
                    </button>
                  </div>
                </div>
              </article>
            `}).join(``)}
          </div>
        `:`
          <div class="admin-card" style="text-align:center; padding:3rem 1.5rem;">
            <p style="font-family:var(--font-display); font-size:1.3rem; text-transform:uppercase; margin-bottom:0.5rem;">
              У вас пока нет оформленных талонов
            </p>
            <p style="color:#666; max-width:44ch; margin:0 auto 1.5rem;">
              Выберите любимые пирожные в витрине («Картошка», «Ленинградское», «Безе» и др.), и они сразу появятся в этом табеле.
            </p>
            <a href="/vitrina" class="btn btn--kumach">Перейти к витрине</a>
          </div>
        `}
      </section>
    </div>

    <!-- Модалка редактирования имени -->
    <div class="admin-modal" data-name-modal role="dialog" aria-modal="true" aria-hidden="true" style="display:none;">
      <div class="admin-modal-backdrop" data-close-name-modal></div>
      <div class="admin-modal-dialog" style="max-width:400px;">
        <button class="admin-modal-close" data-close-name-modal type="button">✕</button>
        <h3 class="admin-card-title" style="margin-bottom:1rem;">Изменить имя покупателя</h3>
        <form data-edit-name-form>
          <div class="admin-field" style="margin-bottom:1.2rem;">
            <label>Ваше имя или звание</label>
            <input type="text" name="name" required value="${e(t.name)}" style="font-size:1rem; padding:0.6rem;" />
          </div>
          <div style="display:flex; justify-content:flex-end; gap:0.6rem;">
            <button type="button" class="btn" data-close-name-modal>Отмена</button>
            <button type="submit" class="btn btn--kumach">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  `}var _={meta:{title:`Личный кабинет покупателя — Трест «Те Самые»`,description:`Личный кабинет покупателя треста «Те Самые»: отслеживание талонов, книжка ударника и заказы.`},render(){let e=f(),n=t(`div`,{class:`kabinet-page`});return n.innerHTML=e?g(e,o(e.phone)):h(`phone`),n},mount(e){let t=e.root,i=``,s=()=>{let e=n(`[data-auth-phone-form]`,t);e?.addEventListener(`submit`,n=>{n.preventDefault();let a=new FormData(e),o=String(a.get(`phone`)||``).trim();if(m(o).length<10){alert(`Введите корректный номер телефона (не менее 10 цифр)!`);return}i=u(o);let{code:l,message:d}=c(o);r(`stamp`),t.innerHTML=h(`code`,i,d,l),s()}),t.querySelectorAll(`[data-insert-code]`).forEach(e=>{e.addEventListener(`click`,()=>{let i=e.dataset.insertCode||``,a=n(`input[name="code"]`,t);a&&(a.value=i,r(`click`))})}),n(`[data-auth-back]`,t)?.addEventListener(`click`,()=>{r(`click`),t.innerHTML=h(`phone`,i),s()});let a=n(`[data-auth-code-form]`,t);a?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(a),n=String(t.get(`phone`)||i),o=String(t.get(`code`)||``).trim(),s=String(t.get(`customName`)||``).trim(),c=p(n,o,s);if(!c.ok){alert(c.error||`Неверный проверочный код из телеграммы!`),r(`click`);return}r(`cash`),_()})},_=()=>{let e=f();if(!e){t.innerHTML=h(`phone`),s();return}let n=o(e.phone);t.innerHTML=g(e,n),v()},v=()=>{n(`[data-kabinet-logout]`,t)?.addEventListener(`click`,()=>{confirm(`Вы уверены, что хотите выйти из Личного кабинета?`)&&(l(),r(`click`),_())}),n(`[data-kabinet-cart]`,t)?.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`cart:open`))}),n(`[data-refresh-user-orders]`,t)?.addEventListener(`click`,()=>{r(`flap`),_()}),t.querySelectorAll(`[data-repeat-order]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.repeatOrder,n=f();if(!n||!t)return;let i=o(n.phone).find(e=>e.ticket===t);i&&(i.lines.forEach(e=>{for(let t=0;t<e.qty;t++)a.inc(e.product.slug)}),r(`cash`),window.dispatchEvent(new CustomEvent(`cart:open`)))})});let e=n(`[data-name-modal]`,t),i=n(`[data-edit-profile-btn]`,t),s=n(`[data-edit-name-form]`,t),c=()=>{e&&(e.style.display=`flex`,e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),r(`click`))},u=()=>{e&&(e.style.display=`none`,e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`))};i?.addEventListener(`click`,c),t.querySelectorAll(`[data-close-name-modal]`).forEach(e=>{e.addEventListener(`click`,u)}),s?.addEventListener(`submit`,e=>{e.preventDefault();let i=new FormData(s),a=String(i.get(`name`)||``).trim();if(a){d({name:a}),r(`stamp`),u();let e=n(`[data-user-display-name]`,t);e&&(e.textContent=a)}})};return f()?v():s(),()=>{}}};export{_ as default};