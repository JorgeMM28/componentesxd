<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css en tus assets.
class Brutalist3dPushWire extends Component { public int $count = 0; public bool $on = true; public function push(): void { $this->count++; } public function toggle(): void { $this->on = !$this->on; } public function render(): string { return <<<'HTML'
<div class="cxd-mechanical"><button type="button" class="cxd-mechanical__button" wire:click="push">Presión física 3D ({{ $count }})</button><button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" wire:click="toggle" aria-pressed="{{ $on ? 'true' : 'false' }}">Interruptor mecánico: {{ $on ? 'ON' : 'OFF' }}</button></div>
HTML; } }
