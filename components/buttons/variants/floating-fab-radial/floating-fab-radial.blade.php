{{-- Variante 03 — Botón Flotante (FAB) con Menú Desplegable — Laravel Blade (components/buttons/variants/floating-fab-radial/floating-fab-radial.blade.php) --}}
@props(['title' => 'Variante 03 — Botón Flotante (FAB) con Menú Desplegable'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-floating-fab-radial']) }}>
    <h3>{{ $title }}</h3>
    <p>Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.</p>
    {{ $slot }}
</div>
