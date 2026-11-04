<script lang="ts">
import { mountCompactNavigationRail } from './compact-navigation-rail.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCompactNavigationRail(node) }; }
</script>
<div class="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail" use:control><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span></div>
