import{o as e}from"./gsap-DtKhMY5a.js";import{$ as t,F as n,L as r,P as i,Q as a,U as o,at as s,it as c,lt as l,m as u,n as d,o as f,ot as p,r as m,rt as h,tt as g,v as _}from"./index-CfIXPHmC.js";import{o as v}from"./core-zKR5xRPN.js";import{t as y}from"./slots-DCbuGpXu.js";import{a as b}from"./order-BKRgHAB3.js";import{o as x,r as S}from"./user-hZISlmUs.js";var C=null,w=null,T=null,E=!1,D=`cart`,O=null;function k(){window.addEventListener(`cart:open`,()=>A())}function A(){C||(C=P(),document.body.appendChild(C)),_.state.items.length===0&&(D=`cart`),D===`receipt`&&(D=`cart`),F(),M(!0),u(`bell`)}function j(){M(!1)}function M(t){let n=C;n&&t!==E&&(E=t,document.body.classList.toggle(`cart-open`,t),t?(T=document.activeElement,n.classList.add(`is-open`),n.removeAttribute(`inert`),w=l(n),N(n),requestAnimationFrame(()=>s(`.cart-close`,n)?.focus())):(w?.(),w=null,c()?(n.classList.remove(`is-open`),n.setAttribute(`inert`,``)):e.to(s(`.cart-body`,n),{xPercent:100,duration:.4,ease:`power3.in`,onComplete:()=>{n.classList.remove(`is-open`),n.setAttribute(`inert`,``),e.set(s(`.cart-body`,n),{clearProps:`transform`})}}),T?.focus()))}function N(t){c()||e.fromTo(s(`.cart-body`,t),{xPercent:100},{xPercent:0,duration:.5,ease:`power3.out`})}function P(){let e=a(`div`,{class:`cart-panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`Авоська`});return e.setAttribute(`inert`,``),e.innerHTML=`
    <div class="cart-backdrop" data-cart-close></div>
    <div class="cart-body">
      <div class="cart-head">
        <h2 class="cart-title">Авоська</h2>
        <button class="cart-close" type="button" data-cart-close aria-label="Закрыть авоську">✕</button>
      </div>
      <div class="cart-view" data-cart-view></div>
    </div>`,e.addEventListener(`click`,e=>{e.target.closest(`[data-cart-close]`)&&j()}),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&j()}),e.addEventListener(`click`,z),e}function F(){if(!C)return;let e=s(`[data-cart-view]`,C);O?.(),O=null,D===`cart`?I(e):D===`form`&&B(e)}function I(e){let t=_.detailed;if(!t.length){e.innerHTML=`
      <div class="cart-empty">
        <div class="cart-empty-art" aria-hidden="true">${f(160)}</div>
        <p class="cart-empty-title">Авоська пуста</p>
        <p class="cart-empty-note">Так не годится. В витрине двенадцать видов — ${o.choose.toLowerCase()}.</p>
        <a class="btn btn--kumach" href="/vitrina" data-cart-close>В витрину</a>
      </div>`;return}e.innerHTML=`
    <ul class="cart-list" data-cart-list>
      ${t.map(e=>L(e.product.slug,e.product.name,e.product.weightG,e.qty,e.product.priceRub)).join(``)}
    </ul>
    <div class="cart-total" aria-live="polite">
      <span>Итого</span>
      <b data-cart-total>${g(_.total,r.symbol)}</b>
      <span class="cart-total-count" data-cart-count-label>${_.count} ${h(_.count,`штука`,`штуки`,`штук`)}</span>
    </div>
    <div class="cart-actions">
      <button class="btn btn--kumach btn--big" type="button" data-checkout>Пробить чек</button>
      <button class="cart-clear" type="button" data-clear>Вернуть всё на прилавок</button>
    </div>`,O=_.subscribe(()=>{if(!E||D!==`cart`)return;if(_.state.items.length===0){F();return}let t=s(`[data-cart-list]`,e);if(!t)return;let n=_.detailed,i=new Set(n.map(e=>e.product.slug));p(`.cart-row`,t).forEach(e=>{i.has(e.dataset.row)||e.remove()}),n.forEach(({product:e,qty:n})=>{let r=s(`[data-row="${e.slug}"]`,t);if(r){let e=s(`output`,r);e&&e.textContent!==String(n)&&(e.textContent=String(n))}else t.insertAdjacentHTML(`beforeend`,L(e.slug,e.name,e.weightG,n,e.priceRub))});let a=s(`[data-cart-total]`,e);a&&(a.textContent=g(_.total,r.symbol));let o=s(`[data-cart-count-label]`,e);o&&(o.textContent=`${_.count} ${h(_.count,`штука`,`штуки`,`штук`)}`)})}function L(e,n,i,a,o){return`
    <li class="cart-row" data-row="${e}">
      <span class="cart-row-art" aria-hidden="true">${m(e,54)}</span>
      <span class="cart-row-info">
        <b>${t(n)}</b>
        <span class="cart-row-meta">${i} г · ${g(o,r.symbol)}</span>
      </span>
      <span class="cart-qty">
        <button type="button" data-dec="${e}" aria-label="Убрать одну «${t(n)}»">−</button>
        <output>${a}</output>
        <button type="button" data-inc="${e}" aria-label="Добавить ещё одну «${t(n)}»">+</button>
      </span>
      <button class="cart-row-remove" type="button" data-remove="${e}" aria-label="Вернуть «${t(n)}» на прилавок" title="Вернуть на прилавок">✕</button>
    </li>`}function R(){if(!E||!C)return;let e=document.activeElement;(!e||e===document.body||!C.contains(e))&&s(`.cart-close`,C)?.focus()}function z(e){let t=e.target,n=t.closest(`[data-inc]`);if(n){_.inc(n.dataset.inc),u(`click`);return}let r=t.closest(`[data-dec]`);if(r){_.dec(r.dataset.dec),R(),u(`click`);return}let i=t.closest(`[data-remove]`);if(i){_.remove(i.dataset.remove),R(),u(`paper`);return}if(t.closest(`[data-clear]`)){_.clear(),R(),u(`paper`);return}t.closest(`[data-checkout]`)&&(D=`form`,F(),u(`click`))}function B(e){let r=y(),i=S(),a=i?.name??``,c=i?.phone??``;e.innerHTML=`
    <form class="checkout-form" data-order-form novalidate>
      <p class="checkout-desk">${n.desk} · кассир ${n.name}</p>
      ${i?`<p class="checkout-comrade-greet" style="font-size:0.85rem;color:var(--kumach);font-weight:600;margin-bottom:0.5rem;">★ Приветствуем, ${t(i.name)}!</p>`:``}
      ${r.code===`open`?``:`<p class="checkout-status checkout-status--${r.code}">${r.label}: ${r.note}</p>`}
      <label class="field">
        <span>Имя</span>
        <input type="text" name="name" maxlength="60" autocomplete="name" required value="${t(a)}" />
        <span class="field-error" data-err="name" hidden>Как вас записать в чек?</span>
      </label>
      <label class="field">
        <span>Телефон</span>
        <input type="tel" name="phone" maxlength="24" inputmode="tel" autocomplete="tel" required placeholder="+7 (___) ___-__-__" value="${t(c)}" />
        <span class="field-error" data-err="phone" hidden>Телефон нужен, чтобы позвать вас, когда коробку соберут.</span>
      </label>
      <div class="checkout-ready-card">
        <div class="ready-badge">★ СРОК И ВРЕМЯ ВЫДАЧИ</div>
        <p class="ready-title">Время готовности определяет администратор</p>
        <p class="ready-desc">Кондитер проверит свежесть выпечки и свяжется с вами по указанному телефону для согласования удобного времени получения.</p>
        <input type="hidden" name="slot" value="Согласуется с администратором" />
      </div>
      <label class="field field--bow checkout-bow">
        <input type="checkbox" name="bow" checked />
        <span>${o.bow} <i>Бантик — бесплатно, как улыбка кассира.</i></span>
      </label>
      <div class="checkout-summary" data-order-summary></div>
      <div class="cart-actions">
        <button class="btn btn--kumach btn--big" type="submit">Пробить</button>
        <button class="cart-clear" type="button" data-back>Назад к авоське</button>
      </div>
    </form>`,V(s(`[data-order-summary]`,e));let l=s(`[data-order-form]`,e);l.addEventListener(`click`,e=>{e.target.closest(`[data-back]`)&&(D=`cart`,F(),u(`click`))}),l.addEventListener(`submit`,e=>{e.preventDefault(),U(l)}),requestAnimationFrame(()=>s(`input[name="name"]`,l)?.focus())}function V(e){e.innerHTML=`
    <ul class="checkout-lines">
      ${_.detailed.map(({product:e,qty:n})=>`<li><span>${n} × ${t(e.name)}</span><b>${g(e.priceRub*n,r.symbol)}</b></li>`).join(``)}
    </ul>
    <p class="checkout-total"><span>К оплате</span><b>${g(_.total,r.symbol)}</b></p>`}function H(e){return e.replace(/\D/g,``).replace(/^8/,`7`).length}async function U(e){let n=new FormData(e),r=String(n.get(`name`)??``).trim(),i=String(n.get(`phone`)??``).trim(),a=String(n.get(`slot`)??``).trim(),o=!0,c=(t,n)=>{let r=s(`[data-err="${t}"]`,e);r.hidden=n,s(`[name="${t}"]`,e)?.setAttribute(`aria-invalid`,String(!n)),n||(o=!1)};if(c(`name`,r.length>=2),c(`phone`,H(i)>=10),!o){s(`input[aria-invalid="true"]`,e)?.focus(),u(`click`);return}let l=s(`[type="submit"]`,e);l.disabled=!0,l.textContent=`Пробиваем…`;let d=await b({name:r,phone:i,slot:a||`Согласуется с администратором`,withBow:n.get(`bow`)===`on`,lines:_.detailed.map(({product:e,qty:t})=>({product:e,qty:t}))});if(l.disabled=!1,l.textContent=`Пробить`,!d.ok){s(`.checkout-error`,e)?.remove(),s(`[data-order-summary]`,e)?.insertAdjacentHTML(`afterbegin`,`<p class="checkout-error" role="alert">Касса замялась: ${t(d.error)}. Попробуйте ещё раз.</p>`);return}let f=S();f&&x({stamps:(f.stamps||0)+1,name:r||f.name,phone:i||f.phone}),_.clear(),D=`receipt`,F(),await K(d.order)}function W(e){let t=[`${i.legal.toUpperCase()}`,`${n.desk} · Кассир ${n.name.toUpperCase()}`,new Date(e.createdAt).toLocaleString(`ru-RU`,{dateStyle:`short`,timeStyle:`short`}),`--------------------------------`,`НАИМЕНОВАНИЕ      КОЛ   СУММА`];return e.lines.forEach(({product:e,qty:n})=>{let i=g(e.priceRub*n,r.symbol),a=e.name.toUpperCase().slice(0,14).padEnd(14);t.push(`${a}   ${String(n).padStart(2)}   ${i.padStart(9)}`)}),t.push(`--------------------------------`),t.push(`ИТОГО К ОПЛАТЕ: ${g(e.total,r.symbol).toUpperCase()}`),t.push(`ПОКУПАТЕЛЬ: ${e.name.toUpperCase()}`),t.push(`ТЕЛЕФОН: ${e.phone}`),t.push(`САМОВЫВОЗ: ${e.slot.toUpperCase()}`),e.withBow&&t.push(`УПАКОВКА: С БАНТИКОМ ★`),t.push(`--------------------------------`),t.push(`ТАЛОН № ${e.ticket}`),t.push(`${i.gost} · ${o.change.toUpperCase()}`),t.push(`${i.slogan.toUpperCase()}!`),t}function G(e,n){e.innerHTML=`
    <div class="receipt-wrap">
      <div class="receipt" data-receipt aria-label="Чек, печать">
        <div class="receipt-tape" data-receipt-tape>
          ${W(n).map(e=>`<span class="receipt-line">${t(e)}</span>`).join(``)}
        </div>
        <div class="receipt-stamps" data-receipt-stamps></div>
      </div>
      <p class="receipt-status" data-receipt-status role="status" aria-live="polite">Печатаем чек…</p>
      <div class="cart-actions receipt-actions" style="display:flex; flex-direction:column; gap:0.6rem;">
        <a href="/kabinet" class="btn btn--kumach" data-cart-close style="text-align:center; text-decoration:none;">★ Отслеживать в Личном кабинете</a>
        <button class="btn" type="button" data-cart-close>Забрать авоську</button>
      </div>
    </div>`}async function K(t){if(!C)return;let r=s(`[data-cart-view]`,C);G(r,t);let i=s(`[data-receipt-tape]`,r),a=p(`.receipt-line`,i),o=s(`[data-receipt-status]`,r),l=s(`[data-receipt-stamps]`,r);c()?o.textContent=`Чек пробит.`:(e.set(a,{opacity:0,y:14}),e.fromTo(a,{opacity:0,y:14},{opacity:1,y:0,duration:.16,stagger:.09,ease:`power1.out`}),u(`flap`),await new Promise(e=>window.setTimeout(e,a.length*90+260)),o.textContent=`Чек пробит.`);let f=d(`paid`,{rotate:-7});f.classList.add(`receipt-stamp`),l.appendChild(f),u(`stamp`),c()||v(f,s(`.receipt`,r),{rotate:-7}),await new Promise(e=>window.setTimeout(e,c()?200:900));let m=d(`accepted`,{color:`#1B2A41`,rotate:4});m.classList.add(`receipt-stamp`,`receipt-stamp--second`),l.appendChild(m),u(`stamp`),c()||v(m,s(`.receipt`,r),{rotate:4}),u(`cash`),o.textContent=`Заказ принят. Талон № ${t.ticket}. ${n.desk} вас ждёт!`}export{k as initCart,A as openCart};