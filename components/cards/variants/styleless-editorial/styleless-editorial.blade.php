{{-- Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — Laravel Blade (components/cards/variants/styleless-editorial/styleless-editorial.blade.php) --}}
@props(['title' => 'Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)'])
<div {{ $attributes->merge(['class' => 'cxd-cards-styleless-editorial']) }}>
    <h3>{{ $title }}</h3>
    <p>Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.</p>
    {{ $slot }}
</div>
