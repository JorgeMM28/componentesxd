<script lang="ts">
import { mountMailInbox } from './mail-inbox.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountMailInbox(node) }; }
</script>
<section class="cxd-special cxd-special--telemetry" data-cxd-control="mail-inbox" use:control><header><small>BANDEJA DE CORREO</small><h3>Bandeja de correo</h3></header><p data-copy>Bandeja restaurada</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Propuesta</button><button type="button" data-item="1" aria-pressed="false">Informe</button><button type="button" data-item="2" aria-pressed="false">Invitación</button></div><strong data-output>Propuesta</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Archivar mensaje</button><button type="button" data-reset>Restaurar</button></div><span role="status">Bandeja restaurada</span></section>
