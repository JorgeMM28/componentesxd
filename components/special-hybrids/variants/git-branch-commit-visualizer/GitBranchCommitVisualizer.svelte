<script lang="ts">
import { mountGitBranchCommitVisualizer } from './git-branch-commit-visualizer.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountGitBranchCommitVisualizer(node) }; }
</script>
<div class="cxd-special" data-cxd-control="git-branch-commit-visualizer" use:control><h3>Grafo de ramas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Crear commit</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Rama restaurada</span></div>
