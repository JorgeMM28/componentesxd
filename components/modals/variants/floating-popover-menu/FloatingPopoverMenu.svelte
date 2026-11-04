<script lang="ts">
import { mountFloatingPopoverMenu } from './floating-popover-menu.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingPopoverMenu(node) }; }
</script>
<div class="cxd-dialog" data-cxd-control="floating-popover-menu" use:control><button type="button" data-trigger aria-expanded="false">Abrir menú contextual</button><div class="cxd-dialog__popover" data-popover hidden><div class="cxd-dialog__list"><button type="button" data-action="Editar">Editar</button><button type="button" data-action="Duplicar">Duplicar</button><button type="button" data-action="Archivar">Archivar</button></div></div><span role="status">Ninguna acción</span></div>
