<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderThumbnailFilmstrip(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="thumbnail-filmstrip"><div class="cxd-carousel__item cxd-film-main" data-main>✦ Aurora</div><div class="cxd-filmstrip" aria-label="Seleccionar imagen"><button type="button" data-thumb="✦ Aurora" aria-pressed="true">✦ Aurora</button><button type="button" data-thumb="◉ Órbita" aria-pressed="false">◉ Órbita</button><button type="button" data-thumb="✳ Nébula" aria-pressed="false">✳ Nébula</button></div><span role="status">Imagen: Aurora</span></div>
<script type="module">
import { mountThumbnailFilmstrip } from '/assets/thumbnail-filmstrip.js';
document.querySelectorAll('[data-cxd-control="thumbnail-filmstrip"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountThumbnailFilmstrip(root); });
</script>
HTML; }
