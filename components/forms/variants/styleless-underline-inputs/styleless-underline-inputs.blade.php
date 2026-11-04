{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs"><label>Título del documento <input type="text" data-input value="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span></div>
<script type="module">
import { mountStylelessUnderlineInputs } from '/assets/styleless-underline-inputs.js';
document.querySelectorAll('[data-cxd-control="styleless-underline-inputs"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStylelessUnderlineInputs(root); });
</script>
