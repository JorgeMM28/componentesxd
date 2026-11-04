{{-- Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — Laravel Blade (components/toasts/variants/styleless-minimal-alert/styleless-minimal-alert.blade.php) --}}
@props(['title' => 'Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-styleless-minimal-alert']) }}>
    <h3>{{ $title }}</h3>
    <p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p>
    {{ $slot }}
</div>
