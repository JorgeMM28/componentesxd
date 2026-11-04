{{-- Variante 06 — Botón con Menú de Acciones (Split Dropdown) — Laravel Blade (components/buttons/variants/split-dropdown-action/split-dropdown-action.blade.php) --}}
@props(['title' => 'Variante 06 — Botón con Menú de Acciones (Split Dropdown)'])
<div {{ $attributes->merge(['class' => 'cxd-buttons-split-dropdown-action']) }}>
    <h3>{{ $title }}</h3>
    <p>Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.</p>
    {{ $slot }}
</div>
