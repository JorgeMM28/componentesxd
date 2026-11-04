{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-toast" data-cxd-control="upload-progress-toaster"><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span></div>
<script type="module">
import { mountUploadProgressToaster } from '/assets/upload-progress-toaster.js';
document.querySelectorAll('[data-cxd-control="upload-progress-toaster"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountUploadProgressToaster(root); });
</script>
