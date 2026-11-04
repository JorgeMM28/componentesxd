{{--
  ============================================================================
  COMPONENTESXD — 06. Precision Numeric Range & Step Control (LARAVEL BLADE)
  Archivo: components/forms/variants/tactile-range-slider/tactile-range-slider.blade.php
  Uso: <x-cxd.forms.tactile-range-slider title="06. Precision Numeric Range & Step Control" />
  ============================================================================
--}}
@props([
    'title' => '06. Precision Numeric Range & Step Control',
    'badge' => 'RANGE / STEPPER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-tactile-range-slider']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-tactile-range-slider__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-tactile-range-slider__body">
        <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
        {{ $slot }}
    </div>
</section>
