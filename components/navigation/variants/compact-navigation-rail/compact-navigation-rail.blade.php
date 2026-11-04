{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail"><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span></div>
<script type="module">
import { mountCompactNavigationRail } from '/assets/compact-navigation-rail.js';
document.querySelectorAll('[data-cxd-control="compact-navigation-rail"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCompactNavigationRail(root); });
</script>
