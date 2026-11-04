{{--
  ============================================================================
  COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (LARAVEL BLADE)
  Archivo: components/navigation/variants/scrollspy-toc-rail/scrollspy-toc-rail.blade.php
  Uso: <x-cxd.navigation.scrollspy-toc-rail title="05. Technical Documentation Scrollspy Rail" />
  ============================================================================
--}}
@props([
    'title' => '05. Technical Documentation Scrollspy Rail',
    'badge' => 'TOC RAIL',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-scrollspy-toc-rail']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-scrollspy-toc-rail__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-scrollspy-toc-rail__body">
        <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
        {{ $slot }}
    </div>
</section>
