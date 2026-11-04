<script lang="ts">
import { mountAvatarStackInteractive } from './avatar-stack-interactive.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAvatarStackInteractive(node) }; }
</script>
<div class="cxd-data" data-cxd-control="avatar-stack-interactive" use:control><button type="button" class="cxd-data__avatar" data-name="Elena Rostova" data-role="Arquitectura UI" aria-pressed="true">ER</button><button type="button" class="cxd-data__avatar" data-name="Marco Kovacs" data-role="Ingeniería de sistemas" aria-pressed="false">MK</button><button type="button" class="cxd-data__avatar" data-name="Sofía Vance" data-role="Diseño de movimiento" aria-pressed="false">SV</button><span role="status">Elena Rostova · Arquitectura UI</span></div>
