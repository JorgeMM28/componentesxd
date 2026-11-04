<script lang="ts">
import { mountUploadProgressToaster } from './upload-progress-toaster.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountUploadProgressToaster(node) }; }
</script>
<div class="cxd-toast" data-cxd-control="upload-progress-toaster" use:control><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span></div>
