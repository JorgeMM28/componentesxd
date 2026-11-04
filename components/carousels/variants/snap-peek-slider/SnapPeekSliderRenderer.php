<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSnapPeekSlider(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="snap-peek-slider" aria-label="Carrusel con vista lateral"><div class="cxd-peek" data-track tabindex="0"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-progress" aria-hidden="true"><span data-progress></span></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div>
<script type="module">
import { mountSnapPeekSlider } from '/assets/snap-peek-slider.js';
document.querySelectorAll('[data-cxd-control="snap-peek-slider"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSnapPeekSlider(root); });
</script>
HTML; }
