{{-- Copia styles.css y modern-rounded-pills.js a tus assets y ajusta las URLs. --}}
<div class="cxd-pills" data-cxd-pills>
  <button type="button" class="cxd-pills__button cxd-pills__button--primary" data-message="Despliegue Iniciado" aria-pressed="false">Botón Píldora Moderno</button>
  <button type="button" class="cxd-pills__button cxd-pills__button--soft" data-message="Modo Previsualización Activo" aria-pressed="false">Secundario Suave</button>
  <button type="button" class="cxd-pills__button cxd-pills__button--outline" data-message="Sincronizado con Éxito" aria-pressed="false">Contorno Redondeado</button>
  <span class="cxd-pills__status" role="status">Selecciona una acción</span>
</div>
<script type="module">
import { mountModernRoundedPills } from '/assets/modern-rounded-pills.js';
document.querySelectorAll('[data-cxd-pills]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRoundedPills(root); });
</script>
