<script lang="ts">
import { mountActionButtonsToast } from './action-buttons-toast.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountActionButtonsToast(node) }; }
</script>
<div class="cxd-toast" data-cxd-control="action-buttons-toast" use:control><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button></div>
