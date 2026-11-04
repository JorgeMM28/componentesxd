<script lang="ts">
import { mountModernRoundedForm } from './modern-rounded-form.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountModernRoundedForm(node) }; }
</script>
<div class="cxd-form" data-cxd-control="modern-rounded-form" use:control><form data-form><label>Correo electrónico <input type="email" data-email required value="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span></div>
