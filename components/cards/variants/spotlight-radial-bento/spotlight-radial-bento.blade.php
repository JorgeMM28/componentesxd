{{--
  ============================================================================
  COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (LARAVEL BLADE)
  Archivo: components/cards/variants/spotlight-radial-bento/spotlight-radial-bento.blade.php
  Uso: <x-cxd.cards.spotlight-radial-bento title="01. Cursor-Tracking Radial Spotlight Card" />
  ============================================================================
--}}
@props([
    'title' => '01. Cursor-Tracking Radial Spotlight Card',
    'badge' => 'RADIAL LIGHT',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-spotlight-radial-bento']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-spotlight-radial-bento__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-spotlight-radial-bento__body">
        <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
        {{ $slot }}
    </div>
</section>
