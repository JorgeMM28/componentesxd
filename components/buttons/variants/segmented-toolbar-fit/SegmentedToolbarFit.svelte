<script lang="ts">
import './styles.css';
const items = [["one","Vista Tabla","Vista de Tabla Estructurada (10 Variantes)"],["two","Vista Tarjetas","Vista de Tarjetas Bento (8 Variantes)"],["three","Vista Grafo 3D","Vista de Grafo Vectorial 3D"],["four","JSON Raw","Inspector JSON Raw en Vivo"]];
let active = $state(0);
</script>
<div class="cxd-segments">{#each items as [kind, label], index (kind)}<button type="button" class="cxd-segments__button cxd-segments__button--{kind}" aria-pressed={active === index} onclick={() => active = index}>{label}</button>{/each}<span class="cxd-segments__status" role="status">{active < 0 ? 'MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)' : 'MODO ACTIVO: ' + items[active][2]}</span></div>
