{{-- Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — Laravel Blade (components/navigation/variants/collapsible-sidebar/collapsible-sidebar.blade.php) --}}
@props(['title' => 'Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster'])
<nav {{ $attributes->merge(['class' => 'cxd-navigation-collapsible-sidebar']) }}>
    <h3>{{ $title }}</h3>
    <p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p>
    {{ $slot }}
</nav>
