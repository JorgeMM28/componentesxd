<script lang="ts">
import { mountStackerSpawnerToast } from './stacker-spawner-toast.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStackerSpawnerToast(node) }; }
</script>
<div class="cxd-toast" data-cxd-control="stacker-spawner-toast" use:control><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div class="cxd-toast__list" data-list aria-live="polite"></div></div>
