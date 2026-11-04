{{-- Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — Laravel Blade (components/navigation/variants/microsoft-cascade-nav/microsoft-cascade-nav.blade.php) --}}
@props(['title' => 'Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-microsoft-cascade-nav']) }}>
    <h3>{{ $title }}</h3>
    <p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p>
    {{ $slot }}
</div>
