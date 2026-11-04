<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderModernGlassModal(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="modern-glass-modal"><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div class="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog></div>
<script type="module">
import { mountModernGlassModal } from '/assets/modern-glass-modal.js';
document.querySelectorAll('[data-cxd-control="modern-glass-modal"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernGlassModal(root); });
</script>
HTML; }
