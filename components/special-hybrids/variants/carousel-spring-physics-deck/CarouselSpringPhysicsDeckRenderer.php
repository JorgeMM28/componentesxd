<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCarouselSpringPhysicsDeck(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="carousel-spring-physics-deck"><h3>Mazo de inversiones</h3><div class="cxd-special__scene" data-card><small data-label></small><strong data-value></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div>
<script type="module">
import { mountCarouselSpringPhysicsDeck } from '/assets/carousel-spring-physics-deck.js';
document.querySelectorAll('[data-cxd-control="carousel-spring-physics-deck"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCarouselSpringPhysicsDeck(root); });
</script>
HTML; }
