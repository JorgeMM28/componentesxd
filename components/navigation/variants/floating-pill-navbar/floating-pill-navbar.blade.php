{{-- Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — Laravel Blade (components/navigation/variants/floating-pill-navbar/floating-pill-navbar.blade.php) --}}
@props(['title' => 'Variante 02 — Navbar Flotante Redondeada Tipo Cápsula'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-floating-pill-navbar']) }}>
    <h3>{{ $title }}</h3>
    <p>Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.</p>
    {{ $slot }}
</div>
