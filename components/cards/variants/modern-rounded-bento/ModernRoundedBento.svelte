<script lang="ts">
import { mountModernRoundedBento } from './modern-rounded-bento.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountModernRoundedBento(node) }; }
</script>
<div class="cxd-card" data-cxd-control="modern-rounded-bento" use:control><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div>
