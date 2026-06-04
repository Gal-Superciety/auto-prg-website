const company = {
  name: 'AUTO P R G SRL',
  cui: '48616065',
  registration: 'J22/2493/2023',
  city: 'Fărcășeni',
  county: 'Iași',
  address: 'Str. Rediu 487, Ap. BIR. 2, Fărcășeni, Iași',
  phone: '0775 562 757',
  whatsapp: '0775 562 757',
  email: 'autoprg2023@gmail.com',
};

const navLinks = [
  ['Acasă', '/'],
  ['Despre noi', '/despre-noi'],
  ['Servicii', '/servicii'],
  ['Mașini disponibile', '/masini-disponibile'],
  ['Închirieri auto', '/inchirieri-auto'],
  ['Transport auto', '/transport-auto'],
  ['Contact', '/contact'],
];

const services = [
  ['🚘', 'Vânzare autoturisme', 'Selecție atentă de autoturisme rulate, verificate documentar și pregătite pentru predare rapidă.', 'auto-sales'],
  ['🔑', 'Închirieri auto', 'Mașini curate, întreținute și flexibile pentru deplasări personale, business sau perioade extinse.', 'car-rental'],
  ['🚛', 'Transport auto pe platformă', 'Transport sigur pentru autoturisme avariate, neînmatriculate sau achiziționate din România și Europa.', 'auto-transport'],
  ['🌍', 'Consultanță achiziții Germania & Europa', 'Căutare, selecție, negociere și suport logistic pentru mașini potrivite bugetului tău.', 'auto-sales'],
  ['✅', 'Verificare înainte de cumpărare', 'Verificări vizuale, tehnice și documentare pentru reducerea riscurilor înainte de semnarea contractului.', 'auto-service'],
];

const whyCards = [
  ['Încredere', 'Comunicare clară, documente verificate și pași explicați înainte de fiecare decizie.', 'auto-sales'],
  ['Calitate', 'Selecție atentă, mașini prezentate profesionist și atenție la detalii în fiecare serviciu.', 'auto-service'],
  ['Servicii complete', 'Vânzări, închirieri, transport pe platformă și consultanță într-un singur loc.', 'auto-transport'],
];

const cars = [
  ['Volkswagen Passat Variant', '2020 · 2.0 TDI · Automat · Diesel · Euro 6', 'Disponibil curând'],
  ['BMW Seria 3 Touring', '2019 · xDrive · Automat · Istoric service', 'Verificat'],
  ['Skoda Octavia', '2021 · 1.5 TSI · Manual · Consum redus', 'Recomandat familie'],
];

const rentalOptions = [
  'Închiriere pe zi, weekend sau termen lung',
  'Predare flexibilă în zona Iași, în funcție de disponibilitate',
  'Contract transparent și asistență pe durata închirierii',
  'Opțiuni potrivite pentru deplasări personale sau business',
];

const waLink = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;
const telLink = `tel:${company.phone.replaceAll(' ', '')}`;
const logoPath = '/images/logo-auto-prg.png';

function layout(content) {
  return `
    <header class="site-header">
      <div class="top-bar">
        <span>☎ ${company.phone}</span>
        <span>✉ ${company.email}</span>
        <span>📍 ${company.city}, ${company.county}</span>
      </div>
      <nav class="navbar container" aria-label="Navigare principală">
        <a class="brand" href="/" data-link>
          <img class="brand-logo" src="${logoPath}" alt="Logo ${company.name}" width="64" height="64" />
          <span><strong>AUTO P R G</strong><small>Soluții auto complete</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Deschide meniul">☰</button>
        <div class="nav-links">
          ${navLinks.map(([label, path]) => `<a href="${path}" data-link>${label}</a>`).join('')}
        </div>
      </nav>
    </header>
    <main>${content}</main>
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img class="footer-logo" src="${logoPath}" alt="Logo ${company.name}" width="92" height="92" />
          <div>
            <h3>${company.name}</h3>
            <p>Partenerul tău pentru autoturisme, închirieri, transport pe platformă și consultanță auto europeană.</p>
          </div>
        </div>
        <div>
          <h4>Date firmă</h4>
          <p>CUI: ${company.cui}</p>
          <p>Nr. Reg. Com.: ${company.registration}</p>
          <p>Sediu: ${company.address}</p>
        </div>
        <div>
          <h4>Contact rapid</h4>
          <a href="${telLink}">${company.phone}</a>
          <a href="mailto:${company.email}">${company.email}</a>
          <a href="${waLink}">WhatsApp</a>
        </div>
      </div>
      <div class="copyright">© ${new Date().getFullYear()} ${company.name}. Toate drepturile rezervate.</div>
    </footer>
  `;
}

function pageHero(eyebrow, title, text, primaryLabel = 'Solicită ofertă', primaryTo = '/contact', image = 'hero-home') {
  return `
    <section class="page-hero image-${image}">
      <div class="container narrow page-hero-content">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${text}</p>
        <a class="btn btn-primary" href="${primaryTo}" data-link>${primaryLabel} →</a>
      </div>
    </section>
  `;
}

