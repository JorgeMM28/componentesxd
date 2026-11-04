{{-- Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — Laravel Blade (components/tables/variants/expandable-detail/expandable-detail.blade.php) --}}
@props(['title' => 'Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-expandable-detail']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p>
    {{ $slot }}
</div>
