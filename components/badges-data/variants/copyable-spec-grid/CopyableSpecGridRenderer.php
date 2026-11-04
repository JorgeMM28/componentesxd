<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCopyableSpecGrid(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="copyable-spec-grid"><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span></div>
<script type="module">
import { mountCopyableSpecGrid } from '/assets/copyable-spec-grid.js';
document.querySelectorAll('[data-cxd-control="copyable-spec-grid"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCopyableSpecGrid(root); });
</script>
HTML; }
