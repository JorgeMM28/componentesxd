{{-- Variante 04 — Toaster con Formulario de Respuesta Rápida — Laravel Blade (components/toasts/variants/form-reply-toast/form-reply-toast.blade.php) --}}
@props(['title' => 'Variante 04 — Toaster con Formulario de Respuesta Rápida'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-form-reply-toast']) }}>
    <h3>{{ $title }}</h3>
    <p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p>
    {{ $slot }}
</div>
