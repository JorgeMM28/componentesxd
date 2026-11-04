{{-- Variante 08 — Toaster Interactivo de Subida de Archivos — Laravel Blade (components/toasts/variants/upload-progress-toaster/upload-progress-toaster.blade.php) --}}
@props(['title' => 'Variante 08 — Toaster Interactivo de Subida de Archivos'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-upload-progress-toaster']) }}>
    <h3>{{ $title }}</h3>
    <p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p>
    {{ $slot }}
</div>
