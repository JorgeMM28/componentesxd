{{-- Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — Laravel Blade (components/accordions-tabs/variants/file-tree-inspector/file-tree-inspector.blade.php) --}}
@props(['title' => 'Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-file-tree-inspector']) }}>
    <h3>{{ $title }}</h3>
    <p>Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.</p>
    {{ $slot }}
</div>
