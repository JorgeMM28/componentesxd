{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-carousel" data-cxd-control="card-deck-throw"><div class="cxd-deck"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-dismiss>Descartar tarjeta</button><button type="button" data-reset>Restaurar mazo</button></div><span role="status"></span></div>
<script type="module">
import { mountCardDeckThrow } from '/assets/card-deck-throw.js';
document.querySelectorAll('[data-cxd-control="card-deck-throw"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCardDeckThrow(root); });
</script>
