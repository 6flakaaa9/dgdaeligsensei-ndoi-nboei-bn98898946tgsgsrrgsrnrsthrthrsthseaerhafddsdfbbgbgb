const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vitrina-CUCLWeC0.js","assets/gsap-DtKhMY5a.js","assets/index-CfIXPHmC.js","assets/lenis-Cv5t3-d5.js","assets/index-INy4fc2K.css","assets/core-zKR5xRPN.js"])))=>i.map(i=>d[i]);
import{M as e,Q as t,U as n,at as r,b as i,et as a,m as o,n as s,ot as c,x as l,y as u}from"./index-CfIXPHmC.js";import{n as d,t as f}from"./detail-modal-DW_T5wXu.js";var p=[`all`,`chocolate`,`cream`,`puff`,`light`,`classic`],m={meta:{title:`Витрина — Те Самые`,description:`Двенадцать видов пирожных на стеклянных полках: ленинградское, картошка, корзиночка, наполеон, трубочка и другие. Товар в наличии, завернём с бантиком.`},render(){let e=t(`div`,{class:`vitrina`});e.innerHTML=`
      <section class="page-section vitrina-head">
        <p class="kicker">Отдел №2 · Витрина</p>
        <h1>Витрина</h1>
        <p class="prose">Двенадцать видов на трёх стеклянных полках. ${n.inStock}. ${n.choose}.</p>
        <div class="vitrina-controls">
          <div class="filters" role="group" aria-label="Фильтр по виду" data-filters>
            <span class="filters-indicator" data-indicator aria-hidden="true"></span>
            ${p.map(e=>`<button type="button" data-filter="${e}"${e===`all`?` class="is-active" aria-pressed="true"`:` aria-pressed="false"`}>${u[e]}</button>`).join(``)}
          </div>
          <div class="price-mode" role="group" aria-label="Режим цен">
            <span class="price-mode-label">Цены:</span>
            <div class="price-mode-switch">
              <button type="button" class="price-mode-btn is-active" data-price-mode="today" aria-pressed="true">Сегодня</button>
              <button type="button" class="price-mode-btn" data-price-mode="1985" aria-pressed="false">По ценнику 1985</button>
            </div>
            <span class="price-mode-note">шуточный режим — на заказ не влияет</span>
          </div>
        </div>
      </section>
      <section class="page-section shelves" data-shelves aria-label="Полки витрины">
        ${[0,1,2].map(e=>`
          <div class="shelf" data-shelf="${e}">
            <h2 class="visually-hidden">Полка ${e+1}</h2>
            <div class="shelf-row"></div>
          </div>`).join(``)}
        <p class="shelf-empty" data-shelf-empty hidden>Под этот фильтр полок не хватило. Попробуйте «Все».</p>
      </section>
      <section class="page-section vitrina-foot">
        <p class="vitrina-note">${n.checkout} — касса №3, рядом с весами.</p>
      </section>
    `;let r=c(`.shelf-row`,e);return i.forEach((e,t)=>{let n=d(e);n.classList.add(`grid-card`),r[t%r.length].appendChild(n)}),e},mount(t){let n=t.root,i=c(`.grid-card`,n),a=f(n,()=>r(`[data-price-mode="1985"].is-active`,n)?`1985`:`today`),s=null;e(async()=>{let{mountVitrinaAnimations:e}=await import(`./vitrina-CUCLWeC0.js`);return{mountVitrinaAnimations:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({mountVitrinaAnimations:e})=>{s=e(n)});let l=r(`[data-indicator]`,n),u=r(`[data-shelf-empty]`,n),d=()=>{let e=r(`.filters button.is-active`,n);e&&(l.style.width=`${e.offsetWidth}px`,l.style.height=`${e.offsetHeight}px`,l.style.transform=`translate(${e.offsetLeft}px, ${e.offsetTop}px)`)},p=e=>{c(`.filters button`,n).forEach(t=>{let n=t.dataset.filter===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,String(n))});let t=0;i.forEach(n=>{let r=e===`all`||n.dataset.category===e;n.hidden=!r,r&&(t+=1)}),u.hidden=t>0;let r=c(`.shelf-row`,n);r.forEach(e=>e.innerHTML=``),i.filter(e=>!e.hidden).forEach((e,t)=>{let n=Math.min(Math.floor(t/4),r.length-1);r[n].appendChild(e)}),c(`.shelf`,n).forEach(e=>{let t=e.querySelector(`.shelf-row`);e.hidden=!t||t.children.length===0}),d()};n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);if(t){p(t.dataset.filter),o(`click`);return}let r=e.target.closest(`[data-price-mode]`);if(r){h(n,r.dataset.priceMode===`1985`?`1985`:`today`);return}if(e.target.closest(`button`))return;let i=e.target.closest(`.grid-card`);i&&i.dataset.slug&&a.openDetail(i.dataset.slug)}),n.addEventListener(`keydown`,e=>{if(e.key===`Enter`||e.key===` `){let t=e.target.closest?.(`.grid-card`);t&&e.target===t&&t.dataset.slug&&(e.preventDefault(),a.openDetail(t.dataset.slug))}}),i.forEach(e=>{e.hasAttribute(`tabindex`)||e.setAttribute(`tabindex`,`0`)}),d();let m=()=>d();return window.addEventListener(`resize`,m),()=>{window.removeEventListener(`resize`,m),a.destroy(),s?.()}}};function h(e,t){if(c(`[data-price-mode]`,e).forEach(e=>{let n=e.dataset.priceMode===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-pressed`,String(n))}),e.classList.toggle(`mode-1985`,t===`1985`),c(`.grid-card`,e).forEach(e=>{let n=r(`[data-price="today"]`,e),i=r(`[data-price="1985"]`,e);n.hidden=t===`1985`,i.hidden=t!==`1985`}),c(`.shelf`,e).forEach(e=>{let n=r(`.stamp--joke`,e);t===`1985`&&!n?(n=s(`joke`,{color:`#1B2A41`,rotate:-6}),n.classList.add(`shelf-joke`),e.appendChild(n)):t!==`1985`&&n&&n.remove()}),t===`1985`){let e=i[0];a(e.priceKop1985),o(`click`)}}export{l as TAG_LABELS,m as default};