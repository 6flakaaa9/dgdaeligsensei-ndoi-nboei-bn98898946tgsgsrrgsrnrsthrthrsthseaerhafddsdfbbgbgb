const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-Cs3k6nZo.js","assets/gsap-DtKhMY5a.js","assets/index-CfIXPHmC.js","assets/lenis-Cv5t3-d5.js","assets/index-INy4fc2K.css","assets/core-zKR5xRPN.js"])))=>i.map(i=>d[i]);
import{$ as e,B as t,D as n,E as r,G as i,H as a,I as o,J as s,K as c,L as l,M as u,O as d,P as f,Q as p,R as m,U as h,V as g,X as _,Y as v,_ as y,a as b,b as x,ct as S,dt as C,g as w,h as T,s as E,st as D,tt as O,u as k,w as A}from"./index-CfIXPHmC.js";import{loadUserReviews as j}from"./kniga-CL5lNkbF.js";import{n as M,t as N}from"./detail-modal-DW_T5wXu.js";var P=Object.defineProperty,F=(e,t)=>{let n={};for(var r in e)P(n,r,{get:e[r],enumerable:!0});return t||P(n,Symbol.toStringTag,{value:`Module`}),n},I=[`ЯНВАРЬ`,`ФЕВРАЛЬ`,`МАРТ`,`АПРЕЛЬ`,`МАЙ`,`ИЮНЬ`,`ИЮЛЬ`,`АВГУСТ`,`СЕНТЯБРЬ`,`ОКТЯБРЬ`,`НОЯБРЬ`,`ДЕКАБРЬ`];function L(){let e=p(`section`,{class:`page-section day-pastry`,"aria-labelledby":`day-pastry-h`});return e.innerHTML=`
    <div class="section-head">
      <span class="section-n">04</span>
      <h2 id="day-pastry-h">Пирожное дня</h2>
    </div>
    <div class="day-grid">
      <div class="day-calendar" data-calendar>
        ${R(n(),`today`)}
        ${R(r(),`next`)}
        <button class="btn btn--kumach day-tear" type="button" data-tear>Оторвать листок</button>
      </div>
      <div class="day-card" data-day-card>
        ${z(n())}
      </div>
    </div>
  `,e}function R(e,t){let n=new Date;t===`next`&&n.setDate(n.getDate()+1);let r=String(n.getDate()).padStart(2,`0`);return`
    <div class="cal-leaf cal-leaf--${t}" data-leaf="${t}">
      <div class="cal-head">${I[n.getMonth()]} · ${[`ВС`,`ПН`,`ВТ`,`СР`,`ЧТ`,`ПТ`,`СБ`][n.getDay()]}</div>
      <div class="cal-day">${r}</div>
      <div class="cal-line"></div>
      <div class="cal-fine">СМЕНА С 6:00</div>
      <span class="cal-ring" aria-hidden="true"></span>
      <span class="cal-ring cal-ring--r" aria-hidden="true"></span>
    </div>`}function z(e){let t=e.image?`<img class="pastry pastry--photo pastry--${e.slug}" src="${e.image}" alt="${e.name}" loading="lazy" />`:b(e.slug,`card`);return`
    <div class="day-visual" style="position: relative; overflow: visible;">
      ${k(90)}
      ${t}
    </div>
    <div class="day-info">
      <h3>${e.name}</h3>
      <p class="day-tagline">${e.tagline}</p>
      <p class="day-meta">${e.gost} · свежее с 6:00</p>
      <p class="day-price">${O(e.priceRub,l.symbol)}</p>
      <button class="btn btn--kumach" type="button" data-add="${e.slug}" aria-label="Добавить «${e.name}» в авоську">В авоську</button>
    </div>
  `}function B(){let e=p(`div`,{class:`split-flap`,"data-flap":``,role:`table`,"aria-label":`Сегодня в продаже`});return m.forEach((t,n)=>{let r=p(`div`,{class:`flap-row`,role:`row`});r.innerHTML=`
      <span class="flap-group" role="cell">${V(t.name,n,`name`)}</span>
      <span class="flap-group flap-group--info" role="cell">${V(t.info,n,`info`)}</span>
    `,e.appendChild(r)}),e}function V(e,t,n){return Array.from(e).map((e,r)=>`
      <span class="flap-cell${e===` `?` flap-cell--space`:``}" data-char="${e===` `?``:e}" data-row="${t}" data-i="${r}" data-kind="${n}" aria-hidden="true">
        <span class="flap-half flap-top"><span>${e===` `?`&nbsp;`:e}</span></span>
        <span class="flap-half flap-bottom"><span>${e===` `?`&nbsp;`:e}</span></span>
      </span>`).join(``)}function H(e,t){let n=p(`div`,{class:`marquee marquee--${t}`,"data-marquee":t}),r=`${e} ★ ${e} ★ `;return n.innerHTML=`
    <div class="marquee-track" data-marquee-track>
      <span aria-hidden="true">${r}</span>
      <span aria-hidden="true">${r}</span>
      <span class="visually-hidden">${e}</span>
    </div>
  `,n}function U(){let e=p(`div`,{class:`marquees`});return e.append(H(a.top,`top`),H(a.bottom,`bottom`)),e}function W(){let e=p(`section`,{class:`page-section quiz-section`,"aria-labelledby":`quiz-h`});return e.innerHTML=`
    <div class="section-head">
      <span class="section-n">09</span>
      <h2 id="quiz-h">${i.title}</h2>
    </div>
    <div class="quiz" data-quiz>
      <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${i.questions.length}" aria-valuenow="0" aria-label="Прогресс квиза">
        <i data-quiz-bar></i>
      </div>
      <div class="quiz-stage" data-quiz-stage aria-live="polite"></div>
    </div>
  `,G(e),e}function G(e){let t=e.querySelector(`[data-quiz-stage]`),n=e.querySelector(`[data-quiz-bar]`),r=e.querySelector(`.quiz-progress`),a={step:0,votes:{}},o=()=>{n.style.transform=`scaleX(${a.step/i.questions.length})`,r.setAttribute(`aria-valuenow`,String(a.step)),a.step<i.questions.length?t.innerHTML=K(a.step):t.innerHTML=q(a.votes)};t.addEventListener(`click`,e=>{let n=e.target.closest(`[data-vote]`);if(n){let e=n.dataset.vote;a.votes[e]=(a.votes[e]??0)+1,a.step+=1,o();return}if(e.target.closest(`[data-quiz-start]`)){o();return}if(e.target.closest(`[data-quiz-restart]`)){a.step=0,a.votes={},o();return}e.target.closest(`[data-quiz-share]`)&&J(t)}),t.innerHTML=`
    <div class="quiz-intro">
      <p>${i.intro}</p>
      <button class="btn btn--kumach btn--big" type="button" data-quiz-start>Начать опрос</button>
    </div>`,r.setAttribute(`aria-valuenow`,`0`),n.style.transform=`scaleX(0)`}function K(t){let n=i.questions[t],r=[`А`,`Б`,`В`,`Г`];return`
    <div class="quiz-question" data-q="${t}">
      <p class="quiz-qnum">Вопрос ${t+1} из ${i.questions.length}</p>
      <h3 class="quiz-qtext">${e(n.q)}</h3>
      <div class="quiz-answers">
        ${n.a.map((t,n)=>`
          <button class="quiz-answer" type="button" data-vote="${t.v}">
            <span class="quiz-badge" aria-hidden="true">${r[n%r.length]}</span>
            <span>${e(t.t)}</span>
          </button>`).join(``)}
      </div>
    </div>`}function q(t){let n=Object.entries(t).sort((e,t)=>t[1]-e[1])[0]?.[0],r=i.results.find(e=>e.v===n)??i.results.find(e=>e.v===`leningradskoe`)??i.results[0],a=d(r.slug)??x[0],o=S(),s=D(o.length*7+Number(o)),c=String(Math.floor(s()*9e4)+1e4);return`
    <div class="quiz-result">
      <div class="ticket" data-ticket>
        <div class="ticket-face ticket-front">
          <p class="ticket-org">Главпирожторг · Трест «Те Самые»</p>
          <h3 class="ticket-title">Членский билет клуба «Те Самые»</h3>
          <div class="ticket-body">
            <div class="ticket-pastry">${a.image?`<img class="pastry pastry--photo pastry--${a.slug}" src="${a.image}" alt="${e(a.name)}" />`:b(a.slug,`card`)}</div>
            <div class="ticket-text">
              <p class="ticket-who">Предъявитель сего есть <b>${e(a.name)}</b></p>
              <p>${e(r.text)}</p>
              <p class="ticket-meta">Билет № ${o} · член клуба с № ${c}</p>
            </div>
          </div>
          <div class="ticket-stamp" data-ticket-stamp>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--kumach)" stroke-width="4"/>
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--kumach)" stroke-width="2"/>
              <text x="60" y="55" text-anchor="middle" font-family="Oswald, sans-serif" font-weight="700" font-size="20" fill="var(--kumach)">ОДОБРЕНО</text>
              <text x="60" y="78" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="12" fill="var(--kumach)">ГОСТ ТС-001</text>
            </svg>
          </div>
        </div>
      </div>
      <div class="quiz-actions">
        <button class="btn" type="button" data-quiz-restart>Пройти ещё раз</button>
        <button class="btn btn--kumach" type="button" data-quiz-share>Поделиться</button>
      </div>
      <p class="quiz-share-note" data-share-note hidden>Ссылка скопирована в буфер обмена.</p>
    </div>`}async function J(e){let t=e.querySelector(`[data-share-note]`),n=`Я прошёл квиз треста сладостей «Те Самые» и узнал, какое я пирожное!`,r=`${location.origin}/#kviz`;if(navigator.share)try{await navigator.share({title:`Какое вы пирожное?`,text:n,url:r});return}catch{}try{await navigator.clipboard.writeText(`${n} ${r}`),t&&(t.hidden=!1)}catch{t&&(t.hidden=!1,t.textContent=`Скопируйте ссылку: ${r}`)}}var Y=F({default:()=>X,layerSvg:()=>Q}),X={meta:{title:`${f.nameUpper} — пирожные, которые вы помните`,description:s.description},render(){let n=p(`div`,{class:`home`}),r=d(`bushe`)||d(`beze`)||x[0],i=C();if(i.showAnnouncement&&i.announcement){let t=p(`div`,{class:`site-announcement`,role:`region`,"aria-label":`Объявление`});t.innerHTML=`
        <div class="announcement-inner">
          <span class="ann-badge">ГЛАВПИРОЖТОРГ</span>
          <span class="ann-text">${e(i.announcement)}</span>
        </div>`,n.appendChild(t)}let a=p(`section`,{class:`hero`,"aria-labelledby":`hero-h`});a.innerHTML=`
      <div class="hero-bg" aria-hidden="true">
        <span class="hero-circle"></span>
        <span class="hero-stripes"><i></i><i></i><i></i></span>
        <span class="hero-rays" data-hero-rays>${y(24,900)}</span>
      </div>
      <div class="hero-inner">
        <p class="hero-dept">Отдел №1 · Сладкие изделия и выпечка</p>
        <h1 class="hero-h" id="hero-h">
          <span class="hero-line hero-line--1" data-split="ПИРОЖНЫЕ"><span class="mask"><span>ПИРОЖНЫЕ</span></span></span>
          <span class="hero-line hero-line--2 soviet-neon" data-split="ТЕ САМЫЕ"><span class="mask"><span>${e(i.brandName||`ТЕ САМЫЕ`)}</span></span></span>
        </h1>
        <p class="hero-sub" data-hero-sub aria-live="off">
          <span class="hero-sub-mask"><span>${e(i.brandSlogan||f.subslogans[0])}</span></span>
        </p>
        <div class="hero-pastry" data-hero-pastry role="button" tabindex="0" title="Нажмите или наведите, чтобы разобрать пирожное по слоям" aria-label="Пирожное Буше по ГОСТу: интерактивная сборка по слоям">
          <div class="pastry-shadow" data-pastry-shadow aria-hidden="true"></div>
          <div class="pastry-layer pastry-layer--dough" data-layer="dough">
            <img src="/images/bushe-layer-bottom.png" alt="Бисквитное основание" draggable="false" />
          </div>
          <div class="pastry-layer pastry-layer--cream" data-layer="cream">
            <img src="/images/bushe-layer-cream.png" alt="Сливочный крем Шарлотт" draggable="false" />
          </div>
          <div class="pastry-layer pastry-layer--glaze" data-layer="glaze">
            <img src="/images/bushe-layer-top.png" alt="Шоколадный купол с росписью" draggable="false" />
          </div>
          <div class="pastry-interactive-hint" aria-hidden="true">
            <span class="hint-star">✦</span> Наведите или нажмите — разбор по слоям
          </div>
        </div>
        <div class="hero-price" data-hero-price>
          <svg viewBox="0 0 150 110" aria-hidden="true">
            <line x1="75" y1="0" x2="75" y2="22" stroke="${o.ink}" stroke-width="2"/>
            <path d="M18 22 h114 v66 l-57 16 l-57 -16 Z" fill="${o.paper}" stroke="${o.ink}" stroke-width="3"/>
            <text x="75" y="52" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="12" fill="${o.kumach}">${r.name.toUpperCase()}</text>
            <text x="75" y="76" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="600" font-size="19" fill="${o.ink}">${r.priceRub} ${l.symbol}</text>
          </svg>
        </div>
        <div class="hero-seal" data-hero-seal aria-hidden="true">${T(150)}</div>
        <div class="hero-star hero-star--a" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="${w(32,32,30,13)}" fill="${o.kumach}"/></svg></div>
        <div class="hero-star hero-star--b" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="${w(32,32,30,13)}" fill="${o.ink}"/></svg></div>
        <div class="hero-natural-badge" data-quality-badge role="button" tabindex="0" title="Нажмите, чтобы открыть свидетельство натуральности и ГОСТ" aria-label="Свидетельство качества и натуральности">
          <span class="natural-badge-star" aria-hidden="true">★</span>
          <div class="natural-badge-body">
            <span class="natural-badge-title">100% Натуральный состав</span>
            <span class="natural-badge-desc">Сливочное масло 82.5% · без заменителей жира · ГОСТ</span>
          </div>
          <span class="natural-badge-arrow" aria-hidden="true">Свидетельство ↗</span>
        </div>
        <p class="hero-scroll-hint">Листайте вниз — там свежее</p>
        <a class="btn btn--kumach btn--big hero-cta" href="/vitrina">Смотреть витрину</a>
      </div>
    `;let s=p(`section`,{class:`page-section board-section`,"aria-labelledby":`board-h`});s.innerHTML=`
      <div class="soviet-pennants" aria-hidden="true">
        ${Array.from({length:15},()=>`<span class="pennant"></span>`).join(``)}
      </div>
      <div class="section-head">
        <span class="section-n">02</span>
        <h2 id="board-h">Сегодня в продаже</h2>
        <span class="board-note">${h.fresh}</span>
      </div>`,s.appendChild(B());let c=U(),u=p(`section`,{class:`page-section manifest`,"aria-labelledby":`manifest-h`});u.innerHTML=`
      <h2 class="visually-hidden" id="manifest-h">Манифест</h2>
      <blockquote class="manifest-text" data-manifest>
        ${t.map(e=>`<span class="manifest-line">${e}</span>`).join(``)}
      </blockquote>
      <p class="manifest-marks visually-hidden">Ключевые слова: ${g.join(`, `)}</p>
    `;let m=L(),S=p(`section`,{class:`page-section hits`,"aria-labelledby":`hits-h`});S.innerHTML=`
      <div class="section-head">
        <span class="section-n">05</span>
        <h2 id="hits-h">Хиты прилавка</h2>
      </div>
      <div class="hits-grid" data-hits></div>
      <p class="hits-more"><a class="btn" href="/vitrina">Вся витрина — 12 видов</a> <span class="hits-note">${h.choose}</span></p>`;let D=S.querySelector(`[data-hits]`);A().forEach(e=>D.appendChild(M(e)));let O=p(`section`,{class:`cut-section`,"aria-labelledby":`cut-h`});O.innerHTML=`
      <div class="cut-pin" data-cut-pin>
        <div class="cut-inner">
          <div class="cut-head">
            <span class="section-n">06</span>
            <h2 id="cut-h">Пирожное в разрезе: Буше</h2>
            <p>Прокрутите — пирожное раскроется по слоям: верхний шоколадный купол, сливочный крем Шарлотт и нежное бисквитное основание.</p>
          </div>
          <div class="cut-stage" data-cut-stage>
            <div class="cut-layers" aria-hidden="true">
              <div class="cut-layer" data-cut="glaze"><img src="/images/bushe-layer-top.png" alt="Шоколадный купол" draggable="false" /></div>
              <div class="cut-layer" data-cut="cream"><img src="/images/bushe-layer-cream.png" alt="Сливочный крем Шарлотт" draggable="false" /></div>
              <div class="cut-layer" data-cut="dough"><img src="/images/bushe-layer-bottom.png" alt="Бисквитное основание" draggable="false" /></div>
            </div>
            <ul class="cut-notes">
              <li data-note="glaze">
                <svg class="cut-note-line" viewBox="0 0 200 60" aria-hidden="true"><path d="M4 30 C 80 30, 120 30, 196 30" stroke="${o.ink}" stroke-width="2" fill="none" stroke-dasharray="4 4"/></svg>
                <div class="cut-note-content">
                  <b>Шоколадный купол (верх)</b>
                  <p class="cut-desc"><span class="cut-weight" data-weight="35">0</span> г — бисквит под глянцевой шоколадной глазурью с росписью</p>
                </div>
              </li>
              <li data-note="cream">
                <svg class="cut-note-line" viewBox="0 0 200 60" aria-hidden="true"><path d="M4 30 C 80 30, 120 30, 196 30" stroke="${o.ink}" stroke-width="2" fill="none" stroke-dasharray="4 4"/></svg>
                <div class="cut-note-content">
                  <b>Сливочный крем Шарлотт</b>
                  <p class="cut-desc"><span class="cut-weight" data-weight="35">0</span> г — пышный слой на натуральном сливочном масле 82.5%</p>
                </div>
              </li>
              <li data-note="dough">
                <svg class="cut-note-line" viewBox="0 0 200 60" aria-hidden="true"><path d="M4 30 C 80 30, 120 30, 196 30" stroke="${o.ink}" stroke-width="2" fill="none" stroke-dasharray="4 4"/></svg>
                <div class="cut-note-content">
                  <b>Бисквитное основание (низ)</b>
                  <p class="cut-desc"><span class="cut-weight" data-weight="20">0</span> г — золотистый, выпеченный в подовой печи коржик</p>
                </div>
              </li>
            </ul>
          </div>
          <p class="cut-total">Итого: <b>${r.weightG} г</b> · ${r.gost} · срок годности ${r.shelfLifeHours} ч</p>
        </div>
      </div>`;let k=p(`section`,{class:`shops-section`,"aria-labelledby":`shops-h`,style:``});k.innerHTML=`
      <h2 class="visually-hidden" id="shops-h">Пять цехов</h2>
      <div class="shops-pin" data-shops-pin>
        <div class="shops-track" data-shops-track>
          <div class="shops-intro">
            <span class="section-n">07</span>
            <h2>Пять цехов</h2>
            <p>Путь пирожного — от мешка муки до бечёвки на коробке. Листайте вправо.</p>
            <div class="shops-gear" aria-hidden="true"></div>
          </div>
          ${_.map((e,t)=>`
          <article class="shop-card" data-shop="${t+1}">
            <div class="shop-art" aria-hidden="true">
              <div class="shop-scene" data-scene="${t+1}">
                ${ee(t+1)}
              </div>
            </div>
            <p class="shop-n">Цех №${e.n}</p>
            <h3>${e.title}</h3>
            <p class="shop-text">${e.text}</p>
          </article>`).join(``)}
        </div>
      </div>`;let N=p(`section`,{class:`page-section stats-section`,"aria-labelledby":`stats-h`});N.innerHTML=`
      <h2 class="visually-hidden" id="stats-h">Показатели</h2>
      <div class="stats-grid">
        ${v.map(e=>`
          <div class="stat" data-stat>
            <span class="stat-value"><b data-count="${e.value}">0</b>${e.suffix}</span>
            <span class="stat-label">${e.label}</span>
          </div>`).join(``)}
      </div>
      <p class="stats-note">Показатели декоративные — трест «Те Самые» считает их с шести утра.</p>`;let P=W(),F=p(`section`,{class:`page-section reviews-preview`,"aria-labelledby":`rev-h`}),I=j().slice(0,3);F.innerHTML=`
      <div class="section-head">
        <span class="section-n">10</span>
        <h2 id="rev-h">Из книги отзывов</h2>
        <a class="rev-all" href="/kniga-otzyvov">Вся книга →</a>
      </div>
      ${I.length>0?`
      <div class="rev-grid">
        ${I.map((t,n)=>`
          <figure class="rev-card">
            <blockquote>«${e(t.text)}»</blockquote>
            <figcaption>
              <span class="rev-name">${e(t.name)}</span>
              <span class="rev-rating" aria-label="Оценка ${t.rating} из 5">${`★`.repeat(t.rating)}${`☆`.repeat(5-t.rating)}</span>
            </figcaption>
            <p class="rev-resolution">${Z(n)}</p>
          </figure>`).join(``)}
      </div>`:`
      <div style="background: var(--cream); border: 2px dashed var(--ink); border-radius: var(--radius); padding: 2.5rem 1.5rem; text-align: center; max-width: 680px; margin: 0 auto;">
        <p style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 1.2rem; color: var(--ink);">В Книге жалоб и предложений пока нет записей. Будьте первыми!</p>
        <a href="/kniga-otzyvov" class="btn btn--kumach">Оставить запись в книге →</a>
      </div>`}`;let R=p(`section`,{class:`cta-section`,"aria-labelledby":`cta-h`});return R.innerHTML=`
      <div class="cta-inner">
        <div class="cta-box" data-cta-box aria-hidden="true">
          ${E(360)}
          <div class="cta-box-pastries">
            ${[`leningradskoe`,`kartoshka`,`korzinochka`].map(e=>`<span class="cta-p" data-cta-p>${b(e,`mini`)}</span>`).join(``)}
          </div>
        </div>
        <div class="cta-text">
          <span class="section-n">11</span>
          <h2 id="cta-h">Собрать коробку</h2>
          <p>Двенадцать видов, бумага, бечёвка и бантик — если попросите. Соберите свою коробку на витрине: пирожные сами не завернутся.</p>
          <p class="cta-micro">${h.bow}</p>
          <a class="btn btn--kumach btn--big" href="/vitrina" data-cta-btn>Заверните!</a>
        </div>
      </div>`,n.append(a,s,c,u,m,S,O,k,N,P,F,R),n},mount(e){let t=null;u(async()=>{let{mountHomeAnimations:e}=await import(`./home-Cs3k6nZo.js`);return{mountHomeAnimations:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({mountHomeAnimations:n})=>{t=n(e.root)});let n=N(e.root),r=e=>{let t=e.target;if(t.closest(`[data-add]`))return;let r=t.closest(`.product-card`);r&&r.dataset.slug&&n.openDetail(r.dataset.slug)},i=e=>{if(e.key===`Enter`||e.key===` `){let t=e.target;if(t.closest(`[data-add]`))return;let r=t.closest(`.product-card`);r&&r.dataset.slug&&(e.preventDefault(),n.openDetail(r.dataset.slug))}};return e.root.addEventListener(`click`,r),e.root.addEventListener(`keydown`,i),()=>{e.root.removeEventListener(`click`,r),e.root.removeEventListener(`keydown`,i),n.destroy(),t?.()}}};function Z(e){return c[e%c.length]}function Q(e){switch(e){case`glaze`:return`<img src="/images/bushe-layer-top.png" alt="Шоколадный купол" class="bushe-layer-img" draggable="false" />`;case`cream`:return`<img src="/images/bushe-layer-cream.png" alt="Сливочный крем Шарлотт" class="bushe-layer-img" draggable="false" />`;case`dough`:return`<img src="/images/bushe-layer-bottom.png" alt="Бисквитный корж" class="bushe-layer-img" draggable="false" />`}}var $={1:{image:`/images/shops/shop-01-zames.jpg`,badge:`МУЧНОЙ СКЛАД · ДЕЖА №4`,sub:`Замес теста по ГОСТ 26987`,alt:`Цех №01 Замес: дежа, мука и тесто`,techCode:`ДЕЖА-МХ-80`},2:{image:`/images/shops/shop-02-vypechka.jpg`,badge:`ПЕЧЬ «ВОЛГА» · 200°C`,sub:`Сменное задание пекарни`,alt:`Цех №02 Выпечка: печь Волга и противни`,techCode:`ГОСТ 1985-В`},3:{image:`/images/shops/shop-03-krem.jpg`,badge:`ОТДЕЛЕНИЕ «ШАРЛОТТ»`,sub:`Сливочное масло 82.5% СССР`,alt:`Цех №03 Крем: кремовое отделение Шарлотт`,techCode:`ОТД-КРЕМ-3`},4:{image:`/images/shops/shop-04-otdelka.jpg`,badge:`УЧАСТОК ОТДЕЛКИ №3`,sub:`Ручная роспись кремом и глазурью`,alt:`Цех №04 Отделка: мастера-пекари и декор`,techCode:`МАСТЕР-ОТК`},5:{image:`/images/shops/shop-05-upakovka.jpg`,badge:`ОТК · УПАКОВКА И БЕЧЁВКА`,sub:`Коробка, пергамент и авоська`,alt:`Цех №05 Упаковка: коробки, пергамент и авоська`,techCode:`ОТК 12.10.85`}};function ee(e){let t=$[e]||$[1];return`
    <div class="shop-photo-frame" data-shop-photo="${e}">
      <img class="shop-photo" src="${t.image}" alt="${t.alt}" loading="lazy" />
      <div class="shop-photo-overlay">
        <span class="shop-photo-badge">${t.badge}</span>
        <span class="shop-photo-tech">${t.techCode}</span>
      </div>
      <div class="shop-photo-vignette" aria-hidden="true"></div>
    </div>
  `}export{X as default,Q as layerSvg,z as n,Y as t};