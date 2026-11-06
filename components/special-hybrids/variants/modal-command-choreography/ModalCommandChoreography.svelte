<script lang="ts">
import { mountModalCommandChoreography } from './modal-command-choreography.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountModalCommandChoreography(node) }; }
</script>
<section class="cxd-special cxd-special--telemetry" data-cxd-control="modal-command-choreography" use:control><header><small>CONSOLA DE COMANDOS</small><h3>Consola de comandos</h3></header><p data-copy>Consola lista</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Deploy</button><button type="button" data-item="1" aria-pressed="false">Auditoría</button><button type="button" data-item="2" aria-pressed="false">Rollback</button></div><strong data-output>Deploy</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar comando</button><button type="button" data-reset>Restaurar</button></div><span role="status">Consola lista</span></section>
