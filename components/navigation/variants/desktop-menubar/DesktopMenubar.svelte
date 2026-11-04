<script lang="ts">
import { mountDesktopMenubar } from './desktop-menubar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDesktopMenubar(node) }; }
</script>
<div class="cxd-nav" data-cxd-control="desktop-menubar" use:control><button type="button" data-menu-trigger aria-expanded="false">Archivo</button><button type="button" data-menu-trigger aria-expanded="false">Edición</button><button type="button" data-menu-trigger aria-expanded="false">Git</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-command="Nuevo">Nuevo</button><button type="button" data-command="Guardar">Guardar</button><button type="button" data-command="Exportar">Exportar</button></div><span role="status">Selecciona un menú</span></div>
