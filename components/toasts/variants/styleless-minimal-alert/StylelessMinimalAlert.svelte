<script lang="ts">
import { mountStylelessMinimalAlert } from './styleless-minimal-alert.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStylelessMinimalAlert(node) }; }
</script>
<div class="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" use:control role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p></div>
