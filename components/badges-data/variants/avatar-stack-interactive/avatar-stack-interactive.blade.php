{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-data" data-cxd-control="avatar-stack-interactive"><button type="button" class="cxd-data__avatar" data-name="Elena Rostova" data-role="Arquitectura UI" aria-pressed="true">ER</button><button type="button" class="cxd-data__avatar" data-name="Marco Kovacs" data-role="Ingeniería de sistemas" aria-pressed="false">MK</button><button type="button" class="cxd-data__avatar" data-name="Sofía Vance" data-role="Diseño de movimiento" aria-pressed="false">SV</button><span role="status">Elena Rostova · Arquitectura UI</span></div>
<script type="module">
import { mountAvatarStackInteractive } from '/assets/avatar-stack-interactive.js';
document.querySelectorAll('[data-cxd-control="avatar-stack-interactive"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAvatarStackInteractive(root); });
</script>
