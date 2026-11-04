<script lang="ts">
import { mountInteractiveOtpPin } from './interactive-otp-pin.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveOtpPin(node) }; }
</script>
<div class="cxd-form" data-cxd-control="interactive-otp-pin" use:control><div class="cxd-form__otp"><input inputmode="numeric" maxlength="1" aria-label="Dígito 1" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 2" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 3" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 4" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 5" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 6" /></div><button type="button" data-generate>Generar código</button><span role="status">Introduce 6 dígitos</span></div>
