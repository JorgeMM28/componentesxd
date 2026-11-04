{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-table " data-cxd-control="modern-rounded"><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>
<script type="module">
import { mountModernRounded } from '/assets/modern-rounded.js';
document.querySelectorAll('[data-cxd-control="modern-rounded"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRounded(root); });
</script>
