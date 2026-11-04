---
name: componentesxd-vault
description: Skill oficial para agentes de IA que permite seleccionar, copiar e integrar más de 660 archivos de componentes UI multi-framework (CSS, SCSS, JS, PHP, React, Vue 3, Svelte 5, Angular 18+, Astro 5, Laravel Blade, Livewire 3, Docker), 12 interfaces arquitectónicas y 48 animaciones avanzadas con Anime.js v4 desde el repositorio componentesxd.
---

# Skill: `componentesxd-vault`

Utiliza esta skill cuando el usuario solicite crear, mejorar o integrar tablas de datos (bordes redondeados, styless, content-fit, filas flotantes, interactivas, con acciones CRUD, con formulario editable o con filtros), toasters, botones, tarjetas, formularios, modales, menús estilo Microsoft Mega-Menu, insignias de telemetría, stacks Docker o animaciones con **Anime.js v4**.

## 1. Flujo de Trabajo Copy & Paste (Sin NPM Lock-in)

1. **Tokens de Diseño (12 Interfaces)**:
   - Copia `styles/tokens.css` (o `styles/_tokens.scss`) al proyecto destino.
   - Activa cualquiera de las 12 interfaces definiendo `data-theme="<id>"` en `<html>`:
     `geist-dark`, `swiss-editorial`, `teenage-industrial`, `linear-obsidian`, `carbon-ibm`, `bauhaus-brutalist`, `tokyo-telemetry`, `nordic-paper`, `aerospace-hud`, `fintech-emerald`, `solarized-craft`, `ceramic-light`.

2. **Selección de Componentes (`components/<categoria>/variants/<variante>/`)**:
   - Cada una de las **66 variantes** incluye los 10 archivos listos para copiar:
     - `styles.css` y `_styles.scss`
     - `component.js` (Vanilla JS ES2024)
     - `Component.tsx` (React 19)
     - `Component.vue` (Vue 3 `<script setup>`)
     - `Component.svelte` (Svelte 5 Runes)
     - `component.angular.ts` (Angular 18+ Standalone)
     - `Component.astro` (Astro 5)
     - `component.blade.php` (Laravel Blade)
     - `ComponentLivewire.php` (Livewire 3)
     - `ComponentRenderer.php` (PHP 8.3 OOP)

3. **Variantes Clave de Tablas (`components/tables/variants/`)**:
   - `modern-rounded`: Bordes redondeados modernos (`16px`) y cabeceras suaves.
   - `styless-minimal`: Sin bordes laterales ni fondos de celda, pura tipografía.
   - `content-fit`: Ajustada estrictamente al ancho del contenido (`width: max-content`).
   - `floating-rows`: Filas separadas como tarjetas flotantes (`border-spacing: 0 10px`).
   - `interactive-sort`: Ordenamiento por columna en vivo + checkboxes de selección múltiple.
   - `crud-actions`: Botones en vivo para agregar, duplicar y eliminar filas con Anime.js.
   - `inline-form`: Celdas con inputs y selects que calculan subtotales en tiempo real.
   - `filterable-search`: Barra de búsqueda instantánea + filtros por estado.
   - `expandable-master`: Filas expandibles con panel de detalle JSON.
   - `striped-ledger`: Tabla cebra de alta densidad con sumatoria en `tfoot`.

4. **Animaciones Modulares Anime.js v4 (`animations/<capitulo>/<preset>.js`)**:
   - Basadas en la API oficial de Anime.js v4:
     ```js
     import { animate, stagger, createTimeline, createTimer, createSpring, steps, svg } from 'animejs';
     ```
   - Capítulos disponibles en `animations/`:
     - `targets-properties/`
     - `keyframes-stagger/`
     - `easings-springs/`
     - `timelines-workflows/`
     - `svg-animations/` (`svg.createDrawable`, `svg.morphTo`, `svg.createMotionPath`)
     - `timers-calculators/` (`createTimer`)
     - `loaders-skeletons/`
     - `stackers-decomposition/`
