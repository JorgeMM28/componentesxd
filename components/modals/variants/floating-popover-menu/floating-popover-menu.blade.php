{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-dialog" data-cxd-control="floating-popover-menu"><button type="button" data-trigger aria-expanded="false">Abrir menú contextual</button><div class="cxd-dialog__popover" data-popover hidden><div class="cxd-dialog__list"><button type="button" data-action="Editar">Editar</button><button type="button" data-action="Duplicar">Duplicar</button><button type="button" data-action="Archivar">Archivar</button></div></div><span role="status">Ninguna acción</span></div>
<script type="module">
import { mountFloatingPopoverMenu } from '/assets/floating-popover-menu.js';
document.querySelectorAll('[data-cxd-control="floating-popover-menu"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFloatingPopoverMenu(root); });
</script>
