{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--board" data-cxd-control="media-player"><header><small>REPRODUCTOR MULTIMEDIA</small><h3>Reproductor multimedia</h3></header><p data-copy>Reproductor detenido</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Reproducir</button><button type="button" data-item="1" aria-pressed="false">Retroceder</button><button type="button" data-item="2" aria-pressed="false">Detener</button></div><strong data-output>Reproducir</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Reproducir muestra</button><button type="button" data-reset>Restaurar</button></div><span role="status">Reproductor detenido</span></section>
<script type="module">
import { mountMediaPlayer } from '/assets/media-player.js';
document.querySelectorAll('[data-cxd-control="media-player"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMediaPlayer(root); });
</script>
