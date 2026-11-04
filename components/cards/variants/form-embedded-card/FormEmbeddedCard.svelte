<script lang="ts">
import { mountFormEmbeddedCard } from './form-embedded-card.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFormEmbeddedCard(node) }; }
</script>
<div class="cxd-card" data-cxd-control="form-embedded-card" use:control><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" value="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p></div>
