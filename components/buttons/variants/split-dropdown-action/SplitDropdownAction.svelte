<script lang="ts">
import { mountSplitDropdownAction } from './split-dropdown-action.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSplitDropdownAction(node) }; }
</script>
<div class="cxd-control" data-cxd-control="split-dropdown-action" use:control><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div>
