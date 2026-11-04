<script lang="ts">
import { mountModernGlassModal } from './modern-glass-modal.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountModernGlassModal(node) }; }
</script>
<div class="cxd-dialog" data-cxd-control="modern-glass-modal" use:control><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div class="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog></div>
