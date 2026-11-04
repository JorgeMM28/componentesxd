<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderExpandableDrawerCard(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="expandable-drawer-card"><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p></div>
<script type="module">
import { mountExpandableDrawerCard } from '/assets/expandable-drawer-card.js';
document.querySelectorAll('[data-cxd-control="expandable-drawer-card"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountExpandableDrawerCard(root); });
</script>
HTML; }
