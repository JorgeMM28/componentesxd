{{--
  ============================================================================
  COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (LARAVEL BLADE)
  Archivo: components/toasts/variants/action-undo-countdown/action-undo-countdown.blade.php
  Uso: <x-cxd.toasts.action-undo-countdown title="03. Actionable Undo Toast + Progress Timer" />
  ============================================================================
--}}
@props([
    'title' => '03. Actionable Undo Toast + Progress Timer',
    'badge' => 'UNDO / TIMER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-action-undo-countdown']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-action-undo-countdown__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-action-undo-countdown__body">
        <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
        {{ $slot }}
    </div>
</section>
