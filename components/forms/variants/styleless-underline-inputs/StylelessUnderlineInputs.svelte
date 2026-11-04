<script lang="ts">
import { mountStylelessUnderlineInputs } from './styleless-underline-inputs.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStylelessUnderlineInputs(node) }; }
</script>
<div class="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs" use:control><label>Título del documento <input type="text" data-input value="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span></div>
