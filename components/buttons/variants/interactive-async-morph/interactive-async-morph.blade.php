{{-- Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — Laravel Blade (components/buttons/variants/interactive-async-morph/interactive-async-morph.blade.php) --}}
@props(['title' => 'Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-interactive-async-morph']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p>
    {{ $slot }}
</div>
