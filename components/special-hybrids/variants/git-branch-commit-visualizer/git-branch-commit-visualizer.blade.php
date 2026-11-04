{{-- Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG) — Laravel Blade (components/special-hybrids/variants/git-branch-commit-visualizer/git-branch-commit-visualizer.blade.php) --}}
@props(['title' => 'Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-git-branch-commit-visualizer']) }}>
    <h3>{{ $title }}</h3>
    <p>Diagrama vectorial de gran formato con 3 carriles de ramas, curvas Bezier autodibujables (svg.createDrawable), etiquetas de versión (v4.0 a v4.x), creación de commits, merges e inspector de SHA en vivo.</p>
    {{ $slot }}
</div>
