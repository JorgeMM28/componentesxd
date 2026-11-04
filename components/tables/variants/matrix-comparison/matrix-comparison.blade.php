{{--
  ============================================================================
  COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (LARAVEL BLADE)
  Archivo: components/tables/variants/matrix-comparison/matrix-comparison.blade.php
  Uso: <x-cxd.tables.matrix-comparison title="04. Sticky Spec & Feature Comparison Matrix" />
  ============================================================================
--}}
@props([
    'title' => '04. Sticky Spec & Feature Comparison Matrix',
    'badge' => 'SPEC MATRIX',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-matrix-comparison']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-matrix-comparison__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-matrix-comparison__body">
        <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
        {{ $slot }}
    </div>
</section>
