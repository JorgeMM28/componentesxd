<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderMicrosoftCascadeNav(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="microsoft-cascade-nav"><button type="button" data-category="Componentes" aria-expanded="false">Componentes</button><button type="button" data-category="Animaciones" aria-expanded="false">Animaciones</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-group="Componentes" data-leaf="Tablas">Tablas</button><button type="button" data-group="Componentes" data-leaf="Botones">Botones</button><button type="button" data-group="Componentes" data-leaf="Formularios">Formularios</button><button type="button" data-group="Animaciones" data-leaf="SVG" hidden>SVG</button><button type="button" data-group="Animaciones" data-leaf="Timelines" hidden>Timelines</button></div><span role="status">Selecciona una categoría</span></div>
<script type="module">
import { mountMicrosoftCascadeNav } from '/assets/microsoft-cascade-nav.js';
document.querySelectorAll('[data-cxd-control="microsoft-cascade-nav"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMicrosoftCascadeNav(root); });
</script>
HTML; }
