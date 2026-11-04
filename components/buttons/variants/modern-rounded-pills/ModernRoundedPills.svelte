<script lang="ts">
import './styles.css';
const items = [["primary","Botón Píldora Moderno","Despliegue Iniciado"],["soft","Secundario Suave","Modo Previsualización Activo"],["outline","Contorno Redondeado","Sincronizado con Éxito"]];
let active = $state(-1);
</script>
<div class="cxd-pills">{#each items as [kind, label], index (kind)}<button type="button" class="cxd-pills__button cxd-pills__button--{kind}" aria-pressed={active === index} onclick={() => active = index}>{label}</button>{/each}<span class="cxd-pills__status" role="status">{active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2]}</span></div>
