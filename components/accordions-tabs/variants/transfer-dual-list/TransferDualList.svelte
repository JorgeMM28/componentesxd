<script lang="ts">
import { mountTransferDualList } from './transfer-dual-list.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountTransferDualList(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="transfer-dual-list" use:control><div class="cxd-widget__columns"><div class="cxd-widget__list" data-available><strong>Disponibles</strong><div data-item><span>WAF</span> <button type="button" data-transfer>Activar →</button></div><div data-item><span>Caché</span> <button type="button" data-transfer>Activar →</button></div></div><div class="cxd-widget__list" data-active><strong>Activos</strong></div></div><span role="status">Selecciona un módulo</span></div>
