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
  ['Stoc Auto', '/stoc-auto'],
  ['Servicii', '/servicii'],
  ['Închirieri', '/inchirieri-auto'],
  ['Transport', '/transport-auto'],
  ['Despre noi', '/despre-noi'],
  ['Contact', '/contact'],
];

const services = [
  {
    icon: '🚘',
    title: 'Vânzări auto',
    text: 'Autoturisme selectate, verificate și pregătite pentru predare.',
    image: 'auto-sales',
    href: '/stoc-auto',
  },
  {
    icon: '🔑',
    title: 'Închirieri auto',
    text: 'Mobilitate rapidă pentru deplasări personale sau business.',
    image: 'car-rental',
    href: '/inchirieri-auto',
  },
  {
    icon: '🚛',
    title: 'Transport auto',
    text: 'Platformă auto pentru România și Europa, planificat sigur.',
    image: 'auto-transport',
    href: '/transport-auto',
  },
  {
    icon: '🌍',
    title: 'Import Europa',
    text: 'Căutare, selecție și suport pentru achiziții din Germania și UE.',
    image: 'auto-import',
    href: '/servicii',
  },
  {
    icon: '✅',
    title: 'Verificare & service',
    text: 'Verificări tehnice și documentare înainte de decizia finală.',
    image: 'auto-service',
    href: '/servicii',
  },
];

const whyCards = [
  ['Încredere', 'Comunicare directă, acte clare și pași explicați.', 'auto-sales'],
  ['Calitate', 'Mașini atent selectate și prezentare profesionistă.', 'auto-service'],
  ['Servicii complete', 'Stoc, închirieri, transport și consultanță într-un singur loc.', 'auto-transport'],
];

const cars = [
  {
    name: 'Volkswagen Passat Variant',
    specs: ['2020', '2.0 TDI', 'Automat', 'Diesel'],
    tag: 'Disponibil curând',
    image: 'stock-estate',
    highlight: 'Break premium pentru familie și business',
  },
  {
    name: 'BMW Seria 3 Touring',
    specs: ['2019', 'xDrive', 'Automat', 'Istoric service'],
    tag: 'Verificat',
    image: 'stock-sedan',
    highlight: 'Dinamic, elegant, configurat pentru drum lung',
  },
  {
    name: 'Skoda Octavia',
    specs: ['2021', '1.5 TSI', 'Manual', 'Consum redus'],
    tag: 'Recomandat familie',
    image: 'stock-suv',
    highlight: 'Practică, eficientă și ușor de întreținut',
  },
];

const rentalOptions = [
  'Închiriere pe zi, weekend sau termen lung',
  'Predare flexibilă în zona Iași',
  'Contract clar și asistență pe durata închirierii',
  'Soluții pentru persoane fizice și business',
];

