<?php
declare(strict_types=1);
// Incluye styles.css y monta styleless-text-links.js como módulo en el navegador.
function renderStylelessTextLinks(): string {
    return <<<'HTML'
<div class="cxd-text-links" data-cxd-text-links>
  <button type="button" class="cxd-text-links__button cxd-text-links__button--documentation" data-message="Abriendo especificación técnica v4.2..." aria-pressed="false">Explorar Documentación Técnica</button>
  <button type="button" class="cxd-text-links__button cxd-text-links__button--download" data-message="Descargando manifiesto raw (42 KB)..." aria-pressed="false">Descargar Especificación Raw</button>
  <span class="cxd-text-links__status" role="status">Selecciona una opción</span>
</div>
<script type="module">
import { mountStylelessTextLinks } from '/assets/styleless-text-links.js';
document.querySelectorAll('[data-cxd-text-links]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStylelessTextLinks(root); });
</script>
HTML;
}
