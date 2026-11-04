<script lang="ts">
import { mountMobileTouchTabbar } from './mobile-touch-tabbar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountMobileTouchTabbar(node) }; }
</script>
<div class="cxd-nav cxd-nav--mobile" data-cxd-control="mobile-touch-tabbar" use:control><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Biblioteca" aria-pressed="false">Biblioteca</button><button type="button" data-destination="Motion" aria-pressed="false">Motion</button><button type="button" data-destination="Métricas" aria-pressed="false">Métricas</button><span role="status">Vista activa: Inicio</span></div>
