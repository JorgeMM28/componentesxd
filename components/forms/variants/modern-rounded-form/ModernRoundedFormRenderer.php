<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderModernRoundedForm(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="modern-rounded-form"><form data-form><label>Correo electrónico <input type="email" data-email required value="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span></div>
<script type="module">
import { mountModernRoundedForm } from '/assets/modern-rounded-form.js';
document.querySelectorAll('[data-cxd-control="modern-rounded-form"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRoundedForm(root); });
</script>
HTML; }
