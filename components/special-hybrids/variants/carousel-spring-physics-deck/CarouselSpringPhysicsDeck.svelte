<script lang="ts">
import { mountCarouselSpringPhysicsDeck } from './carousel-spring-physics-deck.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCarouselSpringPhysicsDeck(node) }; }
</script>
<div class="cxd-special" data-cxd-control="carousel-spring-physics-deck" use:control><h3>Mazo de inversiones</h3><div class="cxd-special__scene" data-card><small data-label></small><strong data-value></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div>
