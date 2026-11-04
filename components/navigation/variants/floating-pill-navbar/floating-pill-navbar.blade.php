{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span></div>
<script type="module">
import { mountFloatingPillNavbar } from '/assets/floating-pill-navbar.js';
document.querySelectorAll('[data-cxd-control="floating-pill-navbar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFloatingPillNavbar(root); });
</script>