function sectionHeading(eyebrow, title, text) {
  return `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2><p>${text}</p></div>`;
}

function checklist(items) {
  return `<ul class="checklist">${items.map((item) => `<li><span>✓</span>${item}</li>`).join('')}</ul>`;
}

function ctaBand() {
  return `
    <section class="cta-band container">
      <div>
        <p class="eyebrow">Consultanță rapidă</p>
        <h2>Ai nevoie de o mașină sau de transport pe platformă?</h2>
        <p>Spune-ne ce cauți, iar echipa AUTO P R G SRL îți răspunde cu pașii următori și o ofertă personalizată.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="${waLink}">WhatsApp</a>
        <a class="btn btn-light" href="/contact" data-link>Contactează-ne</a>
      </div>
    </section>
  `;
}

function home() {
  return `
    <section class="hero image-hero-home">
      <div class="container hero-grid">
        <div class="hero-kicker">Vânzări auto · Închirieri · Transport pe platformă</div>
        <div class="hero-copy">
          <p class="eyebrow">AUTO P R G SRL · Iași</p>
          <h1>Experiență auto premium pentru vânzări, închirieri și transport pe platformă.</h1>
          <p>Oferim soluții complete pentru cumpărarea, verificarea, închirierea și transportul autoturismelor din România, Germania și Europa.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact" data-link>Solicită ofertă</a>
            <a class="btn btn-outline" href="/masini-disponibile" data-link>Vezi mașinile</a>
          </div>
        </div>
        <div class="hero-card" aria-label="Servicii AUTO P R G">
          <div class="hero-card-top"><span>PRG</span><strong>Soluții auto complete</strong></div>
          <ul>
            <li>🛡 Mașini verificate înainte de cumpărare</li>
            <li>🚛 Transport auto pe platformă</li>
            <li>⚙ Consultanță achiziții Germania & Europa</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section container">
      ${sectionHeading('Ce facem', 'Servicii auto integrate', 'De la identificarea mașinii potrivite până la predare, verificare sau transport, ai un singur partener de încredere.')}
      <div class="services-grid premium-service-grid">${services.map(([icon, title, text, image]) => `<article class="service-card visual-card image-${image}"><div class="visual-card-content"><span class="service-icon">${icon}</span><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>
    </section>
    <section class="section why-section">
      <div class="container">
        ${sectionHeading('De ce AUTO P.R.G. SRL?', 'Un partener auto construit pe încredere, calitate și servicii complete.', 'Oferim servicii auto complete, cu transparență, seriozitate și atenție la fiecare detaliu.')}
        <div class="why-grid">${whyCards.map(([title, text, image]) => `<article class="why-card image-${image}"><div><span>${title}</span><p>${text}</p></div></article>`).join('')}</div>
      </div>
    </section>
    <section class="split-section container">
      <div>
        <p class="eyebrow">Proces clar</p>
        <h2>Cumperi sau închiriezi fără stres inutil.</h2>
        <p>Analizăm nevoile tale, verificăm opțiunile potrivite și comunicăm transparent costurile, documentele și termenii.</p>
        ${checklist(['Consultanță adaptată bugetului', 'Verificare tehnică și documentară', 'Suport pentru transport și predare'])}
      </div>
      <div class="stat-panel"><div><strong>5</strong><span>direcții de servicii auto</span></div><div><strong>EU</strong><span>căutare Germania & Europa</span></div><div><strong>24/7</strong><span>formular online disponibil</span></div></div>
    </section>
    ${ctaBand()}
  `;
}

function about() {
  return `${pageHero('Despre noi', 'AUTO P R G SRL este partenerul local pentru decizii auto sigure.', 'Cu sediul în Fărcășeni, Iași, oferim servicii serioase pentru clienți care caută transparență, mobilitate și suport real în procesul auto.', 'Solicită ofertă', '/contact', 'auto-sales')}
    <section class="section container content-grid">
      <div><h2>Seriozitate, claritate și orientare către client</h2><p>Activitatea noastră acoperă vânzări de autoturisme, închirieri, transport pe platformă, consultanță pentru achiziții din Germania și Europa, precum și verificări înainte de cumpărare.</p><p>Ne concentrăm pe comunicare directă, documente clare și recomandări potrivite scopului fiecărui client: familie, business, navetă sau investiție într-un autoturism premium.</p></div>
      <div class="info-card"><h3>Date societate</h3><p><strong>Denumire:</strong> ${company.name}</p><p><strong>CUI:</strong> ${company.cui}</p><p><strong>Nr. Reg. Com.:</strong> ${company.registration}</p><p><strong>Sediu:</strong> ${company.address}</p></div>
    </section>${ctaBand()}`;
}

function servicesPage() {
  return `${pageHero('Servicii', 'Tot ce ai nevoie pentru următoarea ta mașină.', 'Alegem soluția potrivită pentru cumpărare, verificare, închiriere sau transport, în funcție de buget, termen și destinație.', 'Solicită ofertă', '/contact', 'auto-service')}
    <section class="section container services-detail">${services.map(([icon, title, text, image]) => `<article class="image-${image}"><span class="service-icon">${icon}</span><div><h2>${title}</h2><p>${text}</p></div></article>`).join('')}</section>`;
}

function carsPage() {
  return `${pageHero('Mașini disponibile', 'Autoturisme selectate pentru clienți exigenți.', 'Lista poate varia în funcție de stoc și de cererile active. Contactează-ne pentru disponibilitate, dotări și ofertă actualizată.', 'Contactează-ne', '/contact', 'auto-sales')}
    <section class="section container car-grid">${cars.map(([name, details, tag]) => `<article class="car-card"><div class="car-visual image-auto-sales"><span>🚘</span></div><div class="car-body"><span class="tag">${tag}</span><h2>${name}</h2><p>${details}</p><strong>Preț la cerere</strong><a class="btn btn-primary" href="/contact" data-link>Solicită detalii</a></div></article>`).join('')}</section>`;
}

function rentals() {
  return `${pageHero('Închirieri auto', 'Mobilitate rapidă, contract clar și mașini întreținute.', 'Închiriază autoturisme pentru deplasări zilnice, vacanțe, proiecte business sau perioade în care ai nevoie de o soluție temporară.', 'Solicită ofertă', '/contact', 'car-rental')}
    <section class="section container content-grid"><div><h2>Opțiuni flexibile de închiriere</h2><p>Discutăm perioada, destinația, garanția și condițiile de utilizare pentru ca închirierea să fie simplă și predictibilă.</p>${checklist(rentalOptions)}</div><div class="quote-card"><h3>Cere disponibilitate</h3><p>Trimite perioada, tipul de mașină dorit și localitatea de predare.</p><a class="btn btn-primary" href="/contact" data-link>Solicită ofertă</a></div></section>`;
}

function transport() {
  return `${pageHero('Transport auto', 'Transport pe platformă pentru autoturisme, sigur și eficient.', 'Asigurăm transport pentru mașini avariate, neînmatriculate sau achiziționate din România și Europa, cu planificare atentă.', 'Solicită ofertă', '/contact', 'auto-transport')}
    <section class="section container content-grid"><div><h2>Când ai nevoie de platformă?</h2>${checklist(['Mașină avariată sau imobilizată', 'Autoturism cumpărat din alt oraș sau din Europa', 'Vehicul fără numere sau fără ITP valabil', 'Livrare către service, domiciliu sau punct de predare'])}</div><div class="info-card dark"><span class="service-icon">🚛</span><h3>Ofertă în funcție de traseu</h3><p>Prețul se stabilește după distanță, tipul vehiculului, termenul dorit și condițiile de încărcare/descărcare.</p></div></section>${ctaBand()}`;
}

function contact() {
  return `${pageHero('Contact', 'Spune-ne ce mașină cauți sau ce serviciu îți trebuie.', 'Completează formularul sau contactează-ne direct prin telefon, WhatsApp ori email.', 'Sună acum', '/contact', 'auto-service')}
    <section class="section container contact-layout">
      <div><div class="contact-cards"><a href="${telLink}"><span>☎</span><strong>Telefon</strong>${company.phone}</a><a href="${waLink}"><span>💬</span><strong>WhatsApp</strong>Răspuns rapid</a><a href="mailto:${company.email}"><span>✉</span><strong>Email</strong>${company.email}</a></div><div class="info-card"><h2>Adresă</h2><p>${company.address}</p><p><strong>CUI:</strong> ${company.cui}</p><p><strong>Nr. Reg. Com.:</strong> ${company.registration}</p></div></div>
      <form class="contact-form" action="mailto:${company.email}" method="post" enctype="text/plain"><label>Nume și prenume<input name="nume" type="text" placeholder="Numele tău" required></label><label>Telefon<input name="telefon" type="tel" placeholder="Număr de telefon" required></label><label>Email<input name="email" type="email" placeholder="adresa@email.ro"></label><label>Serviciu dorit<select name="serviciu" required><option value="">Alege serviciul</option><option>Vânzare autoturisme</option><option>Închirieri auto</option><option>Transport auto pe platformă</option><option>Consultanță achiziții auto</option><option>Verificare înainte de cumpărare</option></select></label><label>Mesaj<textarea name="mesaj" rows="6" placeholder="Detalii despre buget, model, traseu sau perioada dorită" required></textarea></label><button class="btn btn-primary" type="submit">Trimite mesajul</button></form>
    </section>`;
}

const routes = {
  '/': home,
  '/despre-noi': about,
  '/servicii': servicesPage,
  '/masini-disponibile': carsPage,
  '/inchirieri-auto': rentals,
  '/transport-auto': transport,
  '/contact': contact,
};

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const content = (routes[path] || (() => pageHero('404', 'Pagina nu a fost găsită', 'Revino la pagina principală sau contactează-ne pentru informații.', 'Înapoi acasă', '/')))();
  document.getElementById('root').innerHTML = layout(content);
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
  document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));
  document.querySelectorAll('[data-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href.startsWith('/')) {
        event.preventDefault();
        history.pushState({}, '', href);
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

window.addEventListener('popstate', render);
render();
