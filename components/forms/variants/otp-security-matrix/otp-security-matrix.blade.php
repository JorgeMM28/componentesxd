{{--
  ============================================================================
  COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (LARAVEL BLADE)
  Archivo: components/forms/variants/otp-security-matrix/otp-security-matrix.blade.php
  Uso: <x-cxd.forms.otp-security-matrix title="02. 6-Digit 2FA OTP Auto-Advance Matrix" />
  ============================================================================
--}}
@props([
    'title' => '02. 6-Digit 2FA OTP Auto-Advance Matrix',
    'badge' => 'AUTH / 2FA',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-otp-security-matrix']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-otp-security-matrix__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-otp-security-matrix__body">
        <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
        {{ $slot }}
    </div>
</section>
