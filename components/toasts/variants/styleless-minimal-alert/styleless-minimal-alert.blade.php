{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p></div>
<script type="module">
import { mountStylelessMinimalAlert } from '/assets/styleless-minimal-alert.js';
document.querySelectorAll('[data-cxd-control="styleless-minimal-alert"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStylelessMinimalAlert(root); });
</script>
