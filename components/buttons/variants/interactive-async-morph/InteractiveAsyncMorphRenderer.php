<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInteractiveAsyncMorph(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="interactive-async-morph"><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div>
<script type="module">
import { mountInteractiveAsyncMorph } from '/assets/interactive-async-morph.js';
document.querySelectorAll('[data-cxd-control="interactive-async-morph"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveAsyncMorph(root); });
</script>
HTML; }
