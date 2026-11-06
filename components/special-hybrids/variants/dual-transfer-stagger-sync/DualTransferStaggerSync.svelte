<script lang="ts">
import { mountDualTransferStaggerSync } from './dual-transfer-stagger-sync.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDualTransferStaggerSync(node) }; }
</script>
<section class="cxd-special cxd-special--telemetry" data-cxd-control="dual-transfer-stagger-sync" use:control><header><small>SINCRONIZADOR DE PERMISOS</small><h3>Sincronizador de permisos</h3></header><p data-copy>Listas restauradas</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">WAF</button><button type="button" data-item="1" aria-pressed="false">Brotli</button><button type="button" data-item="2" aria-pressed="false">HTTP/3</button></div><strong data-output>WAF</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Transferir módulo</button><button type="button" data-reset>Restaurar</button></div><span role="status">Listas restauradas</span></section>
