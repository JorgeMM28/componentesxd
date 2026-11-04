{{-- Variante 05 — Generador Interactivo de Pila de Toasters — Laravel Blade (components/toasts/variants/stacker-spawner-toast/stacker-spawner-toast.blade.php) --}}
@props(['title' => 'Variante 05 — Generador Interactivo de Pila de Toasters'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-stacker-spawner-toast']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.</p>
    {{ $slot }}
</div>
