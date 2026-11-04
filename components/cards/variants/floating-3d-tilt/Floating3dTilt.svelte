<script lang="ts">
import { mountFloating3dTilt } from './floating-3d-tilt.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloating3dTilt(node) }; }
</script>
<div class="cxd-card" data-cxd-control="floating-3d-tilt" use:control><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div>
