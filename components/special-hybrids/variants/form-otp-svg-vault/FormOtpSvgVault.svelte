<script lang="ts">
import { mountFormOtpSvgVault } from './form-otp-svg-vault.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFormOtpSvgVault(node) }; }
</script>
<div class="cxd-special" data-cxd-control="form-otp-svg-vault" use:control><h3>Bóveda OTP</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Validar código</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Esperando código</span></div>
