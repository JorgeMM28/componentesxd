{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-nav cxd-nav--mobile" data-cxd-control="mobile-touch-tabbar"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Biblioteca" aria-pressed="false">Biblioteca</button><button type="button" data-destination="Motion" aria-pressed="false">Motion</button><button type="button" data-destination="Métricas" aria-pressed="false">Métricas</button><span role="status">Vista activa: Inicio</span></div>
<script type="module">
import { mountMobileTouchTabbar } from '/assets/mobile-touch-tabbar.js';
document.querySelectorAll('[data-cxd-control="mobile-touch-tabbar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMobileTouchTabbar(root); });
</script>
