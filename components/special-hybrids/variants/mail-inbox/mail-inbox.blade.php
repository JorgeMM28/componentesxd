{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="mail-inbox"><h3>Bandeja de correo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Archivar mensaje</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Bandeja restaurada</span></div>
<script type="module">
import { mountMailInbox } from '/assets/mail-inbox.js';
document.querySelectorAll('[data-cxd-control="mail-inbox"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMailInbox(root); });
</script>
