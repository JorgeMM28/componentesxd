<script lang="ts">
import { mountInteractiveAsyncMorph } from './interactive-async-morph.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveAsyncMorph(node) }; }
</script>
<div class="cxd-control" data-cxd-control="interactive-async-morph" use:control><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div>
