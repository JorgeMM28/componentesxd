{{-- Variante 03 — Comparador Visual Before / After con Cortina Deslizable — Laravel Blade (components/accordions-tabs/variants/before-after-split/before-after-split.blade.php) --}}
@props(['title' => 'Variante 03 — Comparador Visual Before / After con Cortina Deslizable'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-before-after-split']) }}>
    <h3>{{ $title }}</h3>
    <p>Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.</p>
    {{ $slot }}
</div>
