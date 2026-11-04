{{-- Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — Laravel Blade (components/forms/variants/interactive-otp-pin/interactive-otp-pin.blade.php) --}}
@props(['title' => 'Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)'])
<div {{ $attributes->merge(['class' => 'cxd-forms-interactive-otp-pin']) }}>
    <h3>{{ $title }}</h3>
    <p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p>
    {{ $slot }}
</div>
