{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-files" data-cxd-control="file-explorer"><header><small>/PROYECTO</small><h3 data-file-title>src/components</h3></header><nav data-tree><button type="button" data-folder="src">▾ src</button><button type="button" data-file="LivePreview.astro">　LivePreview.astro</button><button type="button" data-file="tokens.css">　tokens.css</button><button type="button" data-file="README.md">README.md</button></nav><pre data-file-preview>Selecciona un archivo para ver su resumen.</pre><span role="status">4 elementos indexados.</span></section>
<script type="module">
import { mountFileExplorer } from '/assets/file-explorer.js';
document.querySelectorAll('[data-cxd-control="file-explorer"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFileExplorer(root); });
</script>
