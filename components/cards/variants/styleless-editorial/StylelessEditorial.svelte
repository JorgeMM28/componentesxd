<script lang="ts">
import { mountStylelessEditorial } from './styleless-editorial.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStylelessEditorial(node) }; }
</script>
<div class="cxd-card cxd-card--editorial" data-cxd-control="styleless-editorial" use:control><span>ENSAYO ARQUITECTÓNICO // Nº 04</span><h3>La eliminación del contenedor innecesario</h3><p>La jerarquía tipográfica y el espacio definen el bloque.</p><button type="button" data-read>Leer especificación</button><span role="status">Listo para explorar</span></div>
