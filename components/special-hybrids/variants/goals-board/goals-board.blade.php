{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-goals" data-cxd-control="goals-board"><header><small>OBJETIVOS · Q4</small><h3>Tablero de hitos</h3></header><div data-goals><label><input type="checkbox" checked /> Documentación</label><label><input type="checkbox" /> Onboarding</label><label><input type="checkbox" checked /> Accesibilidad</label></div><progress max="3" value="2" data-goal-progress></progress><footer><strong data-goal-count>2 / 3 completados</strong><button type="button" data-complete>Completar siguiente</button></footer><span role="status"></span></section>
<script type="module">
import { mountGoalsBoard } from '/assets/goals-board.js';
document.querySelectorAll('[data-cxd-control="goals-board"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountGoalsBoard(root); });
</script>
