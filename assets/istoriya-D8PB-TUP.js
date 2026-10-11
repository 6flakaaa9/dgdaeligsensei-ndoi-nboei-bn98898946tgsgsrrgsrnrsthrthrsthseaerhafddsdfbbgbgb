const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/istoriya-BpmTD-K4.js","assets/gsap-DtKhMY5a.js","assets/index-CfIXPHmC.js","assets/lenis-Cv5t3-d5.js","assets/index-INy4fc2K.css","assets/core-zKR5xRPN.js"])))=>i.map(i=>d[i]);
import{I as e,M as t,P as n,Q as r,U as i,X as a,c as o,p as s,r as c}from"./index-CfIXPHmC.js";var l=[{years:`1930-е`,title:`Эпоха витрин`,text:`В новых гастрономах появляются стеклянные витрины с пирожными. Трубочка — двадцать две копейки, корзиночка — праздник. В городах пахнет ванилином и свежей выпечкой.`,pastry:`trubochka`},{years:`1940-е`,title:`Паёк и праздник`,text:`Булочные и пекарни работают по талонам, но даже в трудные годы к празднику пекут «картошку» из того, что есть. Рецепт держится на памяти, а не на бумаге.`,pastry:`kartoshka`},{years:`1950-е`,title:`Возвращение крема`,text:`Витрины снова полнеют: заварной крем, слоёное тесто, орехи. У прилавков выстраиваются очереди — люди помнят вкус и хотят его вернуть.`,pastry:`napoleon`},{years:`1960-е`,title:`Эпоха трубочек`,text:`Хрустящая трубочка со сливочным кремом становится символом прогулки по набережной. Её едят на ходу и непременно пачкаются.`,pastry:`trubochka`},{years:`1970-е`,title:`Расцвет корзиночки`,text:`Ни один детский день рождения не обходится без корзиночки с белковым кремом и ягодкой сверху. Продавцы заворачивают коробки в бумагу и перевязывают бечёвкой.`,pastry:`korzinochka`},{years:`1980-е`,title:`Те самые очереди`,text:`За «птичьим молоком» и «прагой» стоят в очередях и записываются в списки. Ценник 22 копейки помнят до сих пор — мы его на витрине сохранили. В шутку.`,pastry:`ptichye-moloko`},{years:`Сегодня`,title:`Те Самые`,text:`Мы печём по той же школьной тетради: смена в шесть утра, маленькие партии, бумага и бечёвка. Вкус — тот самый. Очередь — тоже, но уже добровольная.`,pastry:`ryzhik`}],u=[`Рецептуры нашего треста сладостей записаны в обычной школьной тетради в клеточку. Тетрадь, по семейной легенде, завела буфетчица Зоя Павловна — та самая, которая «кладёт крем щедро, но по норме».`,`В тетради двенадцать страниц, по числу пирожных. На полях — приписки трёх поколений мастеров-пекарей: «крем взбивать до звона», «глазурь не кипятить — обидится», «бантик вязать двойным, покупатели любят».`,`Тетрадь хранится у заведующей в сейфе, между книгой жалоб и ключом от витрины. Раз в год, в санитарный день, её достают, сверяют граммы и пишут поверху дату: «Всё верно. Печём».`,`Это легенда бренда — тёплая выдумка треста «Те Самые». Но пирожные мы и правда печём каждое утро, а бечёвку вяжем двойным узлом.`],d={meta:{title:`История и цеха — Те Самые`,description:`Вкусы эпох: конвейер времени от 1930-х до сегодняшнего дня и легенда бренда о школьной тетради с рецептурами.`},render(){let t=r(`div`,{class:`istoriya`}),d=r(`section`,{class:`page-section hist-head`});d.innerHTML=`
      <p class="kicker">Отдел №3 · Архив вкусов</p>
      <h1>Вкусы эпох</h1>
      <p class="prose">Конвейерная лента времени: от стеклянных витрин тридцатых до сегодняшней смены в шесть утра. Листайте — пирожные едут сами.</p>
    `;let f=r(`section`,{class:`timeline-section`,"aria-label":`Хронология вкусов`});f.innerHTML=`
      <div class="timeline-wrap">
        <svg class="timeline-belt" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true" data-belt>
          <path class="belt-line" d="M50 0 L50 1000" stroke="var(--ink)" stroke-width="4" stroke-dasharray="12 8" fill="none" data-belt-path/>
        </svg>
        <div class="timeline-items">
          ${l.map((e,t)=>`
            <article class="era ${t%2==0?`era--left`:`era--right`}" data-era="${t}">
              <div class="era-hub" aria-hidden="true">
                <span class="era-dot"></span>
                <span class="era-pastry">${c(e.pastry,76)}</span>
              </div>
              <div class="era-card">
                <p class="era-years">${e.years}</p>
                <h2>${e.title}</h2>
                <p>${e.text}</p>
              </div>
            </article>`).join(``)}
        </div>
        <div class="timeline-shuttle" data-timeline-shuttle aria-hidden="true">
          <div class="shuttle-badge">
            <span class="shuttle-star">★</span>
            <span class="shuttle-year" data-shuttle-year>1930-е</span>
          </div>
          <div class="shuttle-pin"></div>
        </div>
      </div>
    `;let p=r(`section`,{class:`page-section legend-section`,"aria-labelledby":`legend-h`});p.innerHTML=`
      <div class="legend-inner">
        <div class="legend-notebook" aria-hidden="true">
          <div class="notebook-cover">
            <span class="notebook-title">РЕЦЕПТУРЫ<br>12 листов</span>
            <span class="notebook-star">★</span>
          </div>
        </div>
        <div class="legend-text">
          <p class="kicker">Легенда бренда</p>
          <h2 id="legend-h">Школьная тетрадь Зои Павловны</h2>
          ${u.map(e=>`<p>${e}</p>`).join(``)}
          <p class="legend-sign">— из архива треста «${n.name}»</p>
        </div>
      </div>
    `;let m=r(`section`,{class:`page-section shops-teaser`});return m.setAttribute(`style`,``),m.innerHTML=`
      <div class="section-head">
        <span class="section-n">ЦЕХА</span>
        <h2>Пять цехов — один вкус</h2>
      </div>
      <div class="shops-teaser-grid" style="${s().replace(/\n/g,` `)}">
        ${a.map(e=>`
          <article class="shop-tile">
            <p class="shop-tile-n">${e.n}</p>
            <h3>${e.title}</h3>
            <p>${e.text}</p>
          </article>`).join(``)}
      </div>
      <p class="shops-teaser-foot">${i.fresh} — смена начинается, когда город ещё спит.</p>
      <div style="margin-top: 2rem; display: flex; justify-content: center;">
        <a href="/vitrina" class="btn btn--big btn--kumach">Перейти к витрине пирожных →</a>
      </div>
      <div class="shops-teaser-gear" aria-hidden="true">${o(64,8,e.ink)}</div>
    `,t.append(d,f,p,m),t},mount(e){let n=null;return t(async()=>{let{mountIstoriyaAnimations:e}=await import(`./istoriya-BpmTD-K4.js`);return{mountIstoriyaAnimations:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({mountIstoriyaAnimations:t})=>{n=t(e.root)}),()=>{n?.()}}};export{d as default};