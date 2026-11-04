<script lang="ts">
import { mountTactileSwitchesSliders } from './tactile-switches-sliders.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountTactileSwitchesSliders(node) }; }
</script>
<div class="cxd-form" data-cxd-control="tactile-switches-sliders" use:control><label><input type="checkbox" checked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span></div>
