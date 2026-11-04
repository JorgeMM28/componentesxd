<script lang="ts">
import { mountBeforeAfterSplit } from './before-after-split.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountBeforeAfterSplit(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="before-after-split" use:control><div class="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" value="50" data-range /></label><span role="status">50%</span></div>
