{{-- Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — Laravel Blade (components/tables/variants/content-fit-compact/content-fit-compact.blade.php) --}}
@props(['title' => 'Variante 03 — Tabla Content-Fit (Ajustada al Contenido)'])
<div {{ $attributes->merge(['class' => 'cxd-tables-content-fit-compact']) }}>
    <h3>{{ $title }}</h3>
    <p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p>
    {{ $slot }}
</div>
