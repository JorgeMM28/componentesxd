{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-widget" data-cxd-control="before-after-split"><div class="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" value="50" data-range /></label><span role="status">50%</span></div>
<script type="module">
import { mountBeforeAfterSplit } from '/assets/before-after-split.js';
document.querySelectorAll('[data-cxd-control="before-after-split"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountBeforeAfterSplit(root); });
</script>
