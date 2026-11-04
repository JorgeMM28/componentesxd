<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderContentFitPillBanner(): string { return <<<'HTML'
<div class="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner"><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span></div>
<script type="module">
import { mountContentFitPillBanner } from '/assets/content-fit-pill-banner.js';
document.querySelectorAll('[data-cxd-control="content-fit-pill-banner"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountContentFitPillBanner(root); });
</script>
HTML; }
