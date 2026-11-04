{{--
  ============================================================================
  COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (LARAVEL BLADE)
  Archivo: components/tables/variants/nested-tree-grid/nested-tree-grid.blade.php
  Uso: <x-cxd.tables.nested-tree-grid title="02. Hierarchical Tree & Sub-Row Table" />
  ============================================================================
--}}
@props([
    'title' => '02. Hierarchical Tree & Sub-Row Table',
    'badge' => 'TREE / EXPANDABLE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-nested-tree-grid']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-nested-tree-grid__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-nested-tree-grid__body">
        <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
        {{ $slot }}
    </div>
</section>
