{{-- Variante 07 — Barra de Botones Content-Fit con Indicador Activo — Laravel Blade (components/buttons/variants/segmented-toolbar-fit/segmented-toolbar-fit.blade.php) --}}
@props(['title' => 'Variante 07 — Barra de Botones Content-Fit con Indicador Activo'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-segmented-toolbar-fit']) }}>
    <h3>{{ $title }}</h3>
    <p>Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.</p>
    {{ $slot }}
</div>
