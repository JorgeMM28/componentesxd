{{--
  ============================================================================
  COMPONENTESXD — 07. Multi-File Upload Progress Toaster (LARAVEL BLADE)
  Archivo: components/toasts/variants/floating-upload-Dock/floating-upload-Dock.blade.php
  Uso: <x-cxd.toasts.floating-upload-Dock title="07. Multi-File Upload Progress Toaster" />
  ============================================================================
--}}
@props([
    'title' => '07. Multi-File Upload Progress Toaster',
    'badge' => 'UPLOAD MANAGER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-floating-upload-Dock']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-floating-upload-Dock__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-floating-upload-Dock__body">
        <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
        {{ $slot }}
    </div>
</section>
