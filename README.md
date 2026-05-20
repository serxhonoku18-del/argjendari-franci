# Argjendari Franci

Faqja zyrtare e atelierit **Argjendari Franci** në Tiranë — një maison e argjendarisë me punim me dorë, që nga viti 1992.

> *"Ari nuk i flet kujt ka nxitim. Ai flet vetëm me duart që dinë të presin."*

## Koncepti

Faqja ndjek estetikën e shtëpive të mëdha europiane të bizhuterive (Cartier, Bulgari, Tiffany & Co.):
sfondi i thellë noir, ari antik i butë si theks i çmuar (#C9A961, jo i verdhë i ndritshëm),
tipografia editoriale me serifë të kontrastit të lartë (Cormorant Garamond), hierarki e qartë,
lëvizje minimale dhe hapësirë e bardhë (negative space) e bollshme.

## Strukura

```
argjendari-franci/
├── index.html          # Kryefaqja (hero, koleksione, atelier, vizita)
├── koleksione.html     # Të gjitha pjesët, me filtër kategorish
├── produkt.html        # Faqja e produktit (galeri + specifika + WhatsApp)
├── rreth-nesh.html     # Historia, mjeshtëria, filozofia
├── kontakt.html        # Adresa Tiranë, harta, formulari, WhatsApp
├── public/
│   └── images/
│       ├── brand/      # Logoja
│       └── products/   # Fotografitë e produkteve
├── src/
│   ├── styles/main.css     # Sistemi i dizajnit (tokens, layout, komponentë)
│   └── scripts/main.js     # Nav, scroll reveals, galeri, filter
├── vite.config.js
└── package.json
```

## Sistem dizajni

| Token              | Vlera          | Përdorimi                              |
| ------------------ | -------------- | -------------------------------------- |
| `--noir`           | `#0A0A0A`      | Sfondi kryesor                         |
| `--noir-2`         | `#101010`      | Kartat, banda e vizitës                |
| `--gold`           | `#C9A961`      | Theksi i argjendarit, lidhjet, vijat   |
| `--gold-glow`      | `#DCBD7A`      | Hover                                  |
| `--ivory`          | `#F4EFE6`      | Tekstet kryesore                       |
| `--ivory-soft`     | `#C9C5BD`      | Paragrafët                             |
| `--whisper`        | `#8B867D`      | Detaje sekondare                       |
| `--serif`          | Cormorant Garamond | Headlines (editorial)              |
| `--sans`           | Inter          | Trupi i tekstit                        |

## Instalimi

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # buildon në /dist
npm run preview  # parashikim i buildit
```

## Pjesët në katalog

| Kategoria              | Pjesët                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vargje                 | Vargu Luan · Krahët e Engjëllit · Koleksion Kuban · Litari i Artë · Bizantini i Artë · Vargu i Gjatë · Litarët e Çiftëzuar · Vargu Infinit · Lutje e Heshtur |
| Unaza                  | Unaza Zemër · Unaza me Tre Diamantë · Unaza Skorpion · Unaza Monedhë · Brezat e Familjes                                                              |
| Byzylykë               | Byzylyk Panteri · Byzylyku LOVE · Byzylykët Bizantin                                                                                                  |
| Vathë                  | Monogrami Skulpturor · Rrathë të Përdredhur                                                                                                           |
| Trashëgimi shpirtërore | Shën Mëria · Rruzaret e Arta · Arkivi i Vogël                                                                                                         |

## Hero në mobile

Në ekranet ≤ 880px, sfondi i kryefaqes është një video e shkurtër (23s, loop) me brendësinë e atelierit. Videoja luan automatikisht, pa zë, dhe me poster të paracaktuar (`/video/hero-mobile-poster.jpg`) për ngarkim të shpejtë. Në desktop ruhet imazhi statik me animim breathe.

## Kontaktet (reale)

- **Telefon / WhatsApp:** +355 68 444 7744
- **Instagram:** [@argjendari.franci](https://www.instagram.com/argjendari.franci)
- **Google Maps:** [41.339503, 19.827991](https://maps.app.goo.gl/e4jdUZs1fVFmz9yr6) — Tiranë

## Detaje teknike

- **Pa framework UI** — HTML semantik + CSS modern (custom properties, grid, clamp, aspect-ratio)
- **Vite** për dev server dhe build
- **IntersectionObserver** për animacione zbritëse (fade + slide)
- **Responsive** — breakpoints në 880px (tablet/mobile) dhe 540px (mobile i ngushtë)
- **Imazhet** — të optimizuara në < 800KB, lazy-loading aty ku duhet
- **Fontet** — Google Fonts (Cormorant Garamond, Inter)
- **Aksesibiliteti** — `prefers-reduced-motion` i respektuar, kontrastet AA

## Kontakte në kod

Telefoni, WhatsApp, email dhe Instagram janë vendosur si vlera shembull (`+355 69 234 5678`, `franci@argjendari.al`). Përditësohen direkt në çdo HTML para se faqja të shkojë në prodhim.

## Licensa

© Argjendari Franci, Tiranë. Të gjitha të drejtat e rezervuara.
