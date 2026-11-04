{{-- Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada — Laravel Blade (components/special-hybrids/variants/dual-transfer-stagger-sync/dual-transfer-stagger-sync.blade.php) --}}
@props(['title' => 'Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-dual-transfer-stagger-sync']) }}>
    <h3>{{ $title }}</h3>
    <p>Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.</p>
    {{ $slot }}
</div>
