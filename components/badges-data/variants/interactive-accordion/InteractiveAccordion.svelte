<script lang="ts">
import { mountInteractiveAccordion } from './interactive-accordion.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveAccordion(node) }; }
</script>
<div class="cxd-data" data-cxd-control="interactive-accordion" use:control><div class="cxd-data__list"><div class="cxd-data__item"><button type="button" data-open="one" aria-expanded="true">01 · Tokens CSS</button><p data-panel="one">Colores, radios y tipografías mediante variables.</p></div><div class="cxd-data__item"><button type="button" data-open="two" aria-expanded="false">02 · Arquitectura de islas</button><p data-panel="two" hidden>Hidratación selectiva de componentes interactivos.</p></div></div></div>
