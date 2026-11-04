{{-- Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable) — Laravel Blade (components/special-hybrids/variants/form-otp-svg-vault/form-otp-svg-vault.blade.php) --}}
@props(['title' => 'Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)'])
<div {{ $attributes->merge(['class' => 'cxd-special-hybrids-form-otp-svg-vault']) }}>
    <h3>{{ $title }}</h3>
    <p>Simula la validación criptográfica trazando el circuito SVG de seguridad y animando las casillas del código.</p>
    {{ $slot }}
</div>
