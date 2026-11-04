{{-- Variante 04 — Inputs con Etiqueta Flotante Animada — Laravel Blade (components/forms/variants/floating-label-inputs/floating-label-inputs.blade.php) --}}
@props(['title' => 'Variante 04 — Inputs con Etiqueta Flotante Animada'])
<div {{ $attributes->merge(['class' => 'cxd-forms-floating-label-inputs']) }}>
    <h3>{{ $title }}</h3>
    <p>La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.</p>
    {{ $slot }}
</div>
