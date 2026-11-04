<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ContentFitPillBannerWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner" wire:ignore><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span>@script
<script>
import('/assets/content-fit-pill-banner.js').then(module => module.mountContentFitPillBanner($wire.$el));
</script>
@endscript</div>
HTML; } }
