{{-- Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo — Laravel Blade (components/special-hybrids/variants/audio-synth-spectrum-analyzer/audio-synth-spectrum-analyzer.blade.php) --}}
@props(['title' => 'Variante 28 — Analizador de Espectro de 28 Bandas + Osciloscopio Vectorial en Vivo'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-audio-synth-spectrum-analyzer']) }}>
    <h3>{{ $title }}</h3>
    <p>Alterna entre perfiles acústicos (Sub-Bass, Cyberpunk Arp, Harmonics) animando las frecuencias y la onda sinusoidal.</p>
    {{ $slot }}
</div>
