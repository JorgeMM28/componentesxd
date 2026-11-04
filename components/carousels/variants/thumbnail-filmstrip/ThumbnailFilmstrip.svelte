<script lang="ts">
import { mountThumbnailFilmstrip } from './thumbnail-filmstrip.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountThumbnailFilmstrip(node) }; }
</script>
<div class="cxd-carousel" data-cxd-control="thumbnail-filmstrip" use:control><div class="cxd-carousel__item cxd-film-main" data-main>✦ Aurora</div><div class="cxd-filmstrip" aria-label="Seleccionar imagen"><button type="button" data-thumb="✦ Aurora" aria-pressed="true">✦ Aurora</button><button type="button" data-thumb="◉ Órbita" aria-pressed="false">◉ Órbita</button><button type="button" data-thumb="✳ Nébula" aria-pressed="false">✳ Nébula</button></div><span role="status">Imagen: Aurora</span></div>
