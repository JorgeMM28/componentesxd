{{-- Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — Laravel Blade (components/badges-data/variants/copyable-spec-grid/copyable-spec-grid.blade.php) --}}
@props(['title' => 'Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila'])
<div {{ $attributes->merge(['class' => 'cxd-badges-data-copyable-spec-grid']) }}>
    <h3>{{ $title }}</h3>
    <p>Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.</p>
    {{ $slot }}
</div>
