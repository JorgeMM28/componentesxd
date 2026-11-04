{{--
  ============================================================================
  COMPONENTESXD — COMMAND PALETTE (LARAVEL BLADE / LIVEWIRE)
  Archivo: components/modals/blade/command-palette.blade.php
  ============================================================================
--}}
@props(['items' => []])

<div class="cxd-cmd-palette">
    <div class="cxd-cmd-header">
        <input type="text" class="cxd-cmd-input" wire:model.live="commandQuery" placeholder="Escribe un comando..." />
        <kbd class="cxd-cmd-kbd">⌘K</kbd>
    </div>
    <div class="cxd-cmd-list">
        @foreach($items as $idx => $item)
            <div class="cxd-cmd-item {{ $idx === 0 ? 'is-active' : '' }}">
                <span>{{ $item['label'] }}</span>
                <kbd class="cxd-cmd-kbd">{{ $item['shortcut'] }}</kbd>
            </div>
        @endforeach
    </div>
</div>

