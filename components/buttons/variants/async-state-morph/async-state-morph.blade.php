{{--
  ============================================================================
  COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (LARAVEL BLADE)
  Archivo: components/buttons/variants/async-state-morph/async-state-morph.blade.php
  Uso: <x-cxd.buttons.async-state-morph title="04. Async 3-State Morph Button (Idle -> Run -> Done)" />
  ============================================================================
--}}
@props([
    'title' => '04. Async 3-State Morph Button (Idle -> Run -> Done)',
    'badge' => 'STATE MACHINE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-async-state-morph']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-async-state-morph__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-async-state-morph__body">
        <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
        {{ $slot }}
    </div>
</section>
