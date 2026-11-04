{{--
  ============================================================================
  COMPONENTESXD — KINETIC BUTTON (LARAVEL BLADE + LIVEWIRE READY)
  Archivo: components/buttons/blade/kinetic-button.blade.php
  Uso: <x-cxd.kinetic-button variant="shimmer" wire:click="save">Guardar</x-cxd.kinetic-button>
  ============================================================================
--}}
@props([
    'variant' => 'primary',
    'magnetic' => true,
])

<button
    {{ $attributes->merge(['type' => 'button', 'class' => "cxd-btn cxd-btn--{$variant}"]) }}
    @if($magnetic) data-cxd-magnetic="true" @endif
    wire:loading.class="is-loading"
>
    <span class="cxd-btn__spinner"></span>
    <span data-btn-label>{{ $slot }}</span>
</button>

