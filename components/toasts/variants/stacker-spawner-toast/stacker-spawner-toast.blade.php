{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-toast" data-cxd-control="stacker-spawner-toast"><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div class="cxd-toast__list" data-list aria-live="polite"></div></div>
<script type="module">
import { mountStackerSpawnerToast } from '/assets/stacker-spawner-toast.js';
document.querySelectorAll('[data-cxd-control="stacker-spawner-toast"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStackerSpawnerToast(root); });
</script>
