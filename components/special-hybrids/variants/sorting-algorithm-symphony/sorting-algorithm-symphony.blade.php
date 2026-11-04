{{-- Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — Laravel Blade (components/special-hybrids/variants/sorting-algorithm-symphony/sorting-algorithm-symphony.blade.php) --}}
@props(['title' => 'Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-sorting-algorithm-symphony']) }}>
    <h3>{{ $title }}</h3>
    <p>28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.</p>
    {{ $slot }}
</div>
