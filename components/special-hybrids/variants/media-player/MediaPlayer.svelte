<script lang="ts">
import { mountMediaPlayer } from './media-player.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountMediaPlayer(node) }; }
</script>
<section class="cxd-special cxd-player" data-cxd-control="media-player" use:control><header><small>NOW PLAYING</small><h3>Neon Relay</h3></header><div class="cxd-player__equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><label>Progreso <input type="range" min="0" max="100" value="34" data-progress /></label><div class="cxd-special__actions"><button type="button" data-play aria-pressed="false">Reproducir</button><button type="button" data-stop>Detener</button><output data-time>01:12 / 03:30</output></div><span role="status">En pausa.</span></section>
