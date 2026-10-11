import{$ as e,L as t,Q as n,U as r,Z as i,a,at as o,b as s,lt as c,m as l,n as u,t as d,tt as f,y as p}from"./index-CfIXPHmC.js";function m(e){let r=n(`article`,{class:`product-card`,"data-slug":e.slug,"data-category":e.category}),i=e.tags[0];if(r.innerHTML=`
    <div class="pc-visual" aria-hidden="false">
      ${e.image?`<img class="pastry pastry--photo pastry--${e.slug}" src="${e.image}" alt="${e.name}" loading="lazy" />`:a(e.slug,`card`)}
      <span class="pc-shine" aria-hidden="true"></span>
    </div>
    <div class="pc-body">
      <h3 class="pc-name">${e.name}</h3>
      <p class="pc-tagline">${e.tagline}</p>
      <p class="pc-meta">${e.weightG} г · ${e.gost}</p>
    </div>
    <div class="pc-price">
      <span class="pc-price-today" data-price="today">${f(e.priceRub,t.symbol)}</span>
      <span class="pc-price-1985" data-price="1985" hidden>${e.priceKop1985} коп.</span>
    </div>
    <button class="pc-add btn btn--kumach" type="button" data-add="${e.slug}" aria-label="Добавить «${e.name}» в авоську">В авоську</button>
  `,i){let e=u(i===`hit`?`hit`:i===`new`?`premium`:`last3`);e.classList.add(`pc-stamp`),r.querySelector(`.pc-visual`)?.appendChild(e)}let o=r.querySelector(`.pc-price`);return o&&o.appendChild(d(f(e.priceRub,t.symbol))),o?.querySelector(`.price-tag`)?.classList.add(`pc-tag-swing`),r}function h(d,m){let h=n(`div`,{class:`detail-panel`,role:`dialog`,"aria-modal":`true`,"aria-label":`Пирожное крупным планом`,hidden:!0});h.innerHTML=`
    <div class="detail-backdrop" data-detail-close></div>
    <div class="detail-body" data-detail-body data-lenis-prevent>
      <button class="detail-close" type="button" data-detail-close aria-label="Закрыть карточку">✕</button>
    </div>`,d.appendChild(h);let g=o(`[data-detail-body]`,h),_=null,v=null;h.addEventListener(`wheel`,e=>{e.stopPropagation()},{passive:!0}),g.addEventListener(`wheel`,e=>{e.stopPropagation()},{passive:!0});function y(n){let d=s.find(e=>e.slug===n);if(!d)return;v=document.activeElement,g.scrollTop=0;let y=d.image?`<img class="pastry pastry--hero pastry--photo pastry--${d.slug}" src="${d.image}" alt="${e(d.name)}" />`:a(d.slug,`hero`);if(g.innerHTML=`
      <button class="detail-close" type="button" data-detail-close aria-label="Закрыть карточку">✕</button>
      <div class="detail-visual" data-detail-visual>
        ${y}
      </div>
      <div class="detail-info">
        <p class="kicker">${p[d.category]} · ${d.gost}</p>
        <h2>${e(d.name)}</h2>
        <p class="detail-tagline">${e(d.tagline)}</p>
        <p class="detail-desc">${e(d.description)}</p>
        <dl class="detail-specs">
          <div><dt>Состав</dt><dd>${d.composition.map(e).join(`, `)}</dd></div>
          <div><dt>Вес</dt><dd>${d.weightG} г</dd></div>
          <div><dt>Срок годности</dt><dd>${d.shelfLifeHours} ч</dd></div>
          <div><dt>Цена</dt><dd data-detail-price>${f(d.priceRub,t.symbol)}</dd></div>
        </dl>
        <ul class="detail-layers" aria-label="Слои">
          ${d.layers.map(t=>`
            <li data-layer-id="${t.id}">
              <b>${e(t.label)}</b> — ${e(t.note)}
            </li>`).join(``)}
        </ul>
        <div class="detail-actions">
          <button class="btn btn--kumach btn--big" type="button" data-add="${d.slug}">В авоську — ${f(d.priceRub,t.symbol)}</button>
          <button class="btn" type="button" data-open-cart-from-modal style="display:none; background:var(--gold); color:var(--ink); font-weight:700;">Открыть авоську →</button>
          <span class="detail-micro">${r.wrap}</span>
        </div>
      </div>`,d.tags[0]){let e=u(d.tags[0]===`hit`?`hit`:d.tags[0]===`new`?`premium`:`last3`);o(`.detail-visual`,g)?.appendChild(e)}if(h.hidden=!1,document.body.classList.add(`detail-open`),i()?.stop(),_=c(h),o(`.detail-close`,g)?.focus(),(m?m():`today`)===`1985`){let e=o(`[data-detail-price]`,g);e&&(e.textContent=`${d.priceKop1985} коп. (шутка)`)}l(`bell`)}function b(){h.hidden||(h.hidden=!0,document.body.classList.remove(`detail-open`),i()?.start(),_?.(),_=null,v?.focus())}let x=e=>{let t=e.target;if(t.closest(`[data-detail-close]`)&&b(),t.closest(`[data-open-cart-from-modal]`)){b(),window.dispatchEvent(new CustomEvent(`cart:open`));return}if(t.closest(`[data-add]`)){let e=o(`[data-open-cart-from-modal]`,h);e&&(e.style.display=`inline-block`)}},S=e=>{e.key===`Escape`&&b()};return h.addEventListener(`click`,x),h.addEventListener(`keydown`,S),{openDetail:y,closeDetail:b,destroy(){h.removeEventListener(`click`,x),h.removeEventListener(`keydown`,S),b(),h.remove()},panel:h}}export{m as n,h as t};