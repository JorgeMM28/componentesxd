{{-- Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución — Laravel Blade (components/special-hybrids/variants/chrono-sla-incident-table/chrono-sla-incident-table.blade.php) --}}
@props(['title' => 'Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-chrono-sla-incident-table']) }}>
    <h3>{{ $title }}</h3>
    <p>Monitorea el tiempo transcurrido en vivo con centésimas de segundo y resuelve incidentes con animación de fila.</p>
    {{ $slot }}
</div>
