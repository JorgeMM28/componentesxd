{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-nav" data-cxd-control="desktop-menubar"><button type="button" data-menu-trigger aria-expanded="false">Archivo</button><button type="button" data-menu-trigger aria-expanded="false">Edición</button><button type="button" data-menu-trigger aria-expanded="false">Git</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-command="Nuevo">Nuevo</button><button type="button" data-command="Guardar">Guardar</button><button type="button" data-command="Exportar">Exportar</button></div><span role="status">Selecciona un menú</span></div>
<script type="module">
import { mountDesktopMenubar } from '/assets/desktop-menubar.js';
document.querySelectorAll('[data-cxd-control="desktop-menubar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDesktopMenubar(root); });
</script>
