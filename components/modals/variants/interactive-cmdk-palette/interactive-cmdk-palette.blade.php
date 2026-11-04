{{-- Variante 02 — Command Palette Interactiva (Buscador en Vivo) — Laravel Blade (components/modals/variants/interactive-cmdk-palette/interactive-cmdk-palette.blade.php) --}}
@props(['title' => 'Variante 02 — Command Palette Interactiva (Buscador en Vivo)'])
<div {{ $attributes->merge(['class' => 'cxd-modals-interactive-cmdk-palette']) }}>
    <h3>{{ $title }}</h3>
    <p>Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.</p>
    {{ $slot }}
</div>
