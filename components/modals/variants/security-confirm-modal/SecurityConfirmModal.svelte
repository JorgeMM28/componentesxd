<script lang="ts">
import { mountSecurityConfirmModal } from './security-confirm-modal.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSecurityConfirmModal(node) }; }
</script>
<div class="cxd-dialog" data-cxd-control="security-confirm-modal" use:control><button type="button" data-open>Eliminar recurso</button><span role="status">Sin cambios</span><dialog aria-label="Confirmar eliminación"><h3>Confirmar eliminación</h3><p>Escribe ELIMINAR para habilitar la acción de demostración.</p><label>Confirmación <input type="text" data-confirm-input autocomplete="off" /></label><div class="cxd-dialog__actions"><button type="button" data-delete disabled>Eliminar</button><button type="button" data-close>Cancelar</button></div></dialog></div>
