<script lang="ts">
import { mountAccordionMultiBento } from './accordion-multi-bento.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAccordionMultiBento(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="accordion-multi-bento" use:control><div class="cxd-widget__row"><button type="button" data-all="open">Expandir todo</button><button type="button" data-all="close">Colapsar todo</button></div><button type="button" data-open="one" aria-expanded="true">Módulo de red</button><div class="cxd-widget__panel" data-panel="one">Latencia: 8 ms</div><button type="button" data-open="two" aria-expanded="false">Módulo de datos</button><div class="cxd-widget__panel" data-panel="two" hidden>Uso: 42 GB</div></div>
