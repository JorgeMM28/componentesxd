{{--
  ============================================================================
  COMPONENTESXD — 06. Technical Wireframe Empty State (LARAVEL BLADE)
  Archivo: components/badges-data/variants/empty-state-blueprint/empty-state-blueprint.blade.php
  Uso: <x-cxd.badges-data.empty-state-blueprint title="06. Technical Wireframe Empty State" />
  ============================================================================
--}}
@props([
    'title' => '06. Technical Wireframe Empty State',
    'badge' => 'EMPTY STATE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-empty-state-blueprint']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-empty-state-blueprint__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-empty-state-blueprint__body">
        <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
        {{ $slot }}
    </div>
</section>
