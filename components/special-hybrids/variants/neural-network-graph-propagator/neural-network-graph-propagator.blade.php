{{-- Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax — Laravel Blade (components/special-hybrids/variants/neural-network-graph-propagator/neural-network-graph-propagator.blade.php) --}}
@props(['title' => 'Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-neural-network-graph-propagator']) }}>
    <h3>{{ $title }}</h3>
    <p>Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.</p>
    {{ $slot }}
</div>
