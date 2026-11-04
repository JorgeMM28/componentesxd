{{--
  ============================================================================
  COMPONENTESXD — 03. Critical Action Verification Modal (LARAVEL BLADE)
  Archivo: components/modals/variants/destructive-confirm-dialog/destructive-confirm-dialog.blade.php
  Uso: <x-cxd.modals.destructive-confirm-dialog title="03. Critical Action Verification Modal" />
  ============================================================================
--}}
@props([
    'title' => '03. Critical Action Verification Modal',
    'badge' => 'SAFETY DIALOG',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-destructive-confirm-dialog']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-destructive-confirm-dialog__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-destructive-confirm-dialog__body">
        <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
        {{ $slot }}
    </div>
</section>
