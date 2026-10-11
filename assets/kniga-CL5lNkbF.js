const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kniga-DuqbntRl.js","assets/gsap-DtKhMY5a.js","assets/index-CfIXPHmC.js","assets/lenis-Cv5t3-d5.js","assets/index-INy4fc2K.css","assets/core-zKR5xRPN.js"])))=>i.map(i=>d[i]);
import{$ as e,K as t,M as n,Q as r,U as i,at as a,m as o,n as s,ot as c,q as l}from"./index-CfIXPHmC.js";var u=`tesamye:reviews:v1`;function d(){return l.map((e,n)=>({id:`seed-${n}`,name:e.name,text:e.text,rating:e.rating,date:f(n),seed:!0,resolution:t[n%t.length]}))}function f(e){let t=new Date;return t.setDate(t.getDate()-(l.length-e)*9-3),t.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`})}function p(){try{let e=localStorage.getItem(u);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>typeof e==`object`&&!!e&&typeof e.name==`string`):[]}catch{return[]}}function m(e){try{localStorage.setItem(u,JSON.stringify(e.slice(-60)))}catch{}window.dispatchEvent(new CustomEvent(`reviews:updated`,{detail:e}))}function h(){try{localStorage.removeItem(u)}catch{}window.dispatchEvent(new CustomEvent(`reviews:updated`,{detail:[]}))}function g(t){return`
    <article class="review" data-review="${t.id}">
      <header class="review-head">
        <span class="review-name">${e(t.name)}</span>
        <span class="review-date">${e(t.date)}</span>
      </header>
      <p class="review-text">${e(t.text)}</p>
      <div class="review-rating" aria-label="Оценка ${t.rating} из 5">${(e=>Array.from({length:5},(t,n)=>`<span class="rv-star${n<e?` is-on`:``}" aria-hidden="true">🧁</span>`).join(``))(t.rating)}</div>
      ${t.resolution?`<p class="review-resolution" data-resolution>Резолюция заведующей: «${e(t.resolution)}»</p>`:``}
    </article>`}var _={meta:{title:`Книга жалоб и предложений — Те Самые`,description:`Книга отзывов треста сладостей «Те Самые»: тёплые записи покупателей, резолюции заведующей и форма для вашей записи.`},render(){let e=r(`div`,{class:`kniga`});e.innerHTML=`
      <section class="page-section kniga-head">
        <p class="kicker">Отдел №4 · По требованию не выдаётся</p>
        <h1>Книга жалоб и предложений</h1>
        <p class="prose">Книга находится на видном месте и по первому требованию не выдаётся — потому что находится на видном месте. Пишите разборчиво, заведующая отвечает лично.</p>
      </section>

      <section class="page-section kniga-form-section" aria-labelledby="kniga-form-h">
        <div class="kniga-book">
          <div class="kniga-spine" aria-hidden="true"><span>КНИГА ЖАЛОБ<br>и ПРЕДЛОЖЕНИЙ<br>★ ТРЕСТ «ТЕ САМЫЕ» ★</span></div>
          <div class="kniga-pages">
            <h2 id="kniga-form-h" class="kniga-form-title">Оставить запись</h2>
            <form class="kniga-form" data-review-form novalidate>
              <label class="field">
                <span>Ваше имя (как в талоне)</span>
                <input type="text" name="name" maxlength="60" autocomplete="name" placeholder="напр., Галина Петровна" required />
                <span class="field-error" data-err="name" hidden>Представьтесь, пожалуйста — заведующая настаивает.</span>
              </label>
              <label class="field">
                <span>Текст записи</span>
                <textarea name="text" rows="4" maxlength="600" placeholder="Жалуйтесь, хвалите, предлагайте…" required></textarea>
                <span class="field-error" data-err="text" hidden>Запись короче 5 букв не принимает — традиция.</span>
              </label>
              <fieldset class="field field--rating">
                <legend>Оценка пирожными</legend>
                <div class="rating-input" data-rating role="radiogroup" aria-label="Оценка пирожными от 1 до 5">
                  ${[1,2,3,4,5].map(e=>`
                    <button type="button" class="rating-cup" data-rating-value="${e}" role="radio" aria-checked="false" aria-label="${e} пирожных">🧁</button>`).join(``)}
                </div>
                <input type="hidden" name="rating" value="0" />
              </fieldset>
              <input type="text" name="_soviet_bot_trap" style="position:absolute; opacity:0; pointer-events:none; left:-9999px;" tabindex="-1" autocomplete="off" />
              <button class="btn btn--kumach" type="submit">Записать в книгу</button>
              <p class="form-note" data-form-note hidden></p>
            </form>
          </div>
        </div>
      </section>

      <section class="page-section kniga-entries" aria-label="Записи в книге">
        <h2 class="kniga-entries-h">Записи</h2>
        <div class="kniga-list" data-reviews></div>
      </section>

      <section class="page-section kniga-foot">
        <p>Заведующая отвечает в течение рабочего дня. ${i.lunch} с 14 до 15 — резолюции в это время не штампуем.</p>
      </section>
    `;let t=a(`[data-reviews]`,e),n=[...p(),...d()];return t.innerHTML=n.length===0?`<p class="kniga-empty" data-kniga-empty style="padding: 2.5rem 1.5rem; background: var(--cream); border: 2px dashed var(--ink); border-radius: var(--radius); text-align: center; font-family: var(--font-display); font-size: 1.15rem; color: var(--ink);">В книге пока нет записей. Будьте первыми — заполните форму выше, и заведующая лично поставит резолюцию!</p>`:n.map(g).join(``),e},mount(e){let i=e.root,l=a(`[data-review-form]`,i),u=a(`[data-form-note]`,i),d=a(`[data-reviews]`,i),f=0,h=c(`.rating-cup`,i),_=e=>{h.forEach((t,n)=>{t.classList.toggle(`is-on`,n<e),t.setAttribute(`aria-checked`,String(n+1===e))})},v=a(`input[name="rating"]`,l);h.forEach(e=>{e.addEventListener(`click`,()=>{f=Number(e.dataset.ratingValue),v.value=String(f),_(f),o(`click`)}),e.addEventListener(`mouseenter`,()=>_(Number(e.dataset.ratingValue)))}),i.querySelector(`.rating-input`)?.addEventListener(`mouseleave`,()=>_(f)),l.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(l);if(n.get(`_soviet_bot_trap`))return;let i=String(n.get(`name`)??``).trim(),c=String(n.get(`text`)??``).trim(),h=a(`[data-err="name"]`,l),v=a(`[data-err="text"]`,l),y=!0;if(h.hidden=i.length>=2,i.length<2&&(y=!1),v.hidden=c.length>=5,c.length<5&&(y=!1),!y){u.hidden=!0;return}let b=`tesamye:kniga_cooldown`,x=Number(sessionStorage.getItem(b)||0),S=Date.now();if(S-x<2e4){let e=Math.ceil((2e4-(S-x))/1e3);u.hidden=!1,u.style.color=`var(--kumach)`,u.textContent=`Соблюдайте порядок очереди! Следующую запись можно оставить через ${e} сек.`;return}sessionStorage.setItem(b,String(S));let C={id:`user-${Date.now()}`,name:i,text:c,rating:f||5,date:new Date().toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`}),resolution:t[Math.floor(Math.random()*t.length)]};m([C,...p()]),d.querySelector(`[data-kniga-empty]`)?.remove();let w=r(`div`);w.innerHTML=g(C);let T=w.firstElementChild;T.classList.add(`is-new`),d.prepend(T);let E=T.querySelector(`[data-resolution]`);if(E){E.classList.add(`res-pending`);let e=s(`approved`,{rotate:-7});e.classList.add(`res-stamp`),T.appendChild(e),window.setTimeout(()=>{E.classList.remove(`res-pending`),e.remove()},2200)}l.reset(),f=0,_(0),u.hidden=!1,u.textContent=`Записано! Резолюция заведующей прилагается. Благодарим.`,o(`stamp`)});let y=null;return n(async()=>{let{mountKnigaAnimations:e}=await import(`./kniga-DuqbntRl.js`);return{mountKnigaAnimations:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({mountKnigaAnimations:e})=>{y=e(i)}),()=>{y?.()}}};export{h as clearAllReviews,_ as default,p as loadUserReviews,m as saveUserReviews};