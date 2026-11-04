{{-- Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — Laravel Blade (components/special-hybrids/variants/skeleton-to-table-hydrator/skeleton-to-table-hydrator.blade.php) --}}
@props(['title' => 'Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-skeleton-to-table-hydrator']) }}>
    <h3>{{ $title }}</h3>
    <p>Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.</p>
    {{ $slot }}
</div>
