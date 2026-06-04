# AUTO P R G SRL Website

Site modern, responsive, construit ca aplicație statică modulară pentru AUTO P R G SRL, fără dependențe externe, ușor de publicat pe GitHub Pages sau Vercel.

## Pagini incluse

- Acasă
- Despre noi
- Servicii
- Mașini disponibile
- Închirieri auto
- Transport auto
- Contact

## Rulare locală

```bash
npm run dev
```

Aplicația pornește implicit pe `http://localhost:5173`.

## Build de producție

```bash
npm run build
```

Fișierele optimizate vor fi generate în directorul `dist/`.

## Deploy pe GitHub și Vercel

1. Creează un repository pe GitHub și urcă proiectul:
   ```bash
   git init
   git add .
   git commit -m "Initial AUTO P R G website"
   git branch -M main
   git remote add origin https://github.com/contul-tau/auto-prg-website.git
   git push -u origin main
   ```
2. În Vercel, alege **Add New Project** și conectează repository-ul GitHub.
3. Folosește setările:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Publică proiectul și configurează domeniul dorit din Vercel Project Settings.

## Date de contact

Înainte de publicare, actualizează telefonul, WhatsApp-ul și emailul din `src/main.js` cu datele reale ale firmei.
