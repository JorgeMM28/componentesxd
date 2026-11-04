<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderStylelessMinimal(): string { return <<<'HTML'
<div class="cxd-table cxd-table--minimal" data-cxd-control="styleless-minimal"><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>
<script type="module">
import { mountStylelessMinimal } from '/assets/styleless-minimal.js';
document.querySelectorAll('[data-cxd-control="styleless-minimal"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStylelessMinimal(root); });
</script>
HTML; }
