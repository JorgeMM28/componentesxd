{{-- Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga — Laravel Blade (components/special-hybrids/variants/pathfinding-dijkstra-visualizer/pathfinding-dijkstra-visualizer.blade.php) --}}
@props(['title' => 'Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-pathfinding-dijkstra-visualizer']) }}>
    <h3>{{ $title }}</h3>
    <p>Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.</p>
    {{ $slot }}
</div>
