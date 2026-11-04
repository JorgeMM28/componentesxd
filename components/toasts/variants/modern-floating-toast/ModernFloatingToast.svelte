<script lang="ts">
import { mountModernFloatingToast } from './modern-floating-toast.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountModernFloatingToast(node) }; }
</script>
<div class="cxd-toast" data-cxd-control="modern-floating-toast" use:control><strong>Copia de seguridad completada con éxito</strong><p>14.2 GB sincronizados en el almacenamiento encriptado.</p><button type="button" data-replay>Reiniciar barra</button><progress data-progress max="100" value="100" aria-label="Tiempo restante"></progress><span role="status">Notificación activa</span></div>
