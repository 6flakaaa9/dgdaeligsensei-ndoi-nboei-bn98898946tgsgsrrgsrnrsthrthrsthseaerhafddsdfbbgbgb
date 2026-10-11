const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-BGXXb1Gv.js","assets/index-CfIXPHmC.js","assets/lenis-Cv5t3-d5.js","assets/gsap-DtKhMY5a.js","assets/index-INy4fc2K.css"])))=>i.map(i=>d[i]);
import{M as e,at as t,it as n}from"./index-CfIXPHmC.js";var r={meta:{title:`Пирожные закончились — Те Самые`,description:`Страница не найдена. Приходите завтра — будет свежее.`},render(){return`
      <section class="page-section nf-section">
        <p class="kicker">Отдел, которого нет</p>
        <h1 class="nf-title">404</h1>
        <p class="nf-text">Пирожные закончились. Приходите завтра.</p>
        <p class="prose">Такого отдела в гастрономе никогда не было. Возможно, был — но в прошлом квартале его переоборудовали под склад авосек.</p>
        <div class="nf-game" data-game>
          ${n()?`<p class="nf-game-text">Мини-игра отключена в режиме пониженной анимации. Пирожные всё равно где-то рядом.</p>`:`<canvas class="nf-canvas" width="640" height="420" aria-label="Мини-игра «Поймай в авоську»" role="img"></canvas><p class="nf-game-hint">Ловите пирожные в авоську: мышь, палец или стрелки ← →. У вас 40 секунд.</p><button class="btn btn--kumach nf-start" type="button">Начать смену</button><p class="nf-score" data-score aria-live="polite"></p>`}
        <div class="nf-actions">
          <a class="btn btn--kumach" href="/">На главный прилавок</a>
          <a class="btn" href="/vitrina">В витрину</a>
        </div>
      </section>`},mount(r){let i=r.root;if(n())return;let a=t(`.nf-canvas`,i),o=t(`.nf-start`,i),s=t(`[data-score]`,i);if(!a||!o||!s)return;let c=null;return o.addEventListener(`click`,()=>{(async()=>{let{startGame:t}=await e(async()=>{let{startGame:e}=await import(`./game-BGXXb1Gv.js`);return{startGame:e}},__vite__mapDeps([0,1,2,3,4]));c?.(),c=t(a,s,o)})()}),()=>{c?.()}}};export{r as default};