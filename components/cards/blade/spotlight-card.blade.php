{{--
  ============================================================================
  COMPONENTESXD — SPOTLIGHT BENTO CARD (LARAVEL BLADE / LIVEWIRE)
  Archivo: components/cards/blade/spotlight-card.blade.php
  ============================================================================
--}}
@props([
    'tag' => 'METRIC',
    'title' => '',
    'metric' => '0',
    'delta' => '+0%',
    'description' => '',
])

<article {{ $attributes->merge(['class' => 'cxd-spotlight-card']) }}>
    <div class="cxd-card-header">
        <span class="cxd-card-tag">{{ $tag }}</span>
        <span class="cxd-card-delta">{{ $delta }}</span>
    </div>
    <h4>{{ $title }}</h4>
    <div class="cxd-card-metric">{{ $metric }}</div>
    <p class="cxd-card-desc">{{ $description }}</p>
</article>

