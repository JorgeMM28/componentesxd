{{-- Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto — Laravel Blade (components/navigation/variants/interactive-breadcrumbs/interactive-breadcrumbs.blade.php) --}}
@props(['title' => 'Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto'])
<div {{ $attributes->merge(['class' => 'cxd-navigation-interactive-breadcrumbs']) }}>
    <h3>{{ $title }}</h3>
    <p>Ruta de navegación con menús desplegables integrados en cada nivel de jerarquía.</p>
    {{ $slot }}
</div>
