<script lang="ts">
import { mountLaravelLivewireFpm } from './laravel-livewire-fpm.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountLaravelLivewireFpm(node) }; }
</script>
<section class="cxd-docker-flow" data-cxd-control="laravel-livewire-fpm" use:control><h3>Laravel + Livewire</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Nginx FastCGI</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">PHP-FPM con OPcache</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Worker Horizon y Redis</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
