# Guía de Instalación y Uso Rápido (`Copy & Paste Workflow`)

Esta biblioteca está diseñada bajo el principio **Zero-NPM Lock-in**: tú eres dueño del código fuente. No dependes de paquetes externos que queden obsoletos ni de estilos encapsulados imposibles de editar.

---

## Paso 1: Copia los Design Tokens Base (`styles/`)

Todo componente de `componentesxd` se alimenta de las variables CSS definidas en `styles/tokens.css` (o `styles/_tokens.scss`).

```bash
# En la raíz de este repositorio, copia tokens.css a tu proyecto:
cp styles/tokens.css /ruta/a/tu-proyecto/src/styles/tokens.css
```

Impórtalo en el archivo principal de tu aplicación (`main.ts`, `layout.astro`, `app.blade.php`, `styles.scss`) y elige cualquiera de los **4 temas incluidos**:
- `data-theme="obsidian"` (Por defecto: Cristal oscuro tipo Linear / Raycast)
- `data-theme="brutalist"` (Neo-Brutalismo de alto contraste con sombras sólidas)
- `data-theme="swiss"` (Minimalismo editorial claro de alta precisión)
- `data-theme="cyber"` (Telemetría esmeralda estilo terminal espacial)

---

## Paso 2: Copia el Componente de tu Framework (`components/`)

Cada carpeta dentro de `components/` está dividida por categoría y luego por framework:

```text
components/
├── tables/
│   ├── css-scss/       -> table.css, table.scss (Base visual)
│   ├── vanilla-js/     -> DataTable.js
│   ├── react/          -> DataTable.tsx
│   ├── vue/            -> DataTable.vue
│   ├── svelte/         -> DataTable.svelte
│   ├── angular/        -> data-table.component.ts
│   ├── astro/          -> DataTable.astro
│   ├── blade/          -> data-table.blade.php
│   ├── livewire/       -> DataTable.php
│   └── php/            -> DataTableRenderer.php
├── buttons/
├── cards/
├── modals/
├── forms/
├── alerts-toasts/
└── docker/
```

---

## Paso 3: Instala y Copia las Animaciones de Anime.js v4 (`animations/`)

Para las animaciones del directorio `animations/`, instala únicamente `animejs` v4 en tu proyecto destino:

```bash
npm install animejs
```

Y copia el módulo que necesites desde `animations/`:

```bash
# Ejemplo: Copiar el motor de Descomposición 3D y el Timer
cp animations/effects/component-decomposition.js /tu-proyecto/src/animations/
cp animations/timers/chrono-timer.js /tu-proyecto/src/animations/
```

