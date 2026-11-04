{{-- Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — Laravel Blade (components/cards/variants/content-fit-kpi-badge/content-fit-kpi-badge.blade.php) --}}
@props(['title' => 'Variante 07 — Tarjeta Content-Fit Compacta de Telemetría'])
<div {{ $attributes->merge(['class' => 'cxd-cards-content-fit-kpi-badge']) }}>
    <h3>{{ $title }}</h3>
    <p>Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.</p>
    {{ $slot }}
</div>
