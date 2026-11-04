<script lang="ts">
import { mountFloatingLabelInputs } from './floating-label-inputs.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingLabelInputs(node) }; }
</script>
<div class="cxd-form" data-cxd-control="floating-label-inputs" use:control><label class="cxd-form__float"><span>Nombre del cluster</span><input type="text" data-input value="us-east-production-01" /></label><span role="status">Etiqueta flotante</span></div>
