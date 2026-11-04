{{--
  ============================================================================
  COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (LARAVEL BLADE)
  Archivo: components/toasts/variants/terminal-cli-toast/terminal-cli-toast.blade.php
  Uso: <x-cxd.toasts.terminal-cli-toast title="04. CLI & Webhook Telemetry Toast" />
  ============================================================================
--}}
@props([
    'title' => '04. CLI & Webhook Telemetry Toast',
    'badge' => 'DEV / WEBHOOK',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-terminal-cli-toast']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-terminal-cli-toast__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-terminal-cli-toast__body">
        <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
        {{ $slot }}
    </div>
</section>
