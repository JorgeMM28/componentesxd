{{-- Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — Laravel Blade (components/special-hybrids/variants/interactive-world-telemetry-map/interactive-world-telemetry-map.blade.php) --}}
@props(['title' => 'Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-interactive-world-telemetry-map']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.</p>
    {{ $slot }}
</div>
