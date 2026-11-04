<script lang="ts">
import { mountMicrosoftCascadeNav } from './microsoft-cascade-nav.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountMicrosoftCascadeNav(node) }; }
</script>
<div class="cxd-nav" data-cxd-control="microsoft-cascade-nav" use:control><button type="button" data-category="Componentes" aria-expanded="false">Componentes</button><button type="button" data-category="Animaciones" aria-expanded="false">Animaciones</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-group="Componentes" data-leaf="Tablas">Tablas</button><button type="button" data-group="Componentes" data-leaf="Botones">Botones</button><button type="button" data-group="Componentes" data-leaf="Formularios">Formularios</button><button type="button" data-group="Animaciones" data-leaf="SVG" hidden>SVG</button><button type="button" data-group="Animaciones" data-leaf="Timelines" hidden>Timelines</button></div><span role="status">Selecciona una categoría</span></div>
