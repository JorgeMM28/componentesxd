{{-- Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — Laravel Blade (components/accordions-tabs/variants/transfer-dual-list/transfer-dual-list.blade.php) --}}
@props(['title' => 'Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-transfer-dual-list']) }}>
    <h3>{{ $title }}</h3>
    <p>Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.</p>
    {{ $slot }}
</div>
