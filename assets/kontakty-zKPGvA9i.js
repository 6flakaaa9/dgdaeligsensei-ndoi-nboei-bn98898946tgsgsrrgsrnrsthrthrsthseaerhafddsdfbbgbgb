import{N as e,P as t,Q as n,U as r,at as i,f as a,l as o,z as s}from"./index-CfIXPHmC.js";import{t as c}from"./slots-DCbuGpXu.js";function l(e){return`status status--${e}`}var u={meta:{title:`Контакты — Те Самые`,description:`${e.city}, ${e.street}. Пн–Пт ${s.weekday.open}–${s.weekday.close}, Сб–Вс ${s.weekend.open}–${s.weekend.close}, обед ${s.lunch.from}–${s.lunch.to}. Санитарный день — последний четверг месяца.`},render(){let i=n(`div`,{class:`kontakty`}),u=c();return i.innerHTML=`
      <section class="page-section contacts-head">
        <p class="kicker">Отдел №5 · Справочное бюро и стол заказов</p>
        <h1>Контакты</h1>
        <div class="${l(u.code)}" data-status role="status">
          <span class="status-dot" aria-hidden="true"></span>
          <span class="status-label">${u.label}</span>
          <span class="status-note">${u.note}</span>
        </div>
        <p class="contacts-updated">Статус обновляется сам, время — ${s.timezone.replace(`Europe/`,``)}.</p>
      </section>

      <section class="page-section contacts-grid">
        <div class="contacts-card contacts-address">
          <h2>Адрес</h2>
          <p class="contacts-addr">
            ${e.city}, ${e.street}<br>
            <span class="contacts-landmark">${e.landmark}</span>
          </p>
          <p>Телефон: <a href="tel:${e.phone.replace(/[^+\d]/g,``)}">${e.phone}</a></p>
          <p>Почта: <a href="mailto:${e.email}">${e.email}</a></p>
          <p class="contacts-dept">${t.department} · ${t.legal}</p>
        </div>

        <div class="contacts-card contacts-hours">
          <h2>Часы работы</h2>
          <table class="hours-table">
            <caption class="visually-hidden">Расписание работы</caption>
            <tbody>
              <tr><th scope="row">Пн–Пт</th><td>${s.weekday.open}:00 – ${s.weekday.close}:00</td></tr>
              <tr><th scope="row">Сб–Вс</th><td>${s.weekend.open}:00 – ${s.weekend.close}:00</td></tr>
              <tr><th scope="row">Обед</th><td>${s.lunch.from}:00 – ${s.lunch.to}:00 (${r.lunch.toLowerCase()})</td></tr>
              <tr><th scope="row">Санитарный день</th><td>последний четверг месяца</td></tr>
            </tbody>
          </table>
          <p class="hours-note">${r.sanitary}: моем полки, пересчитываем ложечки. Приходите в пятницу — пирожные соскучатся.</p>
        </div>

        <div class="contacts-card contacts-receiver" aria-hidden="true">
          ${a(180)}
          <p class="receiver-quote">«Уважаемые покупатели! Свежие пирожные поступили. Повторяю: поступили!»</p>
        </div>
      </section>

      <section class="page-section contacts-map" aria-labelledby="map-h">
        <div class="section-head">
          <h2 id="map-h">Как пройти</h2>
          <span class="map-note">Схема условная, как в настоящем метро</span>
        </div>
        <div class="map-frame">${o()}</div>
        <p class="map-legend">От «Почты» — два шага по красной линии, вход со двора, рядом вывеска «СЛАДКИЕ ИЗДЕЛИЯ И ВЫПЕЧКА». Если видите очередь — вы на месте.</p>
      </section>

      <section class="page-section contacts-form-section" aria-labelledby="cf-h">
        <h2 id="cf-h">Обратная связь</h2>
        <p class="prose">Вопросы, предложения, заявки на коробку с бантиком — пишите. Ответим в рабочее время.</p>
        <form class="contact-form" data-contact-form novalidate>
          <label class="field">
            <span>Имя</span>
            <input type="text" name="name" maxlength="60" autocomplete="name" required />
            <span class="field-error" data-err="name" hidden>Представьтесь, пожалуйста.</span>
          </label>
          <label class="field">
            <span>Телефон или почта</span>
            <input type="text" name="contact" maxlength="80" required />
            <span class="field-error" data-err="contact" hidden>Оставьте телефон или почту — иначе как ответить?</span>
          </label>
          <label class="field">
            <span>Сообщение</span>
            <textarea name="message" rows="4" maxlength="600" required></textarea>
            <span class="field-error" data-err="message" hidden>Пара слов минимум — напишите подробнее.</span>
          </label>
          <label class="field field--slot">
            <span>Желаемое время готовности заказа (не обязательно)</span>
            <input type="text" name="slot" placeholder="напр., к 14:00 или согласовать по телефону" style="font-size:0.95rem; padding:0.6rem 0.8rem; border:2px solid var(--ink); border-radius:var(--radius); background:var(--paper);" />
          </label>
          <input type="text" name="_soviet_contact_trap" style="position:absolute; opacity:0; pointer-events:none; left:-9999px;" tabindex="-1" autocomplete="off" />
          <button class="btn btn--kumach" type="submit">Отправить</button>
          <p class="form-note" data-form-note hidden></p>
        </form>
      </section>
    `,i},mount(e){let t=e.root,n=i(`[data-contact-form]`,t),a=i(`[data-form-note]`,t);n.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(n);if(t.get(`_soviet_contact_trap`))return;let o=String(t.get(`name`)??``).trim(),s=String(t.get(`contact`)??``).trim(),c=String(t.get(`message`)??``).trim(),l=!0,u=(e,t)=>{let r=i(`[data-err="${e}"]`,n);r.hidden=t,t||(l=!1)};if(u(`name`,o.length>=2),u(`contact`,s.length>=5),u(`message`,c.length>=5),!l){a.hidden=!0;return}let d=`tesamye:contact_cooldown`,f=Number(sessionStorage.getItem(d)||0),p=Date.now();if(p-f<2e4){let e=Math.ceil((2e4-(p-f))/1e3);a.hidden=!1,a.style.color=`var(--kumach)`,a.textContent=`Письмо уже передано дежурному. Следующее обращение можно отправить через ${e} сек.`;return}sessionStorage.setItem(d,String(p)),a.hidden=!1,a.textContent=`Отправляем…`,window.setTimeout(()=>{a.textContent=`Принято, ${o}! Ответим на «${s}» в рабочее время. ${r.wrap}`,n.reset()},700)});let o=i(`[data-status]`,t),s=window.setInterval(()=>{let e=c();o.className=l(e.code),i(`.status-label`,o).textContent=e.label,i(`.status-note`,o).textContent=e.note},6e4);return()=>window.clearInterval(s)}};export{u as default};