<script lang="ts">
import './styles.css';
const items = [["documentation","Explorar Documentación Técnica","Abriendo especificación técnica v4.2..."],["download","Descargar Especificación Raw","Descargando manifiesto raw (42 KB)..."]];
let active = $state(-1);
</script>
<div class="cxd-text-links">{#each items as [kind, label], index (kind)}<button type="button" class="cxd-text-links__button cxd-text-links__button--{kind}" aria-pressed={active === index} onclick={() => active = index}>{label}</button>{/each}<span class="cxd-text-links__status" role="status">{active < 0 ? 'Selecciona una opción' : 'RUTA ACTIVA: ' + items[active][2]}</span></div>
