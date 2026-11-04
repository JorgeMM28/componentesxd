# COMPONENTESXD // Multi-Framework UI & Anime.js v4 Architectural Vault

> **Estado del catálogo:** algunas implementaciones generadas son plantillas iniciales y aún no reproducen la vista previa. Verifica y adapta el código antes de integrarlo. El laboratorio de estilos, degradados y tipografía está disponible en `/laboratorio`.

> **Bóveda de interfaces y ejemplos de animación**: **1,160 archivos generados** (**116 variantes** × **10 tecnologías**), **12 interfaces arquitectónicas completas**, **48 animaciones interactivas de Anime.js v4** organizadas según la documentación oficial ([documentación de Anime.js](https://animejs.com/documentation/)) y un **sitio multi-página en Astro 5** con **Top Navbar estilo Microsoft (Mega-Menu Cascada)**.

---

## Arquitectura del Sitio Multi-Página (Astro 5)

El sitio (`src/pages/`) está estructurado con **26 páginas estáticas** y una **barra de navegación superior (Top Navbar)** con menú desplegable multinivel estilo Microsoft (impulsado por **Anime.js v4**):

1. **Top Navbar con Mega-Menu Cascada (`src/layouts/Layout.astro`)**:
   - **Componentes (116)**: Al seleccionar o pasar el cursor sobre cualquier apartado (ej. *Tablas*, *Toasters*, *Botones*, *Formularios*), el panel derecho despliega instantáneamente todas sus variantes con enlaces directos (`#ancla`) a su bloque en la página.
   - **Animaciones Anime.js (48)**: Muestra los 8 capítulos oficiales de Anime.js v4 a la izquierda y sus 6 escenarios en vivo a la derecha.
   - **Interfaces (12)**: Selector visual con previsualización cromática para conmutar en tiempo real cualquiera de los 12 sistemas de diseño en todo el sitio.
2. **Distribución Apilada de Ancho Completo (Full-Width Stacked Variants)**:
   - En cada página de componente (`/components/[slug]`) y de animación (`/animations/[slug]`), **todas las variantes se muestran una debajo de otra a ancho completo** (Variante 01 + Previsualización Interactiva en Vivo + Inspector de Código, seguida de Variante 02, Variante 03, etc.).
   - **Listas desplegables (`<select>`) exclusivas para el código del framework**: Cada variante cuenta con su propio `<select>` únicamente para alternar entre los 10 lenguajes/frameworks disponibles (`React`, `Vue 3`, `Svelte 5`, `Angular`, `Astro`, `Laravel Blade`, `Livewire 3`, `PHP 8.3`, `Vanilla JS`, `CSS/SCSS`).

---

## Catálogo de componentes

Las vistas previas se agrupan por categoría. Los archivos generados son puntos de partida y deben revisarse antes de usarse; algunas implementaciones todavía no reproducen la demostración.

### Tablas de Datos (`tables` · 10 variantes)

`modern-rounded`, `styleless-minimal`, `content-fit-compact`, `floating-rows`, `interactive-sort-select`, `crud-actions`, `inline-form-table`, `multi-filter-table`, `expandable-detail`, `brutalist-ledger`.

### Toasters y Notificaciones (`toasts` · 8 variantes)

`modern-floating-toast`, `dynamic-island-morph`, `action-buttons-toast`, `form-reply-toast`, `stacker-spawner-toast`, `styleless-minimal-alert`, `content-fit-pill-banner`, `upload-progress-toaster`.

### Botones y Controles de Acción (`buttons` · 8 variantes)

`modern-rounded-pills`, `styleless-text-links`, `floating-fab-radial`, `interactive-async-morph`, `hold-confirm-safety`, `split-dropdown-action`, `segmented-toolbar-fit`, `brutalist-3d-push`.

### Tarjetas y Contenedores (`cards` · 8 variantes)

`modern-rounded-bento`, `styleless-editorial`, `floating-3d-tilt`, `interactive-tabbed-card`, `action-toolbar-card`, `form-embedded-card`, `content-fit-kpi-badge`, `expandable-drawer-card`.

### Formularios, Inputs y Filtros (`forms` · 8 variantes)

`modern-rounded-form`, `styleless-underline-inputs`, `content-fit-inline-bar`, `floating-label-inputs`, `interactive-otp-pin`, `live-validation-meter`, `filter-search-facet`, `tactile-switches-sliders`.

### Modales, Diálogos y Command Palettes (`modals` · 6 variantes)

`modern-glass-modal`, `interactive-cmdk-palette`, `floating-popover-menu`, `form-creation-modal`, `security-confirm-modal`, `slide-drawer-inspector`.

### Navbars, Menús Cascada y Navegación (`navigation` · 10 variantes)

`microsoft-cascade-nav`, `floating-pill-navbar`, `styleless-minimal-nav`, `interactive-breadcrumbs`, `floating-action-dock`, `interactive-pagination`, `collapsible-sidebar`, `desktop-menubar`, `compact-navigation-rail`, `mobile-touch-tabbar`.

### Badges, Timelines, Acordeones y Micro-UI (`badges-data` · 6 variantes)

`modern-pulse-badges`, `interactive-accordion`, `interactive-svg-gauges`, `vertical-event-timeline`, `copyable-spec-grid`, `avatar-stack-interactive`.

### Dockerfiles y Orquestación de Contenedores (`docker` · 6 variantes)

`astro-node-ssr`, `laravel-livewire-fpm`, `spa-nginx-alpine`, `fullstack-compose-stack`, `bun-microservice`, `traefik-tls-proxy`.

### Carruseles, Sliders 3D y Marquesinas Cinéticas (`carousels` · 8 variantes)

`coverflow-3d`, `infinite-marquee`, `snap-peek-slider`, `vertical-telemetry-reel`, `split-editorial-showcase`, `thumbnail-filmstrip`, `autoplay-story-bars`, `card-deck-throw`.

### Acordeones, Comparadores Before/After, Kanban y Conmutadores (`accordions-tabs` · 8 variantes)

`accordion-exclusive`, `accordion-multi-bento`, `before-after-split`, `kanban-mini-board`, `segmented-pricing-toggle`, `file-tree-inspector`, `transfer-dual-list`, `calendar-slot-Matrix`.

### Componentes Especiales Combinados (UI + Anime.js v4 en Vivo) (`special-hybrids` · 30 variantes)

`stepper-carousel-wizard`, `table-realtime-stream`, `table-stagger-sorter`, `carousel-svg-morph-showcase`, `carousel-spring-physics-deck`, `stepper-checkout-calculator`, `table-bulk-explosion`, `toast-timeline-dispatcher`, `kanban-spring-pipeline`, `form-otp-svg-vault`, `card-3d-exploded-inspector`, `skeleton-to-table-hydrator`, `carousel-timeline-scrubber`, `search-grid-2d-ripple`, `modal-command-choreography`, `pricing-slider-odometer`, `docker-live-deploy-topology`, `accordion-animated-metrics`, `dual-transfer-stagger-sync`, `chrono-sla-incident-table`, `anime-hero-clockwork`, `interactive-world-telemetry-map`, `pathfinding-dijkstra-visualizer`, `sorting-algorithm-symphony`, `neural-network-graph-propagator`, `orbital-solar-gravity-sim`, `isometric-3d-city-cluster`, `audio-synth-spectrum-analyzer`, `git-branch-commit-visualizer`, `cyber-radar-threat-sonar`.

---

## Enciclopedia interactiva Anime.js v4 (`animations/` — 48 escenarios en 8 capítulos)

La página de animaciones incluye ejemplos de distribución, arrastre, desplazamiento y WAAPI. En Especiales hay 20 estudios visuales agrupados en cinco familias; el laboratorio permite editar tipografía y degradados y copiar CSS y JavaScript.

Basada en la documentación oficial de **Anime.js v4** ([documentación de Anime.js](https://animejs.com/documentation/)), utilizando la API modular (`animate`, `stagger`, `createTimeline`, `createTimer`, `createSpring`, `steps`, `svg.createDrawable`, `svg.morphTo`, `svg.createMotionPath`):

1. **`animations/targets-properties/`** — **01. Targets & Propiedades Animables**: Selectores CSS, transformaciones 2D/3D independientes, variables CSS `--custom` e interpolación de atributos DOM.
2. **`animations/keyframes-stagger/`** — **02. Keyframes & Stagger Distributivo**: Arreglos de fotogramas, keyframes por porcentaje, `stagger()` lineal desde el centro y matriz 2D `grid: [8, 4]` interactiva al hacer clic en cualquier celda.
3. **`animations/easings-springs/`** — **03. Easings, Física Spring & Steps**: `createSpring({ mass, stiffness, damping })`, rebote elástico, curvas `cubicBezier` y `steps(6)` discretos.
4. **`animations/timelines-workflows/`** — **04. Timelines (`createTimeline`) & Scrubbers**: Secuencias encadenadas, solapamiento temporal `<-=300` y línea de tiempo controlada manualmente mediante slider scrubber.
5. **`animations/svg-animations/`** — **05. Animación Vectorial SVG (`svg.*`)**: `svg.createDrawable()` para trazado de líneas, `svg.morphTo()` entre polígonos y `svg.createMotionPath()` para seguimiento de órbita y tangente.
6. **`animations/timers-calculators/`** — **06. Timers (`createTimer`) & Calculadores**: Cronómetro de alta precisión con callbacks, odómetro financiero, contador de dígitos rodantes y convergente de telemetría.
7. **`animations/loaders-skeletons/`** — **07. Loaders, Spinners, 3-Dots & Skeletons**: Carga sencilla morfing, spinner orbital doble, onda de tres puntos y skeleton shimmer con hidratación real.
8. **`animations/stackers-decomposition/`** — **08. Stackers 3D & Descomposición de Componentes**: Rotador de tarjetas 3D, explosión isométrica de capas (`translateZ`) y desensamblaje estructural de UI.

---

## Comandos del Proyecto

```bash
# Regenerar los 1,160 archivos de componentes y 48 módulos de animación
npm run generate:vault

# Sincronizar solo los adaptadores mantenidos de botones, notificaciones, formularios, tarjetas, telemetría, diálogos, navegación, acordeones y tablas
npm run sync:curated

# Iniciar servidor de desarrollo Astro (http://localhost:4321)
npm run dev

# Compilar las 26 páginas estáticas para producción
npm run build
```
