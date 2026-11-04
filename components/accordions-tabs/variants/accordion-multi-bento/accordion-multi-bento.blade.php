{{-- Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — Laravel Blade (components/accordions-tabs/variants/accordion-multi-bento/accordion-multi-bento.blade.php) --}}
@props(['title' => 'Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-accordion-multi-bento']) }}>
    <h3>{{ $title }}</h3>
    <p>Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.</p>
    {{ $slot }}
</div>
