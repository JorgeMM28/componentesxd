{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-downloads" data-cxd-control="downloads-center"><header><small>TRANSFERENCIAS</small><h3>Centro de descargas</h3></header><div data-downloads><label>kit-ui.zip <progress max="100" value="64"></progress><b>64%</b></label><label>assets.mov <progress max="100" value="28"></progress><b>28%</b></label></div><button type="button" data-start>Iniciar / continuar</button><span role="status">2 transferencias en espera.</span></section>
<script type="module">
import { mountDownloadsCenter } from '/assets/downloads-center.js';
document.querySelectorAll('[data-cxd-control="downloads-center"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDownloadsCenter(root); });
</script>
