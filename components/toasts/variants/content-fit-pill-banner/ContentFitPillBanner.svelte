<script lang="ts">
import { mountContentFitPillBanner } from './content-fit-pill-banner.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountContentFitPillBanner(node) }; }
</script>
<div class="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner" use:control><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span></div>
