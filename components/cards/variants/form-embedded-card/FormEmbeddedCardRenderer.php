<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFormEmbeddedCard(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="form-embedded-card"><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" value="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p></div>
<script type="module">
import { mountFormEmbeddedCard } from '/assets/form-embedded-card.js';
document.querySelectorAll('[data-cxd-control="form-embedded-card"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFormEmbeddedCard(root); });
</script>
HTML; }
