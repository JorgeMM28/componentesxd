{{-- Variante 02 — Dynamic Island Interactiva (3 Estados) — Laravel Blade (components/toasts/variants/dynamic-island-morph/dynamic-island-morph.blade.php) --}}
@props(['title' => 'Variante 02 — Dynamic Island Interactiva (3 Estados)'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-dynamic-island-morph']) }}>
    <h3>{{ $title }}</h3>
    <p>Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.</p>
    {{ $slot }}
</div>
