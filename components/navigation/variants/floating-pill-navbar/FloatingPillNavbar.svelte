<script lang="ts">
import { mountFloatingPillNavbar } from './floating-pill-navbar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingPillNavbar(node) }; }
</script>
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar" use:control><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span></div>
