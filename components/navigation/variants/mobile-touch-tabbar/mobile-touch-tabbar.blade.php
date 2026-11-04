{{-- Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas — Laravel Blade (components/navigation/variants/mobile-touch-tabbar/mobile-touch-tabbar.blade.php) --}}
@props(['title' => 'Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas'])
<nav {{ $attributes->merge(['class' => 'cxd-navigation-mobile-touch-tabbar']) }}>
    <h3>{{ $title }}</h3>
    <p>Barra inferior flotante tipo iOS/Android con 5 destinos táctiles, pastilla indicadora animada con Anime.js v4 y badges de notificaciones.</p>
    {{ $slot }}
</nav>