const waLink = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;
const telLink = `tel:${company.phone.replaceAll(' ', '')}`;

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
          <span class="brand-mark">PRG</span>
          <span><strong>AUTO P.R.G.</strong><small>Dealership & servicii auto premium</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Deschide meniul">☰</button>
        <div class="nav-links">
          ${navLinks.map(([label, path]) => `<a href="${path}" data-link>${label}</a>`).join('')}
        </div>
      </nav>
    </header>
    <main>${content}</main>
    <a class="floating-whatsapp" href="${waLink}" aria-label="Contact rapid pe WhatsApp"><span>💬</span> WhatsApp</a>
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <h3>${company.name}</h3>
          <p>Partener auto pentru stoc, închirieri, transport pe platformă și consultanță europeană.</p>
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
        <h2>Vrei o ofertă pentru o mașină, chirie sau transport?</h2>
        <p>Trimite-ne modelul, bugetul sau traseul. Revenim cu pașii următori.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="${waLink}">WhatsApp</a>
        <a class="btn btn-light" href="/contact" data-link>Contact</a>
      </div>
    </section>
  `;
}

function carCard({ name, specs, tag, image, highlight }) {
  return `<article class="car-card">
    <div class="car-visual image-${image}"><span>${tag}</span></div>
    <div class="car-body">
      <h2>${name}</h2>
      <p>${highlight}</p>
      <ul class="car-specs">${specs.map((spec) => `<li>${spec}</li>`).join('')}</ul>
      <strong>Preț la cerere</strong>
      <a class="btn btn-primary" href="${waLink}">Cere detalii pe WhatsApp</a>
    </div>
  </article>`;
}

function home() {
  return `
    <section class="hero image-hero-home">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">AUTO P.R.G. SRL · Iași</p>
          <h1>Dealership auto premium. Servicii complete, fără complicații.</h1>
          <p>Mașini selectate, închirieri flexibile, transport pe platformă și consultanță pentru achiziții din Europa.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/stoc-auto" data-link>Vezi stocul auto</a>
            <a class="btn btn-outline" href="${waLink}">Scrie pe WhatsApp</a>
          </div>
        </div>
        <div class="hero-panel" aria-label="Avantaje AUTO P.R.G.">
          <span class="panel-label">AUTO P.R.G.</span>
          <h2>Mașina potrivită, livrată corect.</h2>
          <ul>
            <li><strong>Stoc & comenzi</strong><span>opțiuni adaptate bugetului</span></li>
            <li><strong>Transport platformă</strong><span>România și Europa</span></li>
            <li><strong>Consultanță</strong><span>documente, verificare, predare</span></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section container stock-preview">
      ${sectionHeading('Stoc Auto', 'Autoturisme disponibile sau la comandă.', 'Modele selectate pentru clienți care vor transparență, calitate și predare rapidă.')}
      <div class="car-grid">${cars.map(carCard).join('')}</div>
      <div class="center-action"><a class="btn btn-primary" href="/stoc-auto" data-link>Vezi pagina Stoc Auto</a></div>
    </section>
    <section class="section container">
      ${sectionHeading('Servicii', 'Tot ce ai nevoie pentru următoarea mașină.', 'Texte scurte, proces clar și imagini premium pentru fiecare direcție de servicii.')}
      <div class="services-grid premium-service-grid">${services.map(({ icon, title, text, image, href }) => `<a class="service-card visual-card image-${image}" href="${href}" data-link><div class="visual-card-content"><span class="service-icon">${icon}</span><h3>${title}</h3><p>${text}</p></div></a>`).join('')}</div>
    </section>
    <section class="section why-section">
      <div class="container">
        ${sectionHeading('De ce să alegi AUTO P.R.G. SRL?', 'Seriozitate, imagine premium și servicii complete.', 'Lucrăm simplu: alegem, verificăm, transportăm și predăm cu atenție la detalii.')}
        <div class="why-grid">${whyCards.map(([title, text, image]) => `<article class="why-card image-${image}"><div><span>${title}</span><p>${text}</p></div></article>`).join('')}</div>
      </div>
    </section>
    <section class="split-section container">
      <div>
        <p class="eyebrow">Proces clar</p>
        <h2>Cumperi, închiriezi sau transporți fără stres.</h2>
        <p>Spui ce cauți. Noi confirmăm opțiunile, costurile și pașii următori.</p>
        ${checklist(['Consultanță adaptată bugetului', 'Verificare tehnică și documentară', 'Suport pentru transport și predare'])}
      </div>
      <div class="stat-panel"><div><strong>5</strong><span>servicii auto integrate</span></div><div><strong>EU</strong><span>suport Germania & Europa</span></div><div><strong>RO</strong><span>predare și transport local</span></div></div>
    </section>
    ${ctaBand()}
  `;
}

function about() {
  return `${pageHero('Despre noi', 'AUTO P.R.G. SRL, partener local pentru decizii auto sigure.', 'Lucrăm cu seriozitate pentru clienți care caută mașini bune, documente clare și suport real.', 'Solicită ofertă', '/contact', 'auto-sales')}
    <section class="section container content-grid">
      <div><h2>Seriozitate și atenție la detalii</h2><p>Acoperim stoc auto, închirieri, transport pe platformă, consultanță pentru achiziții din Germania și Europa și verificări înainte de cumpărare.</p><p>Ne concentrăm pe recomandări potrivite scopului tău: familie, business, navetă sau investiție într-un autoturism premium.</p></div>
      <div class="info-card"><h3>Date societate</h3><p><strong>Denumire:</strong> ${company.name}</p><p><strong>CUI:</strong> ${company.cui}</p><p><strong>Nr. Reg. Com.:</strong> ${company.registration}</p><p><strong>Sediu:</strong> ${company.address}</p></div>
    </section>${ctaBand()}`;
}

function servicesPage() {
  return `${pageHero('Servicii', 'Servicii auto premium, într-un singur loc.', 'Alegem soluția potrivită pentru cumpărare, verificare, închiriere sau transport.', 'Solicită ofertă', '/contact', 'auto-service')}
    <section class="section container services-detail">${services.map(({ icon, title, text, image }) => `<article class="image-${image}"><span class="service-icon">${icon}</span><div><h2>${title}</h2><p>${text}</p></div></article>`).join('')}</section>${ctaBand()}`;
}

function stockPage() {
  return `${pageHero('Stoc Auto', 'Mașini disponibile pentru clienți exigenți.', 'Stocul poate varia. Contactează-ne pentru disponibilitate, dotări și ofertă actualizată.', 'Cere detalii', '/contact', 'stock-sedan')}
    <section class="section container stock-page">
      <div class="stock-toolbar"><p class="eyebrow">Selecție curentă</p><p>Carduri comerciale, clare și pregătite pentru ofertare rapidă.</p></div>
      <div class="car-grid">${cars.map(carCard).join('')}</div>
    </section>${ctaBand()}`;
}

function rentals() {
  return `${pageHero('Închirieri auto', 'Mobilitate rapidă cu mașini întreținute.', 'Închiriază pentru zi, weekend, business sau perioade extinse.', 'Solicită ofertă', '/contact', 'car-rental')}
    <section class="section container content-grid"><div><h2>Închiriere simplă și predictibilă</h2><p>Stabilim perioada, condițiile și predarea înainte de plecare.</p>${checklist(rentalOptions)}</div><div class="quote-card image-car-rental"><h3>Cere disponibilitate</h3><p>Trimite perioada, tipul de mașină și localitatea de predare.</p><a class="btn btn-primary" href="${waLink}">WhatsApp</a></div></section>${ctaBand()}`;
}

function transport() {
  return `${pageHero('Transport auto', 'Transport pe platformă sigur și eficient.', 'Pentru mașini avariate, neînmatriculate sau achiziționate din România și Europa.', 'Solicită ofertă', '/contact', 'auto-transport')}
    <section class="section container content-grid"><div><h2>Când ai nevoie de platformă?</h2>${checklist(['Mașină avariată sau imobilizată', 'Autoturism cumpărat din alt oraș sau din Europa', 'Vehicul fără numere sau fără ITP valabil', 'Livrare către service, domiciliu sau punct de predare'])}</div><div class="info-card dark"><span class="service-icon">🚛</span><h3>Ofertă după traseu</h3><p>Prețul depinde de distanță, vehicul și condițiile de încărcare.</p></div></section>${ctaBand()}`;
}

function contact() {
  return `${pageHero('Contact', 'Spune-ne ce mașină sau serviciu îți trebuie.', 'Contactează-ne direct prin telefon, WhatsApp sau email.', 'Sună acum', '/contact', 'auto-service')}
    <section class="section container contact-layout">
      <div><div class="contact-cards"><a href="${telLink}"><span>☎</span><strong>Telefon</strong>${company.phone}</a><a href="${waLink}"><span>💬</span><strong>WhatsApp</strong>Răspuns rapid</a><a href="mailto:${company.email}"><span>✉</span><strong>Email</strong>${company.email}</a></div><div class="info-card"><h2>Adresă</h2><p>${company.address}</p><p><strong>CUI:</strong> ${company.cui}</p><p><strong>Nr. Reg. Com.:</strong> ${company.registration}</p></div></div>
      <form class="contact-form" action="mailto:${company.email}" method="post" enctype="text/plain"><label>Nume și prenume<input name="nume" type="text" placeholder="Numele tău" required></label><label>Telefon<input name="telefon" type="tel" placeholder="Număr de telefon" required></label><label>Email<input name="email" type="email" placeholder="adresa@email.ro"></label><label>Serviciu dorit<select name="serviciu" required><option value="">Alege serviciul</option><option>Stoc Auto</option><option>Vânzare autoturisme</option><option>Închirieri auto</option><option>Transport auto pe platformă</option><option>Consultanță achiziții auto</option><option>Verificare înainte de cumpărare</option></select></label><label>Mesaj<textarea name="mesaj" rows="6" placeholder="Model, buget, traseu sau perioada dorită" required></textarea></label><button class="btn btn-primary" type="submit">Trimite mesajul</button></form>
    </section>`;
}

const routes = {
  '/': home,
  '/despre-noi': about,
  '/servicii': servicesPage,
  '/stoc-auto': stockPage,
  '/masini-disponibile': stockPage,
  '/inchirieri-auto': rentals,
  '/transport-auto': transport,
  '/contact': contact,
};

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const content = (routes[path] || (() => pageHero('404', 'Pagina nu a fost găsită', 'Revino la pagina principală sau contactează-ne pentru informații.', 'Înapoi acasă', '/')))();
  document.getElementById('root').innerHTML = layout(content);
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === path || (path === '/masini-disponibile' && link.getAttribute('href') === '/stoc-auto')) link.classList.add('active');
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
