{{--
  ============================================================================
  COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (LARAVEL BLADE)
  Archivo: components/cards/variants/pricing-architecture-tier/pricing-architecture-tier.blade.php
  Uso: <x-cxd.cards.pricing-architecture-tier title="05. Architectural Pricing & Quota Tier Card" />
  ============================================================================
--}}
@props([
    'title' => '05. Architectural Pricing & Quota Tier Card',
    'badge' => 'BILLING TIER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-pricing-architecture-tier']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-pricing-architecture-tier__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-pricing-architecture-tier__body">
        <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
        {{ $slot }}
    </div>
</section>
