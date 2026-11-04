<script lang="ts">
import { mountHoldConfirmSafety } from './hold-confirm-safety.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountHoldConfirmSafety(node) }; }
</script>
<div class="cxd-control" data-cxd-control="hold-confirm-safety" use:control><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>
