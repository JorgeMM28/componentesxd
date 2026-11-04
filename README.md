# COMPONENTESXD // Multi-Framework UI & Anime.js v4 Architectural Vault

> **Bóveda de Ingeniería UI Copy & Paste (Zero-NPM Lock-in)**: **660 archivos de componentes** (**66 variantes radicalmente diferenciadas** × **10 frameworks/lenguajes**), **12 interfaces arquitectónicas completas**, **48 animaciones interactivas de Anime.js v4** organizadas según la documentación oficial (`https://animejs.com/documentation/getting-started`) y un **sitio multi-página en Astro 5** con **Top Navbar estilo Microsoft (Mega-Menu Cascada)**.

---

## Arquitectura del Sitio Multi-Página (Astro 5)

El sitio (`src/pages/`) está estructurado con **22 páginas estáticas** y una **barra de navegación superior (Top Navbar)** con menú desplegable multinivel estilo Microsoft (impulsado por **Anime.js v4**):

1. **Top Navbar con Mega-Menu Cascada (`src/layouts/Layout.astro`)**:
   - **Componentes (66)**: Al seleccionar o pasar el cursor sobre cualquier apartado (ej. *Tablas*, *Toasters*, *Botones*, *Formularios*), el panel derecho despliega instantáneamente todas sus variantes con enlaces directos (`#ancla`) a su bloque en la página.
   - **Animaciones Anime.js (48)**: Muestra los 8 capítulos oficiales de Anime.js v4 a la izquierda y sus 6 escenarios en vivo a la derecha.
   - **Interfaces (12)**: Selector visual con previsualización cromática para conmutar en tiempo real cualquiera de los 12 sistemas de diseño en todo el sitio.
2. **Distribución Apilada de Ancho Completo (Full-Width Stacked Variants)**:
   - En cada página de componente (`/components/[slug]`) y de animación (`/animations/[slug]`), **todas las variantes se muestran una debajo de otra a ancho completo** (Variante 01 + Previsualización Interactiva en Vivo + Inspector de Código, seguida de Variante 02, Variante 03, etc.).
   - **Listas desplegables (`<select>`) exclusivas para el código del framework**: Cada variante cuenta con su propio `<select>` únicamente para alternar entre los 10 lenguajes/frameworks disponibles (`React`, `Vue 3`, `Svelte 5`, `Angular`, `Astro`, `Laravel Blade`, `Livewire 3`, `PHP 8.3`, `Vanilla JS`, `CSS/SCSS`).

---

## Catálogo de Componentes (66 Variantes Radicalmente Diferenciadas × 10 Frameworks = 660 Archivos)

Cada variante dentro de `components/<categoria>/variants/<variante>/` posee una estructura DOM, comportamiento interactivo y arquitectura visual completamente distinta:

### 01. Tablas de Datos (`components/tables/` — 10 Variantes)
1. **`modern-rounded`** — **Tabla Moderna Bordes Redondeados**: Contenedor `border-radius: 16px`, cabecera translúcida, avatares y badges tipo cápsula.
2. **`styless-minimal`** — **Tabla Styless (Sin Bordes / Puro Texto)**: Cero bordes laterales ni fondos de celda; alineación tipográfica limpia y separadores capilares.
3. **`content-fit`** — **Tabla Content-Fit (`width: max-content`)**: La tabla se ajusta estrictamente al ancho exacto de su contenido con celdas `white-space: nowrap`.
4. **`floating-rows`** — **Tabla Flotante (`border-collapse: separate`)**: Cada fila es una tarjeta independiente flotante con `border-spacing: 0 10px` y elevación al pasar el cursor.
5. **`interactive-sort`** — **Tabla Interactiva (Ordenamiento + Selección)**: Cabeceras clicables que ordenan filas en vivo (ASC/DESC) y checkboxes con selección múltiple real.
6. **`crud-actions`** — **Tabla con Acciones CRUD en Vivo**: Botones funcionales para duplicar fila, eliminar con animación de Anime.js y agregar nuevos registros en tiempo real.
7. **`inline-form`** — **Tabla con Formulario Editable en Línea**: Celdas con `<input type="text">`, `<input type="number">` y `<select>` que recalculan el subtotal y total general al instante.
8. **`filterable-search`** — **Tabla con Filtros y Búsqueda Instantánea**: Barra superior con buscador en tiempo real por texto y píldoras de filtro por estado (`ALL`, `ONLINE`, `DEGRADED`, `OFFLINE`).
9. **`expandable-master`** — **Tabla Expandible Master-Detail**: Filas principales que despliegan un cajón técnico secundario con logs JSON y métricas del nodo al hacer clic.
10. **`striped-ledger`** — **Tabla Cebra Financiera de Alta Densidad**: Filas alternadas (`nth-child(even)`), tipografía monoespaciada tabular y fila `<tfoot>` de sumatoria.

