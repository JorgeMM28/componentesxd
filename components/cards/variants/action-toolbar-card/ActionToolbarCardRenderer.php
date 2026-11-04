<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderActionToolbarCard(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="action-toolbar-card"><span>REPOSITORIO // CORE-UI</span><h3>Paquete de componentes</h3><p>Una tarjeta con acciones independientes.</p><div class="cxd-card__actions"><button type="button" data-star aria-pressed="false">Estrella (<span data-count>142</span>)</button><button type="button" data-action="Enlace listo para compartir">Compartir</button><button type="button" data-action="Repositorio preparado">Clonar</button></div><span role="status">Listo</span></div>
<script type="module">
import { mountActionToolbarCard } from '/assets/action-toolbar-card.js';
document.querySelectorAll('[data-cxd-control="action-toolbar-card"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountActionToolbarCard(root); });
</script>
HTML; }
