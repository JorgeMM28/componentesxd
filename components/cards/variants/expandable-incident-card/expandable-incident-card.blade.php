{{--
  ============================================================================
  COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (LARAVEL BLADE)
  Archivo: components/cards/variants/expandable-incident-card/expandable-incident-card.blade.php
  Uso: <x-cxd.cards.expandable-incident-card title="06. Expandable Postmortem & Diagnostics Card" />
  ============================================================================
--}}
@props([
    'title' => '06. Expandable Postmortem & Diagnostics Card',
    'badge' => 'ACCORDION CARD',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-cards-expandable-incident-card']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-cards-expandable-incident-card__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-cards-expandable-incident-card__body">
        <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
        {{ $slot }}
    </div>
</section>
