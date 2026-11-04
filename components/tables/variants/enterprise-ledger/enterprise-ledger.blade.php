{{--
  ============================================================================
  COMPONENTESXD — 01. Enterprise Financial Ledger Grid (LARAVEL BLADE)
  Archivo: components/tables/variants/enterprise-ledger/enterprise-ledger.blade.php
  Uso: <x-cxd.tables.enterprise-ledger title="01. Enterprise Financial Ledger Grid" />
  ============================================================================
--}}
@props([
    'title' => '01. Enterprise Financial Ledger Grid',
    'badge' => 'FINTECH / LEDGER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-enterprise-ledger']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-enterprise-ledger__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-enterprise-ledger__body">
        <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
        {{ $slot }}
    </div>
</section>