### 02. Toasters & Notificaciones (`components/toasts/` — 8 Variantes)
- `minimal-pill` (Cápsula Flotante Compacta)
- `glass-blur` (Cristal Esmerilado con Barra de Tiempo Activa)
- `action-undo` (Notificación con Botones Deshacer / Confirmar)
- `stacked-queue` (Pila Cascada 3D Interactiva con botón para disparar Toasts con Anime.js)
- `terminal-cli` ( Consola Monoespaciada DevOps con stdout)
- `progress-upload` (Toaster con Barra de Progreso Dinámica y botón Simular Subida)
- `banner-full` (Franja Superior de Ancho Completo)
- `rich-avatar` (Notificación Social con Avatar y Respuesta Rápida en línea)

### 03. Botones & Acciones (`components/buttons/` — 8 Variantes)
- `solid-elevated`, `outline-architect`, `ghost-minimal`, `shimmer-beam`, `magnetic-spring`, `loading-state` (interactivo al hacer clic), `segmented-group` (conmutador activo), `kbd-shortcut` (con disparo por teclado o clic).

### 04. Tarjetas & Paneles (`components/cards/` — 8 Variantes)
- `bento-Spotlight`, `metric-sparkline`, `tilt-3d-holo` (inclinación 3D real con cursor), `horizontal-media`, `pricing-tier`, `terminal-code`, `collapsible-card`, `profile-dossier`.

### 05. Formularios & Controles (`components/forms/` — 8 Variantes)
- `floating-input`, `otp-pin-grid` (auto-avance entre dígitos), `Dropzone-upload`, `segmented-radio`, `range-dual-slider` (actualización numérica en vivo), `tag-chips-input` (agregar/eliminar chips con Enter o clic), `password-meter` (medidor de entropía en vivo), `inline-search-kbd`.

### 06. Modales & Drawers (`components/modals/` — 6 Variantes)
- `command-palette`, `confirm-destructive`, `slide-drawer`, `wizard-stepper-modal`, `glass-lightbox`, `fullscreen-inspector`.

### 07. Navegación & Menús (`components/navigation/` — 6 Variantes)
- `microsoft-mega-nav`, `kinetic-tabs`, `breadcrumb-trail`, `command-dock`, `tree-directory`, `pagination-matrix`.

### 08. Badges & Telemetría (`components/badges-data/` — 6 Variantes)
- `live-status-pill`, `radial-gauge-svg`, `sparkline-inline`, `heatmap-matrix`, `segmented-meter`, `kbd-chip-set`.

### 09. Topologías Docker (`components/docker/` — 6 Variantes)
- `fullstack-traefik`, `laravel-octane-stack`, `node-cluster-pm2`, `postgres-ha-replicated`, `observability-grafana`, `astro-nginx-edge`.

---

## Enciclopedia Interactiva Anime.js v4 (`animations/` — 48 Escenarios en 8 Capítulos)

Basada en la documentación oficial de **Anime.js v4** (`https://animejs.com/documentation/getting-started`), utilizando la API modular (`animate`, `stagger`, `createTimeline`, `createTimer`, `createSpring`, `steps`, `svg.createDrawable`, `svg.morphTo`, `svg.createMotionPath`):

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
# Regenerar los 660 archivos de componentes y 48 módulos de animación
npm run generate:vault

# Iniciar servidor de desarrollo Astro (http://localhost:4321)
npm run dev

# Compilar las 22 páginas estáticas para producción
npm run build
```
