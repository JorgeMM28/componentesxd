<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderLaravelLivewireFpm(): string { return <<<'HTML'
<section class="cxd-docker-flow" data-cxd-control="laravel-livewire-fpm"><h3>Laravel + Livewire</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Nginx FastCGI</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">PHP-FPM con OPcache</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Worker Horizon y Redis</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
<script type="module">
import { mountLaravelLivewireFpm } from '/assets/laravel-livewire-fpm.js';
document.querySelectorAll('[data-cxd-control="laravel-livewire-fpm"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountLaravelLivewireFpm(root); });
</script>
HTML; }
