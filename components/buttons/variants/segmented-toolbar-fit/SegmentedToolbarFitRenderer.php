<?php
declare(strict_types=1);
// Incluye styles.css y monta segmented-toolbar-fit.js como módulo en el navegador.
function renderSegmentedToolbarFit(): string {
    return <<<'HTML'
<div class="cxd-segments" data-cxd-segments>
  <button type="button" class="cxd-segments__button cxd-segments__button--one" data-message="Vista de Tabla Estructurada (10 Variantes)" aria-pressed="true">Vista Tabla</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--two" data-message="Vista de Tarjetas Bento (8 Variantes)" aria-pressed="false">Vista Tarjetas</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--three" data-message="Vista de Grafo Vectorial 3D" aria-pressed="false">Vista Grafo 3D</button>
  <button type="button" class="cxd-segments__button cxd-segments__button--four" data-message="Inspector JSON Raw en Vivo" aria-pressed="false">JSON Raw</button>
  <span class="cxd-segments__status" role="status">MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)</span>
</div>
<script type="module">
import { mountSegmentedToolbarFit } from '/assets/segmented-toolbar-fit.js';
document.querySelectorAll('[data-cxd-segments]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSegmentedToolbarFit(root); });
</script>
HTML;
}
