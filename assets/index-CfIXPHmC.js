const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-CdRh-8yr.js","assets/kniga-CL5lNkbF.js","assets/detail-modal-DW_T5wXu.js","assets/vitrina-D04VAp46.js","assets/kontakty-zKPGvA9i.js","assets/slots-DCbuGpXu.js","assets/kabinet-CwIp7viW.js","assets/order-BKRgHAB3.js","assets/user-hZISlmUs.js","assets/admin-CChTZCp7.js","assets/global-BtMictQT.js","assets/gsap-DtKhMY5a.js","assets/core-zKR5xRPN.js","assets/cart-CFZnzOyw.js"])))=>i.map(i=>d[i]);
import{t as e}from"./lenis-Cv5t3-d5.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./gsap-DtKhMY5a.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=`tesamye:admin:customization:v1`,c={brandName:`ТЕ САМЫЕ`,brandSlogan:`Свежее. Каждое утро. По рецептуре.`,announcement:`Внимание! Завоз свежих сладких изделий и выпечки дважды в день — в 07:00 и 14:00 по ГОСТу.`,showAnnouncement:!0,phone:`8 (800) 200-19-85`,address:`ул. Большая Садовая, 12`,colors:{kumach:`#C8102E`,paper:`#F4EBD9`,cream:`#FAF4E4`,ink:`#1B2A41`,gold:`#D9A441`},features:{neonGlow:!0,steam:!0,pennants:!0,soundDefault:!0,priceMode1985Default:!1}},l={classic:{label:`Главпирожторг СССР (Классика)`,colors:{kumach:`#C8102E`,paper:`#F4EBD9`,cream:`#FAF4E4`,ink:`#1B2A41`,gold:`#D9A441`}},olymp80:{label:`Олимпиада-80 (Золото и рубин)`,colors:{kumach:`#BA122B`,paper:`#F8F1E5`,cream:`#FFF9ED`,ink:`#261C14`,gold:`#E5A93B`}},mintGost:{label:`Северный ГОСТ (Бирюза и шоколад)`,colors:{kumach:`#B82234`,paper:`#EDF4F2`,cream:`#F7FAF9`,ink:`#183138`,gold:`#4E9C7C`}}},u={...c};function d(){try{let e=localStorage.getItem(s);if(!e)return{...c};let t=JSON.parse(e);return{...c,...t,colors:{...c.colors,...t.colors||{}},features:{...c.features,...t.features||{}}}}catch{return{...c}}}function f(e){u={...e};try{localStorage.setItem(s,JSON.stringify(u))}catch{}h(u),window.dispatchEvent(new CustomEvent(`customization:updated`,{detail:u}))}function p(){try{localStorage.removeItem(s)}catch{}u={...c},h(u),window.dispatchEvent(new CustomEvent(`customization:updated`,{detail:u}))}function m(){return u}function h(e=d()){u=e;let t=document.documentElement;t.style.setProperty(`--kumach`,e.colors.kumach),t.style.setProperty(`--paper`,e.colors.paper),t.style.setProperty(`--cream`,e.colors.cream),t.style.setProperty(`--ink`,e.colors.ink),t.style.setProperty(`--gold`,e.colors.gold),document.body.classList.toggle(`no-neon`,!e.features.neonGlow),document.body.classList.toggle(`no-steam`,!e.features.steam),document.body.classList.toggle(`no-pennants`,!e.features.pennants),document.querySelector(`.hero-title, .header-word`)&&e.brandName}var g=(e,t=document)=>t.querySelector(e),_=(e,t=document)=>Array.from(t.querySelectorAll(e));function v(e,t={},n=[]){let r=document.createElement(e);for(let[e,n]of Object.entries(t))n!==void 0&&n!==!1&&(e===`class`?r.className=String(n):e===`text`?r.textContent=String(n):e===`html`?r.innerHTML=String(n):(e.startsWith(`data-`),r.setAttribute(e,String(n))));for(let e of n)r.append(e);return r}function ee(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var y=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,b=()=>window.matchMedia(`(hover: none), (pointer: coarse)`).matches;function x(e,t=`₽`){return`${e.toLocaleString(`ru-RU`)} ${t}`}function te(e){if(e<100)return`${e} коп.`;let t=Math.floor(e/100),n=e%100;return n?`${t} руб. ${n} коп.`:`${t} руб.`}function S(e,t,n,r){let i=e%10,a=e%100;return i===1&&a!==11?t:i>=2&&i<=4&&(a<12||a>14)?n:r}var ne=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`;function re(e){let t=t=>{if(t.key!==`Tab`)return;let n=_(ne,e).filter(e=>e.offsetParent!==null);if(!n.length)return;let r=n[0],i=n[n.length-1];t.shiftKey&&document.activeElement===r?(t.preventDefault(),i.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}function C(e){let t=e%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function w(){let e=new Date,t=C(e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate());return String(Math.floor(t()*9e3)+1e3)}i.registerPlugin(t);var T=null,ie=null;function ae(){return y()||T?T:(T=new e({duration:1.15,easing:e=>Math.min(1,1.001-2**(-10*e)),touchMultiplier:1.6}),T.on(`scroll`,t.update),ie=e=>{T?.raf(e*1e3)},i.ticker.add(ie),i.ticker.lagSmoothing(0),T)}function oe(){return T}function se(){T&&!y()?T.scrollTo(0,{immediate:!0}):window.scrollTo(0,0)}i.registerPlugin(t,n,a,r,o);var E={name:`Те Самые`,nameUpper:`ТЕ САМЫЕ`,legal:`Трест «Те Самые»`,department:`Главпирожторг`,gost:`ГОСТ ТС-001`,slogan:`Пирожные, которые вы помните`,subslogans:[`Свежее. Каждое утро. По рецептуре.`,`Вкус, проверенный временем.`,`Заверните! И с бантиком.`],sealText:`ПИРОЖНЫЕ ★ ТРЕСТ «ТЕ САМЫЕ» ★ ГОСТ ТС-001 ★ СВЕЖЕЕ ЕЖЕДНЕВНО ★`,copyright:`© Трест «Те Самые», ГОСТ ТС-001`},ce={city:`Приморск`,street:`ул. Сахарная, 12`,landmark:`вход со двора, рядом с почтой`,phone:`+7 (000) 123-45-67`,email:`priglavokoshka@tesamye.example`},D={weekday:{open:8,close:20},weekend:{open:9,close:19},lunch:{from:14,to:15},sanitaryDay:`last-thursday`,timezone:`Europe/Moscow`,slotLeadMinutes:30,slotCount:6},le={symbol:`₽`,code:`RUB`},O={kumach:`#C8102E`,ink:`#141210`,cream:`#F1E7D0`,paper:`#FAF4E4`,gold:`#D9A441`,choco:`#3B2314`,pinkCream:`#E9A7AE`,mint:`#9CCDB8`,navy:`#1B2A41`},ue=[{name:`БЕЗЕ`,info:`СВЕЖИЙ ВЫНОС`},{name:`КАРТОШКА`,info:`ПОСЛЕДНИЕ 3`},{name:`НАПОЛЕОН`,info:`ДО 14:00`},{name:`КОРЗИНОЧКА`,info:`ХИТ СЕЗОНА`},{name:`ТРУБОЧКА`,info:`ЕСТЬ В НАЛИЧИИ`},{name:`РЫЖИК`,info:`ПРИБЫЛ В 6:00`}],de={top:`ПОСТУПИЛА СВЕЖАЯ ВЫПЕЧКА ★ НАПОЛЕОН — ДО 14:00 ★ КАРТОШКА ЗАКАНЧИВАЕТСЯ ★ ЗАВЕРНИТЕ С БАНТИКОМ ★`,bottom:`СДАЧА — ПИРОЖНЫМИ ★ ОБЕД С 14 ДО 15 ★ ПРОБЕЙТЕ В КАССУ ★ ОТДЕЛ №3. СЛАДКИЕ ИЗДЕЛИЯ ТРЕСТА ★`},fe=[`Мы печём так же, как пекли тогда:`,`по утрам, маленькими партиями,`,`заворачиваем в бумагу и перевязываем бечёвкой.`,`Никакой спешки. Только рецепт, весы и терпение.`],pe=[`по утрам`,`в бумагу`,`рецепт`],me=[{value:6,suffix:`:00`,label:`Начало выпечки`},{value:72,suffix:` ч`,label:`Срок годности`},{value:12,suffix:``,label:`Видов в витрине`},{value:5,suffix:``,label:`Цехов`}],he=[{n:`01`,title:`Замес`,text:`Мука, масло, яйца и ничего лишнего. Тесто месят с шести утра, пока город ещё спит.`},{n:`02`,title:`Выпечка`,text:`Печь держит 200° и не спорит с технологической картой. Корка должна стать золотой, а не загорелой.`},{n:`03`,title:`Крем`,text:`Заварной, масляный, белковый — три венчика, три рецепта из одной школьной тетради.`},{n:`04`,title:`Отделка`,text:`Здесь из мешка вырастают кремовые розы, а глазурь ложится ровно, как по линейке.`},{n:`05`,title:`Упаковка`,text:`Бумага, бечёвка, бантик. Коробка должна открываться с предвкушением, а не с трудом.`}],ge={title:`Какое вы пирожное?`,intro:`Пять вопросов от Главпирожторга. Отвечайте честно — комиссия всё равно угадает.`,questions:[{q:`Утро субботы. Ваши действия?`,a:[{t:`Спать до обеда, потом ещё немного`,v:`kartoshka`},{t:`Печь блины на всю семью`,v:`medovik`},{t:`Умчаться гулять, завтрак на бегу`,v:`trubochka`},{t:`Чай, газета, тишина`,v:`napoleon`}]},{q:`Ваша роль в компании?`,a:[{t:`Душа стола — без меня скучно`,v:`korzinochka`},{t:`Тот, кто всё организовал`,v:`praga`},{t:`Тихий наблюдатель с чаем`,v:`beze`},{t:`Главный по шуткам`,v:`rombaba`}]},{q:`Идеальный подарок — это…`,a:[{t:`Коробка с бантиком и сюрпризом`,v:`ptichye`},{t:`Что-то практичное, но красивое`,v:`koltso`},{t:`Внимание и тёплые слова`,v:`leningradskoe`},{t:`Пирожное. Просто пирожное`,v:`kartoshka`}]},{q:`Погода, в которую вы счастливы?`,a:[{t:`Мягкий вечер после дождя`,v:`leningradskoe`},{t:`Солнце, дача, компот`,v:`trubochka`},{t:`Снег и печка`,v:`medovik`},{t:`Мне и под пледом хорошо`,v:`napoleon`}]},{q:`Что вы делаете с последним пирожным в коробке?`,a:[{t:`Отдаю кому-то ещё`,v:`beze`},{t:`Съедаю сам. Медленно`,v:`praga`},{t:`Делю на всех поровну`,v:`korzinochka`},{t:`Прячу до лучших времён`,v:`ptichye`}]}],results:[{v:`leningradskoe`,slug:`leningradskoe`,text:`Вы — ленинградское пирожное. Классика с шоколадным кремом, основательные, с ореховой искрой и вкусом праздника.`},{v:`kartoshka`,slug:`kartoshka`,text:`Вы — картошка. На картошку не похожи ничем, и всё равно любимы всеми. Скромный, надёжный, свой.`},{v:`korzinochka`,slug:`korzinochka`,text:`Вы — корзиночка. Гвоздь любого праздника: с ягодкой сверху и кремом на все стороны.`},{v:`napoleon`,slug:`napoleon`,text:`Вы — наполеон. Многослойный, с историей. Чтобы вас понять, нужно время и горячий чай.`},{v:`trubochka`,slug:`trubochka`,text:`Вы — трубочка. Лёгкие на подъём, хрустящие снаружи, со сливками внутри и смехом снаружи.`},{v:`ptichye`,slug:`ptichye`,text:`Вы — птичье молоко. Дефицитная нежность в шоколадной броне. Вас берегут к особому случаю.`},{v:`koltso`,slug:`koltso`,text:`Вы — песочное кольцо. Простые, основательные, с орешками по кругу. На вас можно положиться.`},{v:`beze`,slug:`beze`,text:`Вы — безе. Воздушные и деликатные. Одно неловкое движение — и вы обиделись. Но быстро таете.`},{v:`praga`,slug:`praga`,text:`Вы — прага. Шоколадная глубина, абрикосовая искра. Вы серьёзны, но с вами интересно.`},{v:`rombaba`,slug:`rombaba`,text:`Вы — ромовая баба. С характером, с изюминкой и лёгким градусом праздника внутри.`},{v:`medovik`,slug:`medovik`,text:`Вы — рыжик. Медовые, домашние, тёплые. Рядом с вами пахнет уютом и бабушкиной кухней.`}]},_e=[`Благодарим! Ждём снова.`,`Принято к сведению. Продавцу объявлена благодарность.`,`Ваша запись зачитана на планёрке. Печём дальше!`,`Рады стараться. С вас — ещё один отзыв.`,`Заверните! И с бантиком.`],ve={wrap:`Заверните!`,fresh:`Свежее, только что из цеха`,choose:`Не стойте над душой, выбирайте`,bow:`Вам с бантиком?`,change:`Сдача — пирожными`,sanitary:`Санитарный день`,lunch:`Перерыв на обед`,busy:`Продавец занят`,inStock:`Товар в наличии`,checkout:`Пробейте в кассу`},k={durations:{reveal:.9,transition:1.05,stamp:.55,flap:.09,tilt:.25,fade:.2},easings:{reveal:`power4.out`,transition:`power3.inOut`,stamp:`back.out(1.7)`,elastic:`elastic.out(1, 0.6)`,swing:`sine.inOut`},stagger:{cards:.07,letters:.03,flaps:.012},tiltMaxDeg:6,parallaxPx:24,preloader:{full:2.5,short:.8}},A={preloader:!0,customCursor:!0,grain:!0,filmDust:!0,vignette:!0,sound:!0,konami:!0,game404:!0,viewTransitions:!0},ye={"/":`ОТДЕЛ №1 — ГЛАВНЫЙ ПРИЛАВОК`,"/vitrina":`ОТДЕЛ №2 — ВИТРИНА`,"/istoriya":`ОТДЕЛ №3 — АРХИВ ВКУСОВ`,"/kniga-otzyvov":`ОТДЕЛ №4 — КНИГА ОТЗЫВОВ`,"/kontakty":`ОТДЕЛ №5 — АДМИНИСТРАЦИЯ`,"/404":`ОТДЕЛ, КОТОРОГО НЕТ`},be={url:`https://tesamye.example`,locale:`ru`,themeColor:O.kumach,description:`«Те Самые» — ностальгические пирожные: ленинградское, картошка, корзиночка, наполеон. Свежее каждое утро, по рецептуре. Трест «Те Самые», ГОСТ ТС-001.`},xe={desk:`Касса №3`,name:`Мария Ивановна`},Se=[],j=null;function Ce(){return j&&document.body.contains(j)?j:(j=document.createElement(`div`),j.className=`transition-overlay`,j.setAttribute(`aria-hidden`,`true`),j.innerHTML=`
    <div class="to-wedge"><span class="to-wedge-star"></span></div>
    <div class="to-stripes">
      ${Array.from({length:8},()=>`<i><b></b><b></b></i>`).join(``)}
    </div>
    <div class="to-mask"></div>
    <div class="to-dept"><span></span></div>
  `,document.body.appendChild(j),j)}function we(e){return ye[e]??ye[`/404`]}var Te=e=>new Promise(t=>setTimeout(t,e));async function Ee(e,t,n,r){let a=Ce();if(y()){e===`cover`?(a.classList.add(`active`,`fade-mode`),await Te(200)):(await Te(200),a.classList.remove(`active`,`fade-mode`));return}a.classList.add(`active`);let o=a.querySelector(`.to-wedge`),s=Array.from(a.querySelectorAll(`.to-stripes i`)),c=a.querySelector(`.to-mask`),l=a.querySelector(`.to-dept`),u=l.querySelector(`span`);u.textContent=we(r),i.set([o,c,l],{clearProps:`all`}),i.set(s,{clearProps:`all`}),i.set(a.querySelector(`.to-stripes`),{display:t===1?`grid`:`none`}),i.set(o,{display:t===0?`block`:`none`}),i.set(c,{display:t===2?`block`:`none`});let d=Math.hypot(window.innerWidth,window.innerHeight);if(e===`cover`){let e=i.timeline();t===0?e.fromTo(o,{clipPath:`polygon(0% 0%, 0% 0%, -35% 100%, -35% 100%)`},{clipPath:`polygon(-20% 0%, 130% 0%, 130% 100%, -20% 100%)`,duration:.5,ease:k.easings.transition},0):t===1?e.fromTo(s,{scaleY:0,transformOrigin:`50% 0%`},{scaleY:1,duration:.26,stagger:.05,ease:`power3.inOut`},0):e.fromTo(c,{clipPath:`circle(0px at ${n.x}px ${n.y}px)`},{clipPath:`circle(${d}px at ${n.x}px ${n.y}px)`,duration:.55,ease:k.easings.transition},0),e.fromTo(l,{opacity:0,yPercent:45},{opacity:1,yPercent:0,duration:.22,ease:`power4.out`},.28),await e}else{i.set(l,{opacity:1,yPercent:0});let e=i.timeline();e.to(l,{opacity:0,yPercent:-30,duration:.18,ease:`power2.in`},0),t===0?e.to(o,{clipPath:`polygon(120% 0%, 130% 0%, 130% 100%, 120% 100%)`,duration:.48,ease:k.easings.transition},.05):t===1?e.to(s,{scaleY:0,transformOrigin:`50% 100%`,duration:.24,stagger:.04,ease:`power3.inOut`},.05):e.to(c,{clipPath:`circle(0px at ${n.x}px ${n.y}px)`,duration:.5,ease:k.easings.transition},.06),e.add(()=>{a.classList.remove(`active`)}),await e}}function De(e,t,n){document.title=e;let r=(e,t,n,r)=>{let i=document.head.querySelector(e);i||(i=document.createElement(`meta`),i.setAttribute(t,n),document.head.appendChild(i)),i.setAttribute(`content`,r)};r(`meta[name="description"]`,`name`,`description`,t),r(`meta[property="og:title"]`,`property`,`og:title`,e),r(`meta[property="og:description"]`,`property`,`og:description`,t),r(`meta[property="og:url"]`,`property`,`og:url`,be.url+n),document.dispatchEvent(new CustomEvent(`meta:updated`,{detail:{title:e,description:t,path:n}}))}var Oe=`modulepreload`,ke=function(e){return`/`+e},Ae={},je=function(e){return e.pathname.endsWith(`.css`)},M=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ke(t,n);let r=s(t);if(r.href in Ae)return;Ae[r.href]=!0;let i=je(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:Oe,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Me=[{path:`/`,loader:()=>M(()=>import(`./home-CdRh-8yr.js`).then(e=>e.t),__vite__mapDeps([0,1,2]))},{path:`/vitrina`,loader:()=>M(()=>import(`./vitrina-D04VAp46.js`),__vite__mapDeps([3,2]))},{path:`/istoriya`,loader:()=>M(()=>import(`./istoriya-D8PB-TUP.js`),[])},{path:`/kniga-otzyvov`,loader:()=>M(()=>import(`./kniga-CL5lNkbF.js`),[])},{path:`/kontakty`,loader:()=>M(()=>import(`./kontakty-zKPGvA9i.js`),__vite__mapDeps([4,5]))},{path:`/kabinet`,loader:()=>M(()=>import(`./kabinet-CwIp7viW.js`),__vite__mapDeps([6,7,8]))},{path:`/admin`,loader:()=>M(()=>import(`./admin-CChTZCp7.js`),__vite__mapDeps([9,7,1]))},{path:`/404`,loader:()=>M(()=>import(`./not-found-Dm7HIRsr.js`),[])}],N=null,Ne=null,Pe=``,Fe=!1,Ie=null,Le=0;function Re(e){let t=e===``?`/`:e;return Me.find(e=>e.path===t)??null}function ze(){N=document.getElementById(`page-content`),window.addEventListener(`popstate`,()=>{Be(location.pathname,{fromPop:!0})}),document.addEventListener(`click`,e=>{let t=e.target.closest?.(`a[href]`);if(!t)return;let n=t.getAttribute(`href`);if(!n||t.target===`_blank`||e.metaKey||e.ctrlKey||e.shiftKey||/^https?:/i.test(n)||n.startsWith(`#`)||n.startsWith(`mailto:`))return;let r=new URL(n,location.origin);if(r.origin!==location.origin)return;e.preventDefault();let i=t.getBoundingClientRect();Ie={x:i.left+i.width/2,y:i.top+i.height/2},Be(r.pathname)}),Be(location.pathname,{initial:!0})}async function Be(e,t={}){if(!N)return;let n=e===``?`/`:e;if(!t.initial&&!t.fromPop&&n===Pe||Fe)return;let r=(await(Re(n)??Re(`/404`)).loader()).default,i={path:n,params:{},root:N};if(t.initial){He(r,i,n),Ue(n);return}Fe=!0,document.body.classList.add(`is-transitioning`),Le=(Le+1)%3;let a=Ie??{x:window.innerWidth/2,y:window.innerHeight/2};await Ee(`cover`,Le,a,n),Ve(),He(r,i,n),await Ee(`reveal`,Le,a,n),t.fromPop||history.pushState({},``,n),Ue(n),document.body.classList.remove(`is-transitioning`),Fe=!1,Ie=null}function Ve(){if(Ne){try{Ne()}catch{}Ne=null}t.getAll().forEach(e=>e.kill())}function He(e,t,n){if(!N)return;let r=e.render(t);N.innerHTML=``,typeof r==`string`?N.insertAdjacentHTML(`beforeend`,r):N.appendChild(r),Pe=n,De(e.meta.title,e.meta.description,n),Ne=e.mount?.(t)??null}function Ue(e){se(),requestAnimationFrame(()=>{let n=N?.querySelector(`h1`);n&&(n.hasAttribute(`tabindex`)||n.setAttribute(`tabindex`,`-1`),n.focus({preventScroll:!0})),t.refresh(),window.dispatchEvent(new CustomEvent(`route:after`,{detail:{path:e}}))})}var We={all:`Все`,chocolate:`Шоколадные`,cream:`Кремовые`,puff:`Слоёные`,light:`Лёгкие`,classic:`Классика`},Ge={hit:`ХИТ СЕЗОНА`,new:`НОВИНКА`,limited:`ОСТАЛОСЬ 3 ШТ.`},Ke={leningradskoe:`/images/leningradskoe.jpg`,kartoshka:`/images/kartoshka.jpg`,korzinochka:`/images/korzinochka.jpg`,napoleon:`/images/napoleon.jpg`,trubochka:`/images/trubochka.jpg`,"ptichye-moloko":`/images/ptichye-moloko.jpg`,"pesochnoe-koltso":`/images/pesochnoe-koltso.jpg`,beze:`/images/beze.jpg`,praga:`/images/praga.jpg`,kievskoe:`/images/kievskoe.jpg`,ryzhik:`/images/ryzhik.jpg`,"romovaya-baba":`/images/romovaya-baba.jpg`,bushe:`/images/bushe.jpg`},qe=[{id:`p13`,slug:`bushe`,name:`Буше`,category:`cream`,tagline:`Воздушный бисквит под шоколадной глазурью`,description:`Две круглые бисквитные лепёшки, нежный сливочный крем Шарлотт, глянцевая шоколадная помадка с тонкой росписью. Классическое ленинградское пирожное по рецептуре 1985 года.`,composition:[`Воздушный бисквит`,`Сливочный крем Шарлотт`,`Шоколадная помадка`,`Шоколадная отделка`],weightG:90,priceRub:180,priceKop1985:22,shelfLifeHours:36,gost:`ГОСТ 1985-Б`,image:`/images/bushe.jpg`,layers:[{id:`glaze`,label:`Шоколадный купол`,note:`бисквит под глянцевой шоколадной глазурью с росписью`},{id:`cream`,label:`Крем «Шарлотт»`,note:`пышный сливочный слой на масле 82.5%`},{id:`dough`,label:`Бисквитное основание`,note:`выпеченный золотистый круглый бисквит`}],tags:[`hit`,`new`]},{id:`p01`,slug:`leningradskoe`,name:`Ленинградское`,category:`chocolate`,tagline:`Шоколадное с орехами`,description:`Рассыпчатые песочные коржи, шоколадный крем Шарлотт, глазурь и дроблёный арахис. Легенда ленинградских булочных и кафетериев 1970-х годов.`,composition:[`Песочные коржи`,`Крем Шарлотт`,`Шоколадная глазурь`,`Дроблёный арахис`],weightG:80,priceRub:190,priceKop1985:22,shelfLifeHours:72,gost:`ГОСТ ТС-001`,image:`/images/leningradskoe.jpg`,layers:[{id:`glaze`,label:`Шоколадная глазурь`,note:`густая, из натурального какао`},{id:`cream`,label:`Крем Шарлотт`,note:`шоколадный, на сливочном масле`},{id:`dough`,label:`Песочные коржи`,note:`рассыпчатые и нежные`}],tags:[`hit`]},{id:`p02`,slug:`kartoshka`,name:`Картошка`,category:`chocolate`,tagline:`Не похожа, но картошка`,description:`Бисквитная крошка, масляный крем, какао. На картошку не похоже ничем, и всё равно — картошка.`,composition:[`Бисквитная крошка`,`Масляный крем`,`Какао-порошок`],weightG:90,priceRub:160,priceKop1985:15,shelfLifeHours:72,gost:`ГОСТ ТС-002`,image:`/images/kartoshka.jpg`,layers:[{id:`cocoa`,label:`Какао-обсыпка`,note:`пачкает пальцы — как положено`},{id:`mass`,label:`Бисквитно-кремовая масса`,note:`плотная, честная`},{id:`core`,label:`Кремовое ядро`,note:`масляный крем внутри`}],tags:[`hit`]},{id:`p03`,slug:`korzinochka`,name:`Корзиночка`,category:`cream`,tagline:`Гвоздь дня рождения`,description:`Песочная корзинка, белковый крем, ягодка сверху. Гвоздь любого детского дня рождения.`,composition:[`Песочная корзинка`,`Белковый крем`,`Джем`,`Ягодка`],weightG:85,priceRub:180,priceKop1985:20,shelfLifeHours:48,gost:`ГОСТ ТС-003`,image:`/images/korzinochka.jpg`,layers:[{id:`berry`,label:`Ягодка`,note:`достаётся самому достойному`},{id:`cream`,label:`Белковый крем`,note:`завиток высотой 4 см`},{id:`jam`,label:`Джем`,note:`сюрприз на донышке`},{id:`crust`,label:`Песочная корзинка`,note:`хрустит на весь зал`}],tags:[`hit`]},{id:`p04`,slug:`napoleon`,name:`Наполеон`,category:`puff`,tagline:`Слоёв больше, чем лет`,description:`Слоёное тесто, заварной крем, крошка по бокам. Восемь слоёв теста — столько же, сколько у бабушкиного. Ешьте над тарелкой: крошится честно.`,composition:[`Слоёное тесто`,`Заварной крем`,`Крошка`],weightG:120,priceRub:240,priceKop1985:30,shelfLifeHours:48,gost:`ГОСТ ТС-004`,image:`/images/napoleon.jpg`,layers:[{id:`crumb`,label:`Крошка сверху`,note:`для красоты и для ковра`},{id:`cream`,label:`Кремовые прослойки`,note:`между каждым слоем`},{id:`dough`,label:`Восемь слоёв теста`,note:`хруст слышно из соседней комнаты`}],tags:[]},{id:`p05`,slug:`trubochka`,name:`Трубочка`,category:`cream`,tagline:`Со сливочным кремом`,description:`Хрустящая вафельная трубочка, сливочный крем от края до края. Начинайте с обоих концов — к середине крем вкуснее.`,composition:[`Вафельная трубочка`,`Сливочный крем`],weightG:55,priceRub:140,priceKop1985:12,shelfLifeHours:72,gost:`ГОСТ ТС-005`,image:`/images/trubochka.jpg`,layers:[{id:`cream`,label:`Сливочный крем`,note:`по всей длине, проверяли штангенциркулем`},{id:`wafer`,label:`Вафельная трубочка`,note:`хруст первой свежести`}],tags:[`hit`]},{id:`p06`,slug:`ptichye-moloko`,name:`Птичье молоко`,category:`light`,tagline:`Суфле, которое ждали`,description:`Воздушное суфле, слой тонкого бисквита, шоколадная глазурь. Раньше за ним стояли в очереди. Теперь очередь стоит к нам — но суфле то же.`,composition:[`Суфле`,`Бисквит`,`Шоколадная глазурь`],weightG:95,priceRub:260,priceKop1985:35,shelfLifeHours:72,gost:`ГОСТ ТС-006`,image:`/images/ptichye-moloko.jpg`,layers:[{id:`glaze`,label:`Шоколадная глазурь`,note:`трескается ровно, как задумано`},{id:`souffle`,label:`Суфле`,note:`облако, которое держит форму`},{id:`sponge`,label:`Бисквит`,note:`тонкий, чтобы не мешать`}],tags:[`limited`]},{id:`p07`,slug:`pesochnoe-koltso`,name:`Кольцо с орехами`,category:`classic`,tagline:`Песочное, с арахисом`,description:`Песочное кольцо, обсыпанное рублеными орехами. Простое, как таблица умножения, и такое же полезное для настроения.`,composition:[`Песочное тесто`,`Рубленый арахис`,`Сахарная пудра`],weightG:80,priceRub:150,priceKop1985:14,shelfLifeHours:120,gost:`ГОСТ ТС-007`,image:`/images/pesochnoe-koltso.jpg`,layers:[{id:`nuts`,label:`Ореховая обсыпка`,note:`по кругу, ни одного пропуска`},{id:`dough`,label:`Песочное тесто`,note:`рассыпается ответственно`}],tags:[]},{id:`p08`,slug:`beze`,name:`Безе`,category:`light`,tagline:`Воздушный поцелуй`,description:`Хрустящее снаружи, облачное внутри. Два безе, склеенных кремом. Обращайтесь аккуратно — обижается на каждое неловкое движение.`,composition:[`Белковое безе`,`Масляный крем`],weightG:45,priceRub:130,priceKop1985:11,shelfLifeHours:120,gost:`ГОСТ ТС-008`,image:`/images/beze.jpg`,layers:[{id:`meringue`,label:`Верхнее безе`,note:`хрустит тише снега`},{id:`cream`,label:`Кремовая прослойка`,note:`склеивает и мирит`},{id:`meringue-b`,label:`Нижнее безе`,note:`держит всё на себе`}],tags:[]},{id:`p09`,slug:`praga`,name:`Прага`,category:`chocolate`,tagline:`Шоколадная глубина`,description:`Шоколадный бисквит, шоколадный крем, абрикосовая нотка под глазурью. Серьёзное пирожное для серьёзного чаепития.`,composition:[`Шоколадный бисквит`,`Шоколадный крем`,`Абрикосовый джем`,`Глазурь`],weightG:110,priceRub:270,priceKop1985:40,shelfLifeHours:72,gost:`ГОСТ ТС-009`,image:`/images/praga.jpg`,layers:[{id:`glaze`,label:`Шоколадная глазурь`,note:`зеркальная, но без самолюбования`},{id:`cream`,label:`Шоколадный крем`,note:`две прослойки — минимум`},{id:`jam`,label:`Абрикосовый джем`,note:`секрет, о котором все знают`},{id:`sponge`,label:`Шоколадный бисквит`,note:`тёмный, влажный, честный`}],tags:[`hit`]},{id:`p10`,slug:`kievskoe`,name:`Киевское`,category:`classic`,tagline:`Ореховое безе`,description:`Хрустящие ореховые коржи-безе, масляный крем и много фундука. Режется решительно, жуётся с восторгом.`,composition:[`Ореховое безе`,`Масляный крем`,`Фундук`,`Сахарная пудра`],weightG:100,priceRub:280,priceKop1985:42,shelfLifeHours:96,gost:`ГОСТ ТС-010`,image:`/images/kievskoe.jpg`,layers:[{id:`nuts`,label:`Ореховая обсыпка`,note:`фундук, без переговоров`},{id:`cream`,label:`Масляный крем`,note:`две прослойки, щедрые`},{id:`meringue`,label:`Ореховые коржи-безе`,note:`хрустят дуэтом`}],tags:[`new`]},{id:`p11`,slug:`ryzhik`,name:`Медовое «Рыжик»`,category:`puff`,tagline:`Пахнет уютом`,description:`Медовые коржи, сметанный крем, мягкие бока. К утру становится только лучше — если доживёт. Обычно не доживает.`,composition:[`Медовые коржи`,`Сметанный крем`,`Мёд`,`Крошка`],weightG:130,priceRub:230,priceKop1985:28,shelfLifeHours:96,gost:`ГОСТ ТС-011`,image:`/images/ryzhik.jpg`,layers:[{id:`crumb`,label:`Медовая крошка`,note:`рыжая, как название`},{id:`cream`,label:`Сметанный крем`,note:`пропитывает насквозь`},{id:`dough`,label:`Медовые коржи`,note:`тонкие, шесть штук`}],tags:[]},{id:`p12`,slug:`romovaya-baba`,name:`Ромовая баба`,category:`classic`,tagline:`С изюминкой и характером`,description:`Пышный кекс, пропитка, помадка сверху, изюм внутри. Взрослое пирожное: детям — только смотреть.`,composition:[`Дрожжевой кекс`,`Сахарная пропитка`,`Помадка`,`Изюм`],weightG:105,priceRub:210,priceKop1985:25,shelfLifeHours:48,gost:`ГОСТ ТС-012`,image:`/images/romovaya-baba.jpg`,layers:[{id:`fondant`,label:`Помадка`,note:`белая шапка, трещинки — признак мастерства`},{id:`dough`,label:`Пропитанный кекс`,note:`влажный до последней крошки`},{id:`raisin`,label:`Изюм`,note:`встречается, как старое письмо`}],tags:[`limited`]}],Je=`tesamye:products:v1`;function Ye(){try{let e=localStorage.getItem(Je);if(!e)return[...qe];let t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.filter(e=>e.slug!==`ekler`).map(e=>!e.image&&Ke[e.slug]?{...e,image:Ke[e.slug]}:e)}catch{}return[...qe]}var P=Ye();function Xe(e){let t=e.filter(e=>e.slug!==`ekler`);P=t;try{localStorage.setItem(Je,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent(`products:updated`,{detail:t}))}function Ze(){try{localStorage.removeItem(Je)}catch{}P=[...qe],window.dispatchEvent(new CustomEvent(`products:updated`,{detail:P}))}function Qe(e){let t=`p`+String(Date.now()).slice(-4),n={...e,id:t};return Xe([...P,n]),n}function $e(e,t){let n=P.findIndex(t=>t.id===e);return n!==-1&&(P[n]={...P[n],...t},Xe([...P]),!0)}function et(e){let t=P.filter(t=>t.id!==e);return t.length!==P.length&&(Xe(t),!0)}var F=e=>P.find(t=>t.slug===e);function tt(e=new Date){let t=e.getFullYear()*372+(e.getMonth()+1)*31+e.getDate();return P[t%P.length]}function nt(e=new Date){let t=new Date(e);return t.setDate(t.getDate()+1),tt(t)}var rt=()=>{let e=P.filter(e=>e.tags.includes(`hit`)),t=P.filter(e=>!e.tags.includes(`hit`));return[...e,...t].slice(0,6)},it=`tesamye:avoska:v1`,at=`tesamye:sound:v1`,ot=new Set,I={items:[]};function st(){try{let e=localStorage.getItem(it);if(!e)return;let t=JSON.parse(e);if(!Array.isArray(t))return;I={items:t.filter(e=>typeof e==`object`&&!!e&&typeof e.slug==`string`&&typeof e.qty==`number`&&e.qty>0&&!!F(e.slug)).map(e=>({slug:e.slug,qty:Math.min(99,Math.round(e.qty))}))}}catch{I={items:[]}}}function ct(){try{localStorage.setItem(it,JSON.stringify(I.items))}catch{}}function L(){ct(),ot.forEach(e=>e(I))}var lt={get state(){return I},subscribe(e){return ot.add(e),e(I),()=>ot.delete(e)},add(e,t=1){let n=I.items.find(t=>t.slug===e);n?n.qty=Math.min(99,n.qty+t):I.items.push({slug:e,qty:t}),L()},inc(e){this.add(e,1)},dec(e){let t=I.items.find(t=>t.slug===e);t&&(--t.qty,t.qty<=0&&(I.items=I.items.filter(t=>t.slug!==e)),L())},remove(e){I.items=I.items.filter(t=>t.slug!==e),L()},clear(){I.items=[],L()},get count(){return I.items.reduce((e,t)=>e+t.qty,0)},get total(){return I.items.reduce((e,t)=>{let n=F(t.slug);return e+(n?n.priceRub*t.qty:0)},0)},get detailed(){return I.items.map(e=>{let t=F(e.slug);return t?{product:t,qty:e.qty}:null}).filter(e=>e!==null)}},R={get enabled(){try{return localStorage.getItem(at)===`1`}catch{return!1}},set enabled(e){try{localStorage.setItem(at,e?`1`:`0`)}catch{}}};st();function ut(e,t,n,r,i=-90){let a=[];for(let o=0;o<10;o++){let s=o%2==0?n:r,c=(i+o*180/10)*Math.PI/180;a.push(`${(e+s*Math.cos(c)).toFixed(2)},${(t+s*Math.sin(c)).toFixed(2)}`)}return`M${a.join(`L`)}Z`}function dt(e=120,t=!1){return`<img class="seal ${t?`seal--spin`:`seal--hover-tilt`}" src="/images/logo-seal.png?v=craft-3" width="${e}" height="${e}" alt="Печать треста «Те Самые»" style="display:inline-block; vertical-align:middle; border-radius:50%; object-fit:contain; filter:drop-shadow(2px 3px 0 rgba(20,18,16,0.22));" />`}function ft(e=1){return`
  <svg class="wordmark" viewBox="0 0 260 88" width="${260*e}" height="${88*e}" role="img" aria-label="Те Самые">
    <g transform="rotate(-4 130 52)">
      <rect x="6" y="26" width="248" height="46" fill="${O.kumach}"/>
      <rect x="10" y="22" width="248" height="46" fill="${O.ink}"/>
      <rect x="6" y="26" width="248" height="46" fill="${O.kumach}"/>
      <text x="130" y="60" text-anchor="middle" fill="${O.cream}" font-family="Oswald, sans-serif" font-weight="700" font-size="34" letter-spacing="1">ТЕ САМЫЕ</text>
      <path d="${ut(130,16,12,5)}" fill="${O.gold}"/>
    </g>
  </svg>`}function pt(e=28){return`
  <svg viewBox="0 0 32 32" width="${e}" height="${e}" fill="none" aria-hidden="true">
    <path d="M9 6c0 6 14 6 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M6 12h20l-2 15H8L6 12z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 12h20M10 12l1 15M16 12v15M22 12l-1 15M7 18h18M7.5 24h17" stroke="currentColor" stroke-width="1" opacity=".55"/>
  </svg>`}function mt(e=26){return`
  <svg viewBox="0 0 32 32" width="${e}" height="${e}" aria-hidden="true">
    <path d="M6 13h5l8-6v18l-8-6H6z" fill="currentColor"/>
    <path class="wave wave-1" d="M22 12a6 6 0 010 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path class="wave wave-2" d="M25 9a10 10 0 010 14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/>
  </svg>`}function ht(e=24,t=900){let n=t/2,r=[];for(let i=0;i<e;i++){let a=i*360/e,o=i%2==0?3:1.4;r.push(`<path d="M${n},${n} L${n+t},${n-o*6} L${n+t},${n+o*6} Z" fill="${O.gold}" opacity="${i%2==0?.5:.28}" transform="rotate(${a} ${n} ${n})"/>`)}return`<svg class="sun-rays" viewBox="0 0 ${t} ${t}" width="${t}" height="${t}" aria-hidden="true">${r.join(``)}</svg>`}var z=null,B=null,V=null;function gt(){if(typeof window>`u`)return null;if(!z){let e=window.AudioContext??window.webkitAudioContext;if(!e)return null;z=new e,B=z.createGain(),B.gain.value=.5,B.connect(z.destination)}return z.state===`suspended`&&z.resume(),z}function _t(e,t){let n=e.currentTime,r=e.createOscillator(),i=e.createGain();r.type=`square`,r.frequency.setValueAtTime(280,n),r.frequency.exponentialRampToValueAtTime(80,n+.025),i.gain.setValueAtTime(.12,n),i.gain.exponentialRampToValueAtTime(1e-4,n+.035),r.connect(i).connect(t),r.start(n),r.stop(n+.04);let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(880,n+.01),o.gain.setValueAtTime(.03,n+.01),o.gain.exponentialRampToValueAtTime(1e-4,n+.08),a.connect(o).connect(t),a.start(n+.01),a.stop(n+.09)}function vt(e,t){let n=e.currentTime;[{f:349.23,at:0,dur:.32},{f:440,at:.3,dur:.32},{f:523.25,at:.6,dur:.35},{f:698.46,at:.95,dur:.5},{f:659.25,at:1.48,dur:.25},{f:587.33,at:1.72,dur:.25},{f:523.25,at:1.98,dur:.6}].forEach(({f:r,at:i,dur:a})=>{let o=n+i,s=e.createOscillator(),c=e.createGain();s.type=`sine`,s.frequency.setValueAtTime(r,o);let l=e.createOscillator(),u=e.createGain();l.type=`triangle`,l.frequency.setValueAtTime(r*2,o),u.gain.setValueAtTime(.012,o),u.gain.exponentialRampToValueAtTime(1e-4,o+a*.7),c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(.08,o+.02),c.gain.exponentialRampToValueAtTime(1e-4,o+a),s.connect(c).connect(t),l.connect(u).connect(t),s.start(o),s.stop(o+a+.05),l.start(o),l.stop(o+a+.05)})}function yt(e,t,n,r=.05){let i=e.createOscillator(),a=e.createGain();i.type=`square`,i.frequency.setValueAtTime(1800,n),i.frequency.exponentialRampToValueAtTime(200,n+.02),a.gain.setValueAtTime(r,n),a.gain.exponentialRampToValueAtTime(1e-4,n+.03),i.connect(a).connect(t),i.start(n),i.stop(n+.04)}function bt(e,t){let n=e.currentTime,r=e.createBufferSource(),i=e.createBuffer(1,e.sampleRate*.08,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=(Math.random()*2-1)*(1-e/a.length);r.buffer=i;let o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=2400,o.Q.value=2;let s=e.createGain();s.gain.setValueAtTime(.16,n),s.gain.exponentialRampToValueAtTime(1e-4,n+.08),r.connect(o).connect(s).connect(t),r.start(n);let c=e.createOscillator(),l=e.createGain();c.type=`sine`,c.frequency.setValueAtTime(1318,n+.03),l.gain.setValueAtTime(1e-4,n+.03),l.gain.linearRampToValueAtTime(.09,n+.05),l.gain.exponentialRampToValueAtTime(1e-4,n+.45),c.connect(l).connect(t),c.start(n+.03),c.stop(n+.5)}function xt(e,t){let n=e.currentTime;[1046,1568].forEach((r,i)=>{let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.value=r;let s=n+i*.09;o.gain.setValueAtTime(1e-4,s),o.gain.linearRampToValueAtTime(.08,s+.02),o.gain.exponentialRampToValueAtTime(1e-4,s+.5),a.connect(o).connect(t),a.start(s),a.stop(s+.55)})}function St(e,t){let n=e.currentTime,r=e.createBufferSource(),i=e.createBuffer(1,e.sampleRate*.35,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++){let t=Math.sin(e/a.length*Math.PI);a[e]=(Math.random()*2-1)*t}r.buffer=i;let o=e.createBiquadFilter();o.type=`highpass`,o.frequency.value=3e3;let s=e.createGain();s.gain.value=.12,r.connect(o).connect(s).connect(t),r.start(n)}function Ct(e,t){let n=e.currentTime,r=e.createOscillator(),i=e.createGain();r.type=`sine`,r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(50,n+.12),i.gain.setValueAtTime(.2,n),i.gain.exponentialRampToValueAtTime(1e-4,n+.15),r.connect(i).connect(t),r.start(n),r.stop(n+.18)}function wt(e,t){if(V)return;let n=e.createBufferSource(),r=e.createBuffer(1,e.sampleRate*2,e.sampleRate),i=r.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=(Math.random()*2-1)*.5;n.buffer=r,n.loop=!0;let a=e.createBiquadFilter();a.type=`bandpass`,a.frequency.value=220,a.Q.value=.8;let o=e.createGain();o.gain.value=0,o.gain.linearRampToValueAtTime(.012,e.currentTime+1.2),n.connect(a).connect(o).connect(t),n.start(),V={stop:()=>{o.gain.cancelScheduledValues(e.currentTime),o.gain.setValueAtTime(o.gain.value,e.currentTime),o.gain.linearRampToValueAtTime(0,e.currentTime+.4),n.stop(e.currentTime+.5),V=null}}}function H(e){if(!R.enabled)return;let t=gt();if(t&&B)switch(e){case`cash`:bt(t,B);break;case`bell`:xt(t,B);break;case`paper`:St(t,B);break;case`stamp`:Ct(t,B);break;case`click`:yt(t,B,t.currentTime);break;case`flap`:yt(t,B,t.currentTime,.03);break;case`chime`:vt(t,B);break;case`mech`:_t(t,B)}}function Tt(e,t=!1){if(R.enabled=e,e){let e=gt();e&&B&&(wt(e,B),t&&vt(e,B))}else V?.stop()}var Et=[{n:`01`,href:`/`,label:`Главный прилавок`},{n:`02`,href:`/vitrina`,label:`Витрина`},{n:`03`,href:`/istoriya`,label:`История и цеха`},{n:`04`,href:`/kniga-otzyvov`,label:`Книга отзывов`},{n:`05`,href:`/kontakty`,label:`Контакты`},{n:`06`,href:`/kabinet`,label:`Личный кабинет`}],U=null,Dt=null,Ot=!1;function kt(){let e=typeof window<`u`&&(sessionStorage.getItem(`tesamye:admin:auth`)===`granted`||localStorage.getItem(`tesamye:admin_user`))?[...Et,{n:`07`,href:`/admin`,label:`★ Кабинет директора`}]:Et,t=v(`div`,{class:`fullmenu`,id:`fullmenu`,role:`dialog`,"aria-modal":`true`,"aria-label":`Меню`});return t.innerHTML=`
    <div class="fullmenu-curtain" aria-hidden="true"></div>
    <div class="fullmenu-inner">
      <nav class="fullmenu-nav" aria-label="Полное меню">
        ${e.map(e=>`
          <a class="fullmenu-link" href="${e.href}">
            <span class="fullmenu-n" aria-hidden="true">${e.n}</span>
            <span class="fullmenu-mask" aria-hidden="true"><span class="fullmenu-label">${e.label}</span></span>
            <span class="visually-hidden">${e.label}</span>
          </a>`).join(``)}
      </nav>
      <div class="fullmenu-seal" aria-hidden="true">${dt(220)}</div>
    </div>
    <button class="fullmenu-close" type="button" aria-label="Закрыть меню">✕</button>
  `,t.addEventListener(`click`,e=>{e.target.closest(`.fullmenu-close`)&&jt()}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&jt()}),t.querySelectorAll(`.fullmenu-link`).forEach(e=>{e.addEventListener(`click`,()=>jt())}),t}function At(e){let t=e??!Ot;t!==Ot&&(Ot=t,U||(U=kt(),document.body.appendChild(U)),U.classList.toggle(`is-open`,t),document.body.classList.toggle(`menu-open`,t),g(`.burger`)?.setAttribute(`aria-expanded`,String(t)),t?(Dt=re(U),g(`.fullmenu-close`,U)?.focus(),Mt()):(Dt?.(),Dt=null,g(`.burger`)?.focus()))}function jt(){At(!1)}function Mt(){if(!U)return;let e=U.querySelectorAll(`.fullmenu-label`);if(y()){i.set(e,{yPercent:0});return}i.fromTo(U.querySelector(`.fullmenu-curtain`),{clipPath:`polygon(0 0, 0 0, 0 100%, 0 100%)`},{clipPath:`polygon(0 0, 100% 0, 100% 100%, 0 100%)`,duration:.6,ease:`power3.inOut`}),i.fromTo(e,{yPercent:110},{yPercent:0,duration:.8,stagger:.07,ease:`power4.out`,delay:.25})}function Nt(){let e=v(`header`,{class:`site-header`,role:`banner`});return e.innerHTML=`
    <a class="header-logo" href="/" aria-label="${E.name} — на главную">
      <span class="header-seal" aria-hidden="true">${dt(44)}</span>
      <span class="header-word" aria-hidden="true">${ft()}</span>
      <span class="visually-hidden">${E.nameUpper}. ${E.slogan}</span>
    </a>
    <nav class="header-nav" aria-label="Основная навигация">
      <a href="/vitrina">Витрина</a>
      <a href="/istoriya">История</a>
      <a href="/kniga-otzyvov">Книга отзывов</a>
      <a href="/kontakty">Контакты</a>
      <a href="/kabinet" class="header-nav-kabinet" title="Личный кабинет покупателя">★ Кабинет</a>
    </nav>
    <div class="header-actions">
      <button class="sound-toggle" type="button" aria-pressed="${R.enabled}" aria-label="Звук: выключен (репродуктор)">
        <span class="speaker-body" aria-hidden="true">${mt(26)}</span>
      </button>
      <button class="cart-toggle" type="button" aria-label="Открыть авоську" aria-haspopup="dialog">
        <span class="cart-icon" aria-hidden="true">${pt(28)}</span>
        <span class="cart-count" aria-hidden="true">0</span>
        <span class="visually-hidden" aria-live="polite" data-cart-live>В авоське пусто</span>
      </button>
      <button class="burger" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="fullmenu">
        <span class="burger-bars" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="burger-text" aria-hidden="true">Меню</span>
      </button>
    </div>
  `,e}function Pt(){let e=g(`.site-header`);if(!e)return;let t=g(`.cart-count`,e),n=g(`[data-cart-live]`,e),r=0;lt.subscribe(e=>{let i=e.items.reduce((e,t)=>e+t.qty,0);t&&(t.textContent=String(i)),n&&(n.textContent=i===0?`В авоське пусто`:`В авоське ${i} шт. ${ve.inStock.toLowerCase()}`),i>r&&r!==0&&t?.animate([{transform:`scale(1)`},{transform:`scale(1.35)`},{transform:`scale(0.95)`},{transform:`scale(1)`}],{duration:380,easing:`cubic-bezier(.34,1.56,.64,1)`}),r=i});let i=g(`.sound-toggle`,e);i?.addEventListener(`click`,()=>{let e=i.getAttribute(`aria-pressed`)!==`true`;Tt(e,!0),i.setAttribute(`aria-pressed`,String(e)),i.setAttribute(`aria-label`,e?`Звук: включён (репродуктор «Маяк»)`:`Звук: выключен (репродуктор)`),i.setAttribute(`title`,e?`Радиоточка ТС-1975: эфир включён`:`Включить радиовещание`),i.classList.toggle(`is-on`,e)}),i?.classList.toggle(`is-on`,R.enabled),g(`.cart-toggle`,e)?.addEventListener(`click`,()=>{window.dispatchEvent(new CustomEvent(`cart:open`))});let a=g(`.burger`,e);a?.addEventListener(`click`,()=>{let e=a.getAttribute(`aria-expanded`)===`true`;a.setAttribute(`aria-expanded`,String(!e)),At(!e)});let o=()=>{let t=location.pathname;e.querySelectorAll(`.header-nav a`).forEach(e=>{let n=e.getAttribute(`href`)===t;e.classList.toggle(`is-active`,n),n?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})};o(),window.addEventListener(`route:after`,o)}function Ft(){let e=v(`footer`,{class:`site-footer`,role:`contentinfo`}),t=`ЗАХОДИТЕ ЕЩЁ!`;return e.innerHTML=`
    <div class="footer-inner">
      <p class="footer-comeback" data-comeback aria-label="${t}">
        ${t.split(``).map(e=>e===` `?`<span class="fb-space" aria-hidden="true"> </span>`:`<span class="fb-letter" aria-hidden="true">${e}</span>`).join(``)}
      </p>
      <div class="footer-cols">
        <div>
          <h2 class="footer-h">${E.legal}</h2>
          <p>${E.gost}<br>${ce.city}, ${ce.street}</p>
        </div>
        <div>
          <h2 class="footer-h">Часы работы</h2>
          <p>Пн–Пт ${D.weekday.open}:00–${D.weekday.close}:00<br>
             Сб–Вс ${D.weekend.open}:00–${D.weekend.close}:00<br>
             Обед ${D.lunch.from}:00–${D.lunch.to}:00<br>
             Санитарный день — последний четверг</p>
        </div>
        <div>
          <h2 class="footer-h">Отделы</h2>
          <p>
            <a href="/vitrina">Витрина</a><br>
            <a href="/istoriya">История</a><br>
            <a href="/kniga-otzyvov">Книга отзывов</a><br>
            <a href="/kontakty">Контакты</a>
          </p>
        </div>
      </div>
      <p class="footer-copy">${E.copyright}</p>
      <p class="footer-giant" aria-hidden="true">${E.nameUpper}</p>
    </div>
  `,e}function It(){if(b()||y())return;let e=v(`div`,{class:`star-cursor`,"aria-hidden":`true`});e.innerHTML=`
    <svg viewBox="0 0 64 64" class="star-cursor-svg">
      <path d="${ut(32,32,26,11)}" fill="${O.kumach}" stroke="${O.cream}" stroke-width="2"/>
    </svg>
    <span class="star-cursor-label">+ В АВОСЬКУ</span>
  `,document.body.appendChild(e),document.documentElement.classList.add(`has-custom-cursor`);let t=i.quickTo(e,`x`,{duration:.6,ease:`power3.out`}),n=i.quickTo(e,`y`,{duration:.6,ease:`power3.out`}),r=t=>{i.to(e,{scale:t,duration:.3,ease:`power2.out`,overwrite:`auto`})},a=!1;window.addEventListener(`mousemove`,r=>{if(!a){a=!0,i.set(e,{x:r.clientX,y:r.clientY,opacity:1}),t(r.clientX),n(r.clientY);return}t(r.clientX),n(r.clientY)},{passive:!0}),document.addEventListener(`mouseleave`,()=>{i.to(e,{opacity:0,duration:.2})}),document.addEventListener(`mouseenter`,()=>{i.to(e,{opacity:1,duration:.2})}),document.addEventListener(`mouseover`,t=>{let n=t.target,i=n.closest(`.product-card`),a=n.closest(`a, button`),o=n.closest(`p, li, td, th, .prose`);e.classList.toggle(`is-card`,!!i),e.classList.toggle(`is-link`,!!a&&!i),e.classList.toggle(`is-text`,!!o&&!a&&!i),r(i?1.6:a?1.35:o?.45:1)},{passive:!0})}var W=O;function Lt(e=200,t=!0){return`
  <svg viewBox="0 0 200 200" width="${e}" height="${e}" role="img" aria-label="Авоська">
    ${t?`<path d="M70 44 Q70 12 100 12 Q130 12 130 44" stroke="${W.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>`:``}
    <path d="M48 60 L152 60 L138 178 Q136 190 122 190 L78 190 Q64 190 62 178 Z" fill="none" stroke="${W.ink}" stroke-width="6"/>
    <g stroke="${W.kumach}" stroke-width="3" opacity=".85">
      <path d="M56 80 L144 80 M58 100 L142 100 M60 120 L140 120 M62 140 L138 140 M64 160 L136 160 M66 180 L134 180"/>
      <path d="M76 60 L70 190 M100 60 L100 190 M124 60 L130 190"/>
    </g>
    <circle cx="100" cy="120" r="26" fill="${W.gold}" opacity=".9"/>
  </svg>`}function Rt(e=320){return`
  <svg viewBox="0 0 320 260" width="${e}" height="${e*.8125}" role="img" aria-label="Коробка пирожных с бечёвкой">
    <g id="box-body">
      <path d="M40 90 L280 90 L262 240 L58 240 Z" fill="${W.paper}" stroke="${W.ink}" stroke-width="5"/>
      <path d="M40 90 L280 90 L262 240 L58 240 Z" fill="${W.kumach}" opacity=".08"/>
      <rect x="96" y="130" width="128" height="60" rx="4" fill="none" stroke="${W.kumach}" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="160" y="168" text-anchor="middle" font-family="Oswald, sans-serif" font-weight="700" font-size="26" fill="${W.kumach}">ТЕ САМЫЕ</text>
    </g>
    <g id="box-lid">
      <path d="M28 56 L292 56 L286 92 L34 92 Z" fill="${W.kumach}" stroke="${W.ink}" stroke-width="5"/>
      <path d="M28 56 L292 56" stroke="${W.gold}" stroke-width="6"/>
    </g>
    <g id="box-string">
      <path d="M160 20 L160 240" stroke="${W.choco}" stroke-width="4"/>
      <path d="M96 20 L224 20" stroke="${W.choco}" stroke-width="4"/>
      <path id="bow" d="M160 30 Q120 4 112 26 Q106 46 160 36 Q214 46 208 26 Q200 4 160 30" fill="none" stroke="${W.choco}" stroke-width="4"/>
    </g>
  </svg>`}function zt(e=120){return`
  <svg viewBox="0 0 200 200" width="${e}" height="${e}" role="img" aria-label="Репродуктор">
    <rect x="88" y="120" width="24" height="60" fill="${W.ink}"/>
    <rect x="60" y="176" width="80" height="12" rx="4" fill="${W.ink}"/>
    <path d="M52 70 L100 40 L148 70 L148 128 L100 158 L52 128 Z" fill="${W.mint}" stroke="${W.ink}" stroke-width="5"/>
    <circle cx="100" cy="99" r="30" fill="${W.paper}" stroke="${W.ink}" stroke-width="4"/>
    <g class="spk-dots" fill="${W.ink}">
      <circle cx="100" cy="86" r="3"/><circle cx="112" cy="94" r="3"/><circle cx="112" cy="108" r="3"/>
      <circle cx="100" cy="116" r="3"/><circle cx="88" cy="108" r="3"/><circle cx="88" cy="94" r="3"/><circle cx="100" cy="100" r="4"/>
    </g>
    <g class="spk-waves" stroke="${W.kumach}" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M160 84 Q172 99 160 114"/>
      <path d="M172 74 Q190 99 172 124"/>
      <path d="M28 84 Q16 99 28 114"/>
      <path d="M16 74 Q-2 99 16 124" transform="translate(12 0)"/>
    </g>
  </svg>`}function Bt(e=0,t=!1){let n=[W.ink,W.navy,W.choco,W.ink,W.navy,W.choco,W.ink],r=t?W.kumach:n[e%n.length],i=e%3;return`
  <g fill="${r}">
    <circle cx="30" cy="18" r="13"/>
    ${i===0?`<rect x="14" y="0" width="32" height="6" rx="3"/>`:``}
    ${i===1?`<path d="M16 8 L44 8 L38 0 L22 0 Z"/>`:``}
    <path d="M10 96 L18 40 Q19 34 25 34 L35 34 Q41 34 42 40 L50 96 Z"/>
  </g>`}function Vt(e=80,t=8,n=W.ink){let r=[];for(let e=0;e<t;e++){let n=e*360/t;r.push(`<rect x="46" y="0" width="8" height="16" transform="rotate(${n} 50 50)"/>`)}return`
  <svg viewBox="0 0 100 100" width="${e}" height="${e}" aria-hidden="true" fill="${n}">
    <circle cx="50" cy="50" r="34" fill="none" stroke="${n}" stroke-width="12"/>
    ${r.join(``)}
    <circle cx="50" cy="50" r="10" fill="${W.cream}"/>
  </svg>`}function Ht(){return`
    --tile-bg: ${W.mint};
    background-color: ${W.mint};
    background-image:
      linear-gradient(rgba(20,18,16,.14) 2px, transparent 2px),
      linear-gradient(90deg, rgba(20,18,16,.14) 2px, transparent 2px),
      linear-gradient(rgba(250,244,228,.35) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250,244,228,.35) 1px, transparent 1px);
    background-size: 64px 64px, 64px 64px, 16px 16px, 16px 16px;
  `}function Ut(){return`
  <svg class="metro-map" viewBox="0 0 640 400" role="img" aria-label="Схема проезда: три остановки до прилавка треста">
    <rect x="0" y="0" width="640" height="400" fill="${W.cream}"/>
    <g stroke="${W.ink}" stroke-width="2" opacity=".12">
      ${Array.from({length:7},(e,t)=>`<line x1="0" y1="${t*57}" x2="640" y2="${t*57}"/>`).join(``)}
    </g>
    <!-- красная линия -->
    <path d="M60 300 L240 300 L300 240 L460 240" stroke="${W.kumach}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- чёрная линия -->
    <path d="M120 80 L120 160 L200 240 L240 240" stroke="${W.ink}" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- мятная линия -->
    <path d="M520 60 L520 140 L460 200 L460 240" stroke="#4E9C7C" stroke-width="8" fill="none" stroke-linecap="round"/>
    <g font-family="'IBM Plex Mono', monospace" font-size="14" fill="${W.ink}">
      <circle cx="60" cy="300" r="9" fill="${W.paper}" stroke="${W.ink}" stroke-width="4"/>
      <text x="60" y="334" text-anchor="middle">Проспект</text>
      <circle cx="240" cy="300" r="9" fill="${W.paper}" stroke="${W.ink}" stroke-width="4"/>
      <text x="240" y="334" text-anchor="middle">Почта</text>
      <circle cx="120" cy="80" r="9" fill="${W.paper}" stroke="${W.ink}" stroke-width="4"/>
      <text x="120" y="64" text-anchor="middle">Вокзал</text>
      <circle cx="520" cy="60" r="9" fill="${W.paper}" stroke="${W.ink}" stroke-width="4"/>
      <text x="520" y="44" text-anchor="middle">Парк</text>
      <circle cx="460" cy="240" r="14" fill="${W.kumach}" stroke="${W.paper}" stroke-width="5"/>
      <text x="460" y="212" text-anchor="middle" font-weight="700" fill="${W.kumach}">ТЕ САМЫЕ</text>
      <path d="M460 254 l0 30" stroke="${W.kumach}" stroke-width="4" stroke-dasharray="4 4"/>
      <text x="460" y="304" text-anchor="middle" font-size="12">вход со двора</text>
    </g>
    <g transform="translate(560 330)">
      <circle r="26" fill="none" stroke="${W.ink}" stroke-width="3"/>
      <path d="M0 -18 L5 -5 L0 -8 L-5 -5 Z" fill="${W.kumach}"/>
      <text y="44" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="12" fill="${W.ink}">С</text>
    </g>
  </svg>`}function Wt(e=90,t=W.kumach){return`
  <svg class="soviet-quality-mark" viewBox="0 0 200 200" width="${e}" height="${e}" role="img" aria-label="Государственный знак качества СССР">
    <path class="qm-frame" d="M 28 20 L 172 20 L 194 95 L 100 188 L 6 95 Z" fill="${W.paper}" stroke="${t}" stroke-width="7" stroke-linejoin="round"/>
    <line x1="36" y1="52" x2="164" y2="52" stroke="${t}" stroke-width="5"/>
    <text x="103" y="44" text-anchor="middle" font-family="'Russo One', 'Oswald', sans-serif" font-weight="700" font-size="20" fill="${t}" letter-spacing="4">СССР</text>
    <line x1="100" y1="52" x2="100" y2="168" stroke="${t}" stroke-width="7" stroke-linecap="square"/>
    <path d="M 54 142 L 100 96 L 146 142" stroke="${t}" stroke-width="7" fill="none" stroke-linejoin="miter"/>
    <line x1="42" y1="142" x2="66" y2="142" stroke="${t}" stroke-width="7"/>
    <line x1="134" y1="142" x2="158" y2="142" stroke="${t}" stroke-width="7"/>
  </svg>`}function Gt(e=110){return`
  <svg class="pastry-steam" viewBox="0 0 100 70" width="${e}" height="${e*.7}" aria-hidden="true">
    <path class="steam-wisp steam-wisp-1" d="M30 65 Q18 45 35 28 T28 6" fill="none" stroke="rgba(200, 16, 46, 0.4)" stroke-width="3.5" stroke-linecap="round"/>
    <path class="steam-wisp steam-wisp-2" d="M50 68 Q68 46 48 28 T56 6" fill="none" stroke="rgba(217, 164, 65, 0.55)" stroke-width="4.5" stroke-linecap="round"/>
    <path class="steam-wisp steam-wisp-3" d="M70 66 Q56 46 72 26 T68 8" fill="none" stroke="rgba(200, 16, 46, 0.35)" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`}var Kt=`tesamye:visited`,qt=7;function Jt(){let e=document.createElement(`div`);return e.className=`preloader`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-label`,`Загрузка: вы в очереди`),e.innerHTML=`
    <div class="pre-bg" aria-hidden="true">
      <div class="pre-bg-stripes"></div>
      <div class="pre-bg-vignette"></div>
      <div class="pre-dust-canvas-wrap"><canvas class="pre-dust-canvas" data-pre-dust></canvas></div>
    </div>

    <!-- 3D Советский киоск / касса сверху -->
    <div class="pre-kassa-sign" aria-hidden="true">
      <div class="pre-kassa-badge">
        <span class="pre-kassa-star">★</span>
        <span class="pre-kassa-title">ГЛАВПИРОЖТОРГ · КАССА №3</span>
        <span class="pre-kassa-star">★</span>
      </div>
      <div class="pre-kassa-lamp"></div>
    </div>

    <!-- Интерактивная 3D карточка-талон -->
    <div class="pre-scene">
      <div class="pre-ticket-card" data-ticket-card>
        <div class="pre-ticket-notch pre-ticket-notch--left"></div>
        <div class="pre-ticket-notch pre-ticket-notch--right"></div>
        <div class="pre-ticket-perforations"></div>
        <div class="pre-ticket-header">
          <span class="pre-ticket-org">ТРЕСТ «ТЕ САМЫЕ»</span>
          <span class="pre-ticket-seria">СЕРИЯ А-85</span>
        </div>
        <p class="pre-ticket-text">ВЫ В ОЧЕРЕДИ №</p>
        <div class="pre-ticket-num-wrap">
          <p class="pre-ticket-num" data-ticket-num>07</p>
          <div class="pre-ticket-stamp" data-ticket-stamp aria-hidden="true">ОТПУЩЕНО</div>
        </div>
        <div class="pre-ticket-meta">
          <span class="pre-ticket-fine">ТАЛОН № ${w()}</span>
          <span class="pre-ticket-fine">ГОСТ ТС-001</span>
          <span class="pre-ticket-fine">ЦЕНА 22 КОП.</span>
        </div>
      </div>
    </div>

    <!-- Электронно-механический счётчик очереди -->
    <div class="pre-counter-box" aria-live="polite">
      <div class="pre-counter-label">ПЕРЕД ВАМИ:</div>
      <div class="pre-counter-digits">
        <div class="pre-counter-digit" data-counter-digit>7</div>
        <div class="pre-counter-sub">ЧЕЛОВЕК</div>
      </div>
      <div class="pre-counter-lamp" data-counter-lamp></div>
    </div>

    <!-- 3D шеренга персонажей очереди -->
    <div class="pre-queue-wrap" aria-hidden="true">
      <div class="pre-queue-track" data-queue-track>
        <svg viewBox="0 0 578 120" class="pre-queue-svg">
          ${Array.from({length:qt},(e,t)=>`<g class="pre-fig ${t===6?`pre-fig--you`:``}" data-fig-idx="${t}" transform="translate(${t*74+30} 10)">
              <ellipse cx="30" cy="100" rx="22" ry="6" class="pre-fig-shadow" fill="rgba(20,18,16,0.18)" />
              ${Bt(t,t===6)}
              ${t===6?`<text x="30" y="-4" text-anchor="middle" font-family="'Russo One', sans-serif" font-size="12" fill="var(--kumach)" class="pre-you-badge">ЭТО ВЫ ★</text>`:``}
            </g>`).join(``)}
        </svg>
      </div>
    </div>

    <!-- Финальный баннер «ВАША ОЧЕРЕДЬ!» с советскими лучами -->
    <div class="pre-final-banner" data-final-banner aria-hidden="true">
      <div class="pre-final-rays"></div>
      <div class="pre-final-plate">
        <div class="pre-final-sub">ПРИГОТОВЬТЕСЬ К ВЫБОРУ</div>
        <div class="pre-final-title">ВАША ОЧЕРЕДЬ!</div>
        <div class="pre-final-star">★ ★ ★</div>
      </div>
    </div>

    <div class="pre-skip">
      <span class="pre-skip-key">КЛИКНИТЕ</span> или <span class="pre-skip-key">ПРОБЕЛ</span>, чтобы пропустить
    </div>
  `,e}async function Yt(){if(y()||!A.preloader)return;let e=Jt();document.body.appendChild(e),document.body.classList.add(`is-preloading`);let t=sessionStorage.getItem(Kt)===`1`;try{sessionStorage.setItem(Kt,`1`)}catch{}try{await Promise.race([document.fonts.ready,new Promise(e=>setTimeout(e,1200))])}catch{}let n=(t?k.preloader.short:k.preloader.full)*1e3,r=g(`[data-ticket-card]`,e),a=g(`[data-ticket-stamp]`,e),o=g(`[data-counter-digit]`,e),s=g(`[data-counter-lamp]`,e),c=g(`.pre-counter-box`,e),l=g(`.pre-kassa-sign`,e),u=g(`[data-queue-track]`,e),d=Array.from(e.querySelectorAll(`.pre-fig`)),f=g(`[data-final-banner]`,e),p=g(`.pre-skip`,e),m=g(`[data-pre-dust]`,e),h=null;if(m){let e=m.getContext(`2d`);if(e){let t=m.width=window.innerWidth,n=m.height=window.innerHeight,r=()=>{t=m.width=window.innerWidth,n=m.height=window.innerHeight};window.addEventListener(`resize`,r);let i=Array.from({length:35},()=>({x:Math.random()*t,y:Math.random()*n,z:.5+Math.random()*1.5,r:1+Math.random()*2.5,vx:(Math.random()-.5)*.4,vy:-.2-Math.random()*.5,alpha:.2+Math.random()*.6,isStar:Math.random()>.7})),a,o=()=>{e.clearRect(0,0,t,n),i.forEach(r=>{r.x+=r.vx*r.z,r.y+=r.vy*r.z,r.y<-10&&(r.y=n+10,r.x=Math.random()*t),r.x<-10&&(r.x=t+10),r.x>t+10&&(r.x=-10),e.fillStyle=r.isStar?`rgba(217, 164, 65, ${r.alpha})`:`rgba(200, 16, 46, ${r.alpha*.5})`,e.beginPath(),e.arc(r.x,r.y,r.r*r.z,0,Math.PI*2),e.fill()}),a=requestAnimationFrame(o)};o(),h=()=>{cancelAnimationFrame(a),window.removeEventListener(`resize`,r)}}}let _=null,v=!1,ee=e=>{if(v)return;let t=window.innerWidth/2,n=window.innerHeight/2,a=(e.clientX-t)/t,o=(e.clientY-n)/n;i.to(r,{rotationY:a*16,rotationX:-o*16,transformPerspective:1e3,duration:.35,ease:`power2.out`})};window.addEventListener(`mousemove`,ee),_=()=>window.removeEventListener(`mousemove`,ee);let b=!1,x=()=>{b||(b=!0,S.progress(1))},te=e=>{e.key!==`Tab`&&x()};e.addEventListener(`click`,x),window.addEventListener(`keydown`,te);let S=i.timeline({onComplete:()=>{e.removeEventListener(`click`,x),window.removeEventListener(`keydown`,te),_?.(),h?.(),document.body.classList.remove(`is-preloading`),i.to(e,{clipPath:`polygon(-15% 0%, 115% 0%, 135% -35%, 5% -35%)`,duration:.55,ease:`power3.inOut`,onComplete:()=>e.remove()}),window.dispatchEvent(new Event(`preloader:done`))}});if(t){S.fromTo(r,{opacity:0,scale:.6,rotationX:30,z:-100},{opacity:1,scale:1,rotationX:0,z:0,duration:.4,ease:`back.out(1.4)`},0).set(o,{textContent:`0`},.25).fromTo(f,{opacity:0,scale:.7,z:-50},{opacity:1,scale:1,z:20,duration:.35,ease:k.easings.stamp},.3).to(f,{opacity:0,scale:1.05,duration:.2},.8);return}i.set(f,{opacity:0,scale:.5,pointerEvents:`none`}),i.set(l,{y:-80,opacity:0}),i.set(c,{y:30,opacity:0}),i.set(u,{opacity:0,y:30}),i.set(p,{opacity:0,y:15}),i.set(a,{opacity:0,scale:2.2,rotation:-25}),S.to(l,{y:0,opacity:1,duration:.6,ease:`power3.out`},.05).fromTo(r,{opacity:0,y:60,rotationX:45,rotationY:-15,scale:.65,z:-200},{opacity:1,y:0,rotationX:0,rotationY:-2,scale:1,z:0,duration:.75,ease:`power4.out`},.15).to(c,{y:0,opacity:1,duration:.45,ease:`back.out(1.2)`},.35).to(u,{opacity:1,y:0,duration:.5,ease:`power2.out`},.45).to(p,{opacity:1,y:0,duration:.4},.6);let ne=Math.max(n/1e3,3.2),re=(ne-1.6)/qt;d.forEach((e,t)=>{let n=.7+t*re,r=6-t,a=t===6;S.to(d.slice(t),{x:`-=74`,duration:.34,ease:`power2.out`},n),S.to(s,{opacity:1,duration:.08,ease:`power1.in`},n).to(s,{opacity:.35,duration:.2},n+.1),a||S.to(e,{opacity:0,scale:.7,y:-15,duration:.28,ease:`power2.in`},n),S.add(()=>{o.textContent=String(r),i.fromTo(o,{scale:1.35,color:`#FFDE59`},{scale:1,color:`#FFDE59`,duration:.22,ease:`power2.out`}),H(`flap`)},n+.05)});let C=g(`.pre-scene`,e),w=ne-1.25;S.add(()=>{v=!0,H(`stamp`)},w).to(a,{opacity:.95,scale:1,rotation:-14,duration:.28,ease:`back.out(2)`},w).to(r,{y:8,duration:.08,yoyo:!0,repeat:1},w+.04).to(C,{opacity:0,scale:.75,y:-40,duration:.22,ease:`power2.in`},w+.3).set(C,{visibility:`hidden`},w+.52).to(c,{opacity:0,scale:.8,duration:.2},w+.2).to(u,{opacity:0,scale:.9,duration:.25},w+.3).to(p,{opacity:0,duration:.2},w).to(f,{opacity:1,scale:1,duration:.45,ease:`back.out(1.5)`},w+.5).to(f,{opacity:0,scale:1.08,duration:.25},ne-.2)}function Xt(){if(y())return;let e=v(`div`,{class:`fx-layer`,"aria-hidden":`true`});e.innerHTML=`
    ${A.grain?`<div class="fx-grain"></div>`:``}
    ${A.filmDust?`<div class="fx-flicker"></div>`:``}
    ${A.filmDust?`<div class="fx-dust"></div>`:``}
    ${A.vignette?`<div class="fx-vignette"></div>`:``}
  `,document.body.appendChild(e);let t=e.querySelector(`.fx-grain`);if(t){let e=i.to(t,{xPercent:-12.5,yPercent:-12.5,duration:.9,ease:`steps(8)`,repeat:-1});document.addEventListener(`visibilitychange`,()=>{document.hidden?e.pause():e.resume()})}let n=e.querySelector(`.fx-flicker`);if(n){let e=i.to(n,{opacity:.03,duration:1/3,repeat:-1,yoyo:!0,ease:`sine.inOut`});document.addEventListener(`visibilitychange`,()=>{document.hidden?e.pause():e.resume()})}let r=e.querySelector(`.fx-dust`);if(r)for(let e=0;e<7;e++){let e=v(`i`,{class:`fx-dust-mote`}),t=2+Math.round(Math.random()*3);i.set(e,{width:t,height:t,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}),r.appendChild(e);let n=i.to(e,{y:`+=${30+Math.random()*60}`,x:`+=${(Math.random()-.5)*50}`,opacity:Math.random()*.25+.05,duration:8+Math.random()*10,repeat:-1,yoyo:!0,ease:`sine.inOut`,delay:Math.random()*4});document.addEventListener(`visibilitychange`,()=>{document.hidden?n.pause():n.resume()})}}var G=O,K=`#D9A05B`,q=`#B57B3C`,J=`#F6E7C8`,Zt=`#E9A7AE`,Y=G.choco,X=`#5C3A22`,Z=`#E08A2E`,Qt=`
  <defs>
    <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="${G.ink}" stroke-width="2" opacity="0.18"/>
    </pattern>
  </defs>`,Q={leningradskoe:{title:`Ленинградское`,body:`
      <g id="dough">
        <rect x="28" y="98" width="144" height="16" rx="2" fill="${K}"/>
        <rect x="28" y="113" width="144" height="4" fill="${G.kumach}" opacity=".9"/>
        <rect x="28" y="116" width="144" height="18" rx="2" fill="${K}"/>
        <rect x="28" y="116" width="144" height="18" rx="2" fill="url(#hatch)"/>
      </g>
      <g id="cream">
        <rect x="30" y="80" width="140" height="20" rx="2" fill="${X}"/>
        <path d="M38 90 Q54 84 70 90 T102 90 T134 90 T162 90" stroke="${J}" stroke-width="2" fill="none" opacity=".8"/>
      </g>
      <g id="glaze">
        <rect x="26" y="62" width="148" height="20" rx="2" fill="${Y}"/>
        <path d="M32 72 Q46 66 60 72 T88 72 T116 72 T144 72 T168 72" stroke="${X}" stroke-width="3" fill="none"/>
        <circle cx="38" cy="68" r="2.5" fill="${G.gold}"/>
        <circle cx="64" cy="69" r="2" fill="${G.gold}"/>
        <circle cx="92" cy="68" r="2.5" fill="${G.gold}"/>
        <circle cx="126" cy="69" r="2" fill="${G.gold}"/>
        <circle cx="158" cy="68" r="2.5" fill="${G.gold}"/>
        <ellipse cx="100" cy="58" rx="12" ry="6" fill="#422513"/>
        <circle cx="100" cy="57" r="4" fill="${X}"/>
      </g>
      <path d="M36 137 L164 137" stroke="${G.ink}" stroke-width="3" opacity=".25"/>`},kartoshka:{title:`Картошка`,body:`
      <g id="core">
        <ellipse cx="100" cy="96" rx="62" ry="38" fill="${q}"/>
        <ellipse cx="100" cy="96" rx="62" ry="38" fill="url(#hatch)"/>
      </g>
      <g id="mass">
        <ellipse cx="100" cy="90" rx="62" ry="38" fill="${Y}"/>
      </g>
      <g id="cocoa">
        <ellipse cx="82" cy="74" rx="16" ry="9" fill="${X}" opacity=".9"/>
        <circle cx="128" cy="80" r="4" fill="${J}"/>
        <circle cx="112" cy="70" r="3" fill="${J}"/>
        <circle cx="140" cy="92" r="3" fill="${J}"/>
      </g>
      <path d="M44 132 L156 132" stroke="${G.ink}" stroke-width="3" opacity=".25"/>`},korzinochka:{title:`Корзиночка`,body:`
      <g id="crust">
        <path d="M46 78 L154 78 L138 132 L62 132 Z" fill="${K}"/>
        <path d="M46 78 L154 78 L138 132 L62 132 Z" fill="url(#hatch)" opacity=".5"/>
        <path d="M58 92 L142 92 M64 106 L136 106" stroke="${q}" stroke-width="4"/>
      </g>
      <g id="jam">
        <circle cx="100" cy="76" r="12" fill="${G.kumach}"/>
      </g>
      <g id="cream">
        <path d="M60 78 Q66 52 84 56 Q92 34 110 44 Q130 32 138 54 Q152 56 148 78 Z" fill="${Zt}"/>
        <path d="M78 74 Q84 58 100 58 Q118 56 124 72" stroke="${G.paper}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
      <g id="berry">
        <circle cx="104" cy="34" r="8" fill="${G.kumach}"/>
        <path d="M104 26 L108 20" stroke="${G.mint}" stroke-width="3" stroke-linecap="round"/>
      </g>`},napoleon:{title:`Наполеон`,body:`
      <g id="dough">
        <path d="M100 40 L172 118 L28 118 Z" fill="${K}"/>
        <path d="M100 40 L172 118 L28 118 Z" fill="url(#hatch)" opacity=".4"/>
      </g>
      <g id="cream">
        <rect x="46" y="76" width="108" height="10" rx="5" fill="${J}"/>
        <rect x="58" y="94" width="84" height="10" rx="5" fill="${J}"/>
        <rect x="70" y="58" width="60" height="9" rx="4.5" fill="${J}"/>
      </g>
      <g id="crumb">
        <circle cx="88" cy="50" r="4" fill="${q}"/>
        <circle cx="112" cy="46" r="3" fill="${q}"/>
        <circle cx="100" cy="56" r="3" fill="${J}"/>
        <circle cx="60" cy="112" r="3" fill="${q}"/>
        <circle cx="142" cy="112" r="3" fill="${q}"/>
      </g>
      <path d="M34 128 L166 128" stroke="${G.ink}" stroke-width="3" opacity=".25"/>`},trubochka:{title:`Трубочка`,body:`
      <g id="wafer" transform="rotate(-18 100 90)">
        <path d="M40 96 L40 76 L142 62 L142 108 Z" fill="${K}"/>
        <path d="M52 92 L52 78 M68 90 L68 76 M84 88 L84 74 M100 86 L100 72 M116 84 L116 70 M132 82 L132 68" stroke="${q}" stroke-width="3"/>
      </g>
      <g id="cream">
        <path d="M22 96 Q10 84 22 74 Q34 66 42 78 Z" fill="${J}" transform="rotate(-18 32 86)"/>
        <path d="M160 84 Q178 78 180 92 Q180 106 162 102 Z" fill="${J}" transform="rotate(-18 170 92)"/>
      </g>
      <path d="M50 138 L150 138" stroke="${G.ink}" stroke-width="3" opacity=".25"/>`},"ptichye-moloko":{title:`Птичье молоко`,body:`
      <g id="sponge">
        <rect x="44" y="104" width="112" height="22" rx="4" fill="${K}"/>
        <rect x="44" y="104" width="112" height="22" rx="4" fill="url(#hatch)" opacity=".5"/>
      </g>
      <g id="souffle">
        <rect x="44" y="62" width="112" height="44" rx="6" fill="${J}"/>
      </g>
      <g id="glaze">
        <path d="M44 68 Q44 56 56 56 L144 56 Q156 56 156 68 L156 74 Q140 82 126 74 Q112 84 98 74 Q84 84 70 74 Q56 82 44 74 Z" fill="${Y}"/>
        <path d="M60 66 Q84 60 110 62" stroke="${X}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>`},"pesochnoe-koltso":{title:`Кольцо с орехами`,body:`
      <g id="dough">
        <circle cx="100" cy="92" r="56" fill="${K}"/>
        <circle cx="100" cy="92" r="24" fill="${G.cream}"/>
        <circle cx="100" cy="92" r="56" fill="url(#hatch)" opacity=".35"/>
      </g>
      <g id="nuts">
        <path d="M100 44 L112 52 L106 60 L94 58 Z" fill="${q}"/>
        <path d="M140 70 L152 78 L146 88 L134 82 Z" fill="${q}"/>
        <path d="M136 122 L146 132 L134 138 L126 128 Z" fill="${q}"/>
        <path d="M64 126 L74 136 L62 142 L54 132 Z" fill="${q}"/>
        <path d="M50 74 L60 66 L68 76 L56 84 Z" fill="${q}"/>
        <path d="M98 34 L110 38 L104 48 L92 44 Z" fill="${G.gold}"/>
        <path d="M150 96 L160 104 L150 112 L142 104 Z" fill="${G.gold}"/>
        <path d="M44 100 L54 106 L46 114 L38 108 Z" fill="${G.gold}"/>
      </g>`},beze:{title:`Безе`,body:`
      <g id="meringue-b">
        <path d="M50 128 Q46 104 66 98 L134 98 Q154 104 150 128 Q148 138 136 136 L64 136 Q52 138 50 128 Z" fill="${J}"/>
        <path d="M60 120 Q70 112 82 118 Q94 110 106 118 Q118 110 130 118 Q140 112 146 120" stroke="${G.paper}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
      <g id="cream">
        <rect x="60" y="88" width="80" height="14" rx="7" fill="${Zt}"/>
      </g>
      <g id="meringue">
        <path d="M52 90 Q48 64 70 58 Q76 44 96 48 Q108 36 124 46 Q146 44 148 62 Q158 74 146 90 Z" fill="${J}"/>
        <path d="M66 78 Q80 66 98 72 Q118 62 134 74" stroke="${G.paper}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>`},praga:{title:`Прага`,body:`
      <g id="sponge">
        <rect x="40" y="52" width="120" height="82" rx="6" fill="${Y}"/>
      </g>
      <g id="jam">
        <rect x="40" y="98" width="120" height="8" fill="${Z}"/>
      </g>
      <g id="cream">
        <rect x="40" y="76" width="120" height="10" fill="${X}"/>
        <rect x="40" y="114" width="120" height="10" fill="${X}"/>
      </g>
      <g id="glaze">
        <path d="M38 56 Q38 42 52 42 L148 42 Q162 42 162 56 L162 64 Q144 74 128 64 Q112 76 96 64 Q80 76 64 64 Q48 72 38 64 Z" fill="${Y}"/>
        <path d="M56 52 Q84 46 112 50" stroke="${X}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
      <rect x="40" y="52" width="120" height="82" rx="6" fill="url(#hatch)" opacity=".25"/>`},kievskoe:{title:`Киевское`,body:`
      <g id="meringue">
        <path d="M36 118 L164 118 L158 92 L42 92 Z" fill="${K}"/>
        <path d="M36 62 L164 62 L158 88 L42 88 Z" fill="${K}"/>
        <path d="M40 36 L160 36 L156 58 L44 58 Z" fill="${q}"/>
        <path d="M36 118 L164 118 L158 92 L42 92 Z" fill="url(#hatch)" opacity=".4"/>
      </g>
      <g id="cream">
        <rect x="42" y="58" width="116" height="8" fill="${Zt}"/>
        <rect x="42" y="86" width="116" height="8" fill="${Zt}"/>
      </g>
      <g id="nuts">
        <circle cx="60" cy="46" r="6" fill="${X}"/>
        <circle cx="90" cy="44" r="7" fill="${X}"/>
        <circle cx="124" cy="46" r="6" fill="${X}"/>
        <circle cx="146" cy="48" r="5" fill="${X}"/>
        <path d="M76 50 Q90 42 104 50" stroke="${G.gold}" stroke-width="3" fill="none"/>
      </g>`},ryzhik:{title:`Медовое «Рыжик»`,body:`
      <g id="dough">
        <rect x="36" y="40" width="128" height="18" rx="9" fill="${Z}"/>
        <rect x="36" y="66" width="128" height="18" rx="9" fill="${Z}"/>
        <rect x="36" y="92" width="128" height="18" rx="9" fill="${Z}"/>
        <rect x="36" y="118" width="128" height="18" rx="9" fill="${Z}"/>
      </g>
      <g id="cream">
        <rect x="36" y="55" width="128" height="12" fill="${J}"/>
        <rect x="36" y="81" width="128" height="12" fill="${J}"/>
        <rect x="36" y="107" width="128" height="12" fill="${J}"/>
      </g>
      <g id="crumb">
        <path d="M44 40 Q52 30 64 36 Q76 26 88 34 Q100 26 112 34 Q126 26 138 34 Q150 28 156 40 Z" fill="${q}"/>
        <circle cx="70" cy="34" r="3" fill="${G.gold}"/>
        <circle cx="110" cy="32" r="3" fill="${G.gold}"/>
        <circle cx="140" cy="36" r="2.5" fill="${G.gold}"/>
      </g>
      <rect x="36" y="40" width="128" height="96" fill="url(#hatch)" opacity=".18"/>`},"romovaya-baba":{title:`Ромовая баба`,body:`
      <g id="dough">
        <path d="M52 136 L48 74 Q48 62 62 60 L138 60 Q152 62 152 74 L148 136 Q146 144 134 142 L66 142 Q54 144 52 136 Z" fill="${K}"/>
        <path d="M52 136 L48 74 Q48 62 62 60 L138 60 Q152 62 152 74 L148 136 Q146 144 134 142 L66 142 Q54 144 52 136 Z" fill="url(#hatch)" opacity=".35"/>
      </g>
      <g id="raisin">
        <ellipse cx="76" cy="98" rx="5" ry="7" fill="${Y}" transform="rotate(-20 76 98)"/>
        <ellipse cx="112" cy="112" rx="5" ry="7" fill="${Y}" transform="rotate(15 112 112)"/>
        <ellipse cx="128" cy="86" rx="4" ry="6" fill="${Y}" transform="rotate(-10 128 86)"/>
      </g>
      <g id="fondant">
        <path d="M44 66 Q44 40 70 36 Q88 22 112 30 Q140 26 150 44 Q162 52 156 66 Q142 78 126 68 Q110 80 94 68 Q78 80 62 68 Q50 74 44 66 Z" fill="${G.paper}" stroke="${G.ink}" stroke-width="2"/>
        <path d="M66 52 Q90 44 118 50" stroke="${G.ink}" stroke-width="2" fill="none" opacity=".3"/>
      </g>`}};function $t(e,t=`card`){let n=Ke[e];if(n&&t!==`mini`){let r=Q[e]??Q.kartoshka;return`<img class="${t===`hero`?`pastry pastry--hero pastry--photo`:`pastry pastry--photo`} pastry--${e}" src="${n}" alt="${r.title}" loading="lazy" />`}let r=Q[e]??Q.kartoshka;return`
  <svg class="${t===`hero`?`pastry pastry--hero`:t===`mini`?`pastry pastry--mini`:`pastry`} pastry--${e}" viewBox="0 0 200 160" role="img" aria-label="${r.title}">
    ${Qt}
    ${r.body}
  </svg>`}var en=Object.keys(Q);function tn(e,t=44){let n=Q[e]??Q.kartoshka;return`<svg viewBox="0 0 200 160" width="${t}" height="${t*.8}" aria-hidden="true">${Qt}${n.body}</svg>`}var nn={approved:`ОДОБРЕНО`,fresh:`СВЕЖЕЕ`,premium:`ВЫСШИЙ СОРТ`,hit:`ХИТ СЕЗОНА`,last3:`ОСТАЛОСЬ 3 ШТ.`,deficit:`ДЕФИЦИТ!`,no1:`№ 1`,joke:`ШУТКА`,paid:`ОПЛАЧЕНО`,accepted:`ЗАКАЗ ПРИНЯТ`,secret:`ВЫ НАШЛИ ТОТ САМЫЙ СЕКРЕТ`};function rn(e,t={}){let n=t.color??O.kumach,r=t.rotate??-8+Math.random()*6,i=nn[e],a=v(`span`,{class:`stamp stamp--${e}`,role:`presentation`});return a.style.setProperty(`--stamp-rotate`,`${r.toFixed(1)}deg`),a.style.setProperty(`--stamp-color`,n),a.innerHTML=`
    <svg viewBox="0 0 300 120" aria-hidden="true" class="stamp-svg">
      <g fill="none" stroke="${n}" stroke-width="4">
        <rect x="4" y="4" width="292" height="112" rx="6"/>
        <rect x="14" y="14" width="272" height="92" rx="3" stroke-width="2"/>
      </g>
      <text x="150" y="72" text-anchor="middle" fill="${n}"
        font-family="Oswald, sans-serif" font-weight="700"
        font-size="${i.length>14?30:44}" letter-spacing="3">${i}</text>
      <path d="M30 90 L270 90" stroke="${n}" stroke-width="2" stroke-dasharray="10 6"/>
    </svg>
    <span class="visually-hidden">${i}</span>
  `,a}function an(e,t){let n=v(`span`,{class:`price-tag`});return n.innerHTML=`
    <svg viewBox="0 0 120 80" aria-hidden="true" class="price-tag-svg">
      <line x1="60" y1="0" x2="60" y2="14" stroke="${O.ink}" stroke-width="2"/>
      <path d="M14 14 h92 v52 l-46 12 l-46 -12 Z" fill="${O.paper}" stroke="${O.ink}" stroke-width="3"/>
      <circle cx="60" cy="14" r="3" fill="${O.ink}"/>
      ${t?`<text x="60" y="36" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="12" fill="${O.kumach}" text-decoration="line-through">${t}</text>`:``}
      <text x="60" y="${t?58:50}" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="600" font-size="${t?18:22}" fill="${O.ink}">${e}</text>
    </svg>
    <span class="visually-hidden">Цена: ${e}</span>
  `,n}var on=[`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`KeyB`,`KeyA`],$=0,sn=!1;function cn(){A.konami&&window.addEventListener(`keydown`,e=>{sn||(e.code===on[$]?($+=1,$===on.length&&($=0,sn=!0,ln())):$=+(e.code===on[0]))})}function ln(){if(y())return;let e=v(`canvas`,{class:`konami-canvas`});e.width=window.innerWidth,e.height=window.innerHeight,e.setAttribute(`aria-hidden`,`true`),document.body.appendChild(e);let t=e.getContext(`2d`);if(!t){e.remove(),sn=!1;return}let n=en.slice(0,6),r=[],a=0;n.forEach(e=>{let t=new Image,n=tn(e,200);t.onload=()=>{a+=1},t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`,r.push(t)});let o=Array.from({length:40},(t,n)=>({x:Math.random()*e.width,y:-40-Math.random()*e.height*.6,vy:140+Math.random()*220,rot:Math.random()*Math.PI*2,vr:(Math.random()-.5)*6,size:34+Math.random()*34,img:r[n%r.length]})),s=(n,r)=>{let i=Math.min(r/1e3,.05);t.clearRect(0,0,e.width,e.height),o.forEach(n=>{n.y+=n.vy*i,n.rot+=n.vr*i,n.y>e.height+60&&(n.y=-60,n.x=Math.random()*e.width),n.img&&(n.img.complete||a>0)&&(t.save(),t.translate(n.x,n.y),t.rotate(n.rot),t.drawImage(n.img,-n.size/2,-n.size/2,n.size,n.size),t.restore())})};i.ticker.add(s);let c=rn(`secret`,{color:O.kumach,rotate:-6});c.classList.add(`konami-stamp`),document.body.appendChild(c),H(`stamp`),i.fromTo(c,{scale:2.2,rotate:-22,opacity:0},{scale:1,rotate:-6,opacity:1,duration:k.durations.stamp,ease:k.easings.stamp}),i.delayedCall(4,()=>{i.ticker.remove(s),i.to(e,{opacity:0,duration:.5,onComplete:()=>e.remove()}),i.to(c,{opacity:0,scale:.9,duration:.6,delay:1.4,onComplete:()=>{c.remove(),sn=!1}})})}function un(){if(y())return()=>void 0;let e=document.createElement(`div`);e.className=`ambient-3d-bg`,e.setAttribute(`aria-hidden`,`true`),e.innerHTML=`
    <div class="ambient-glow" data-ambient-glow></div>
    <canvas class="ambient-canvas" data-ambient-canvas></canvas>
  `,document.body.prepend(e);let t=e.querySelector(`[data-ambient-canvas]`),n=e.querySelector(`[data-ambient-glow]`),r=t.getContext(`2d`,{alpha:!0});if(!r)return()=>e.remove();let i=t.width=window.innerWidth,a=t.height=window.innerHeight,o=i/2,s=a/2,c=i/2,l=a/2,u=0,d=null,f=!0,p=window.innerWidth<768?22:45,m=[];for(let e=0;e<p;e++){let t=e%5==0,n=e%3==0,r=.3+Math.random()*1.5;m.push({x:Math.random()*i,y:Math.random()*a,z:r,baseSize:t?5+Math.random()*5:n?2.5+Math.random()*3:1.5+Math.random()*2,size:0,alpha:.15+Math.random()*.45,rotation:Math.random()*Math.PI*2,spinSpeed:(Math.random()-.5)*.02,vx:(Math.random()-.5)*.25,vy:-.15-Math.random()*.3,type:t?`star`:n?`flake`:`dust`})}function h(){i=t.width=window.innerWidth,a=t.height=window.innerHeight}window.addEventListener(`resize`,h);function g(e){c=e.clientX,l=e.clientY}window.addEventListener(`mousemove`,g,{passive:!0});let _=oe(),v=()=>{_&&(u=_.velocity*.05)};_?.on(`scroll`,v);function ee(e,t,n,r){let i=Math.PI/5,a=Math.PI/2*3;e.beginPath(),e.moveTo(t,n-r);for(let o=0;o<5;o++){let o=t+Math.cos(a)*r,s=n+Math.sin(a)*r;e.lineTo(o,s),a+=i,o=t+r*.42*Math.cos(a),s=n+r*.42*Math.sin(a),e.lineTo(o,s),a+=i}e.lineTo(t,n-r),e.closePath()}function b(){if(!f)return;o+=(c-o)*.06,s+=(l-s)*.06,n.style.transform=`translate3d(${o}px, ${s}px, 0)`,u*=.94,r.clearRect(0,0,i,a);let e=(o/i-.5)*60,t=(s/a-.5)*60;for(let n=0;n<m.length;n++){let o=m[n];o.x+=o.vx*o.z,o.y+=(o.vy-u*.5)*o.z,o.rotation+=o.spinSpeed,o.y<-30&&(o.y=a+30),o.y>a+30&&(o.y=-30),o.x<-30&&(o.x=i+30),o.x>i+30&&(o.x=-30);let s=o.x+e*o.z,c=o.y+t*o.z,l=o.baseSize*o.z;r.save(),r.translate(s,c),r.rotate(o.rotation),o.type===`star`?(r.fillStyle=`rgba(217, 164, 65, ${o.alpha*.85})`,ee(r,0,0,l),r.fill()):o.type===`flake`?(r.fillStyle=`rgba(200, 16, 46, ${o.alpha*.45})`,r.beginPath(),r.arc(0,0,l*.7,0,Math.PI*2),r.fill()):(r.fillStyle=`rgba(255, 255, 255, ${o.alpha*.9})`,r.fillRect(-l/2,-l/2,l,l)),r.restore()}d=requestAnimationFrame(b)}return b(),()=>{f=!1,d&&cancelAnimationFrame(d),window.removeEventListener(`resize`,h),window.removeEventListener(`mousemove`,g),_?.off(`scroll`,v),e.remove()}}function dn(){let e=document.getElementById(`app`);if(!e)return;let t=Nt(),n=document.createElement(`main`);n.id=`page-content`,n.setAttribute(`tabindex`,`-1`);let r=Ft();e.append(t,n,r)}async function fn(){h(),dn(),Pt(),A.sound&&R.enabled&&Tt(!0),ae(),ze();let{mountGlobalAnimations:e}=await M(async()=>{let{mountGlobalAnimations:e}=await import(`./global-BtMictQT.js`);return{mountGlobalAnimations:e}},__vite__mapDeps([10,11,12]));e(),un(),A.customCursor&&!y()&&It(),(A.grain||A.filmDust||A.vignette)&&Xt(),A.konami&&cn(),window.addEventListener(`cart:open`,()=>{M(async()=>{let{initCart:e,openCart:t}=await import(`./cart-CFZnzOyw.js`);return{initCart:e,openCart:t}},__vite__mapDeps([13,11,12,5,7,8])).then(({initCart:e,openCart:t})=>{e(),t()})},{once:!0}),A.preloader&&await Yt(),document.fonts.ready.then(()=>{window.dispatchEvent(new Event(`fonts:ready`))})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>void fn()):fn();export{ee as $,Xe as A,fe as B,et as C,tt as D,nt as E,xe as F,ge as G,de as H,O as I,be as J,_e as K,le as L,M,ce as N,F as O,E as P,v as Q,ue as R,Qe as S,Ye as T,ve as U,pe as V,k as W,he as X,me as Y,oe as Z,ht as _,$t as a,g as at,P as b,Vt as c,w as ct,Wt as d,m as dt,te as et,zt as f,d as ft,ut as g,dt as h,en as i,y as it,$e as j,Ze as k,Ut as l,re as lt,H as m,f as mt,rn as n,b as nt,Lt as o,_ as ot,Ht as p,p as pt,Se as q,tn as r,S as rt,Rt as s,C as st,an as t,x as tt,Gt as u,l as ut,lt as v,rt as w,Ge as x,We as y,D as z};