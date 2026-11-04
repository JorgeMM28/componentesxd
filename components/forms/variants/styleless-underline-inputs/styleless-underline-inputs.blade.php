{{-- Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — Laravel Blade (components/forms/variants/styleless-underline-inputs/styleless-underline-inputs.blade.php) --}}
@props(['title' => 'Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)'])
<div {{ $attributes->merge(['class' => 'cxd-forms-styleless-underline-inputs']) }}>
    <h3>{{ $title }}</h3>
    <p>Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.</p>
    {{ $slot }}
</div>
