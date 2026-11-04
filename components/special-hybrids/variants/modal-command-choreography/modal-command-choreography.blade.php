{{-- Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — Laravel Blade (components/special-hybrids/variants/modal-command-choreography/modal-command-choreography.blade.php) --}}
@props(['title' => 'Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-modal-command-choreography']) }}>
    <h3>{{ $title }}</h3>
    <p>Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.</p>
    {{ $slot }}
</div>
