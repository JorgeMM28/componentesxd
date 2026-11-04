<script lang="ts">
import { mountLiveValidationMeter } from './live-validation-meter.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountLiveValidationMeter(node) }; }
</script>
<div class="cxd-form" data-cxd-control="live-validation-meter" use:control><label>Contraseña <input type="password" data-password autocomplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span></div>
