{{-- Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — Laravel Blade (components/navigation/variants/compact-navigation-rail/compact-navigation-rail.blade.php) --}}
@props(['title' => 'Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos'])
<nav {{ $attributes->merge(['class' => 'cxd-navigation-compact-navigation-rail']) }}>
    <h3>{{ $title }}</h3>
    <p>Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.</p>
    {{ $slot }}
</nav>
