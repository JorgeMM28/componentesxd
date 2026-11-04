<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFileTreeInspector(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="file-tree-inspector"><div class="cxd-widget__columns"><div class="cxd-widget__list"><strong>src/</strong><div><button type="button" data-file="index.astro">index.astro</button></div><div><button type="button" data-file="tokens.css">tokens.css</button></div></div><div class="cxd-widget__list"><strong>Inspector</strong><p data-output>Selecciona un archivo</p></div></div></div>
<script type="module">
import { mountFileTreeInspector } from '/assets/file-tree-inspector.js';
document.querySelectorAll('[data-cxd-control="file-tree-inspector"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFileTreeInspector(root); });
</script>
HTML; }
