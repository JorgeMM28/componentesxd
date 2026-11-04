{{-- Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — Laravel Blade (components/tables/variants/inline-form-table/inline-form-table.blade.php) --}}
@props(['title' => 'Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-inline-form-table']) }}>
    <h3>{{ $title }}</h3>
    <p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p>
    {{ $slot }}
</div>
