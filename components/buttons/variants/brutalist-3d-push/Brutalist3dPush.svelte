<script lang="ts">
import { mountBrutalist3dPush } from './brutalist-3d-push.js';
import './styles.css';
function mechanical(node: HTMLElement) { const unmount = mountBrutalist3dPush(node); return { destroy: unmount }; }
</script>
<div class="cxd-mechanical" data-mechanical use:mechanical>
  <button type="button" class="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button>
  <button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button>
</div>
