<script lang="ts">
import { mountMailInbox } from './mail-inbox.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountMailInbox(node) }; }
</script>
<div class="cxd-special" data-cxd-control="mail-inbox" use:control><h3>Bandeja de correo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Archivar mensaje</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Bandeja restaurada</span></div>
