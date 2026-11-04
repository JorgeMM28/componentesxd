{{--
  ============================================================================
  COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (LARAVEL BLADE)
  Archivo: components/cards/variants/isometric-layer-card/isometric-layer-card.blade.php
  Uso: <x-cxd.cards.isometric-layer-card title="07. 3D Isometric Perspective Hover Card" />
  ============================================================================
--}}
@props([
    'title' => '07. 3D Isometric Perspective Hover Card',
    'badge' => '3D TILT',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-isometric-layer-card']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-isometric-layer-card__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-isometric-layer-card__body">
        <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
        {{ $slot }}
    </div>
</section>
