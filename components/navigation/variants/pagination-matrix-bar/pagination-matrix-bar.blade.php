{{--
  ============================================================================
  COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (LARAVEL BLADE)
  Archivo: components/navigation/variants/pagination-matrix-bar/pagination-matrix-bar.blade.php
  Uso: <x-cxd.navigation.pagination-matrix-bar title="06. Full Pagination + Page Size Selector Bar" />
  ============================================================================
--}}
@props([
    'title' => '06. Full Pagination + Page Size Selector Bar',
    'badge' => 'PAGINATION',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-navigation-pagination-matrix-bar']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-navigation-pagination-matrix-bar__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-navigation-pagination-matrix-bar__body">
        <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
        {{ $slot }}
    </div>
</section>
