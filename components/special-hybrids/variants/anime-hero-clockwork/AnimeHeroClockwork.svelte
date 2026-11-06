<script lang="ts">
import { mountAnimeHeroClockwork } from './anime-hero-clockwork.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAnimeHeroClockwork(node) }; }
</script>
<section class="cxd-special cxd-special--stages" data-cxd-control="anime-hero-clockwork" use:control><header><small>RELOJERÍA CINÉTICA</small><h3>Relojería cinética</h3></header><p data-copy>Escenario reiniciado</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Relojería</button><button type="button" data-item="1" aria-pressed="false">Explosión</button><button type="button" data-item="2" aria-pressed="false">Vórtice</button></div><strong data-output>Relojería</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Iniciar coreografía</button><button type="button" data-reset>Restaurar</button></div><span role="status">Escenario reiniciado</span></section>
