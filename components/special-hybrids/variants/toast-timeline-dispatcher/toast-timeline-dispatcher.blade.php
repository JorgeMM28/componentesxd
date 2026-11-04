{{-- Variante 08 — Despachador de Toasts Apilados 3D + Cronómetro createTimer() — Laravel Blade (components/special-hybrids/variants/toast-timeline-dispatcher/toast-timeline-dispatcher.blade.php) --}}
@props(['title' => 'Variante 08 — Despachador de Toasts Apilados 3D + Cronómetro createTimer()'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-toast-timeline-dispatcher']) }}>
    <h3>{{ $title }}</h3>
    <p>Genera notificaciones en vivo con física elástica y cuenta regresiva precisa en milisegundos.</p>
    {{ $slot }}
</div>
