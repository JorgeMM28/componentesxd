{{--
  ============================================================================
  COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (LARAVEL BLADE)
  Archivo: components/cards/variants/hardware-module-card/hardware-module-card.blade.php
  Uso: <x-cxd.cards.hardware-module-card title="08. Teenage-Style Hardware Synth Module Card" />
  ============================================================================
--}}
@props([
    'title' => '08. Teenage-Style Hardware Synth Module Card',
    'badge' => 'INDUSTRIAL UI',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-hardware-module-card']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-hardware-module-card__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-hardware-module-card__body">
        <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
        {{ $slot }}
    </div>
</section>
