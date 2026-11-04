{{--
  ============================================================================
  COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (LARAVEL BLADE)
  Archivo: components/forms/variants/toggle-switch-matrix/toggle-switch-matrix.blade.php
  Uso: <x-cxd.forms.toggle-switch-matrix title="08. Industrial Toggle Switch & Radio Cards" />
  ============================================================================
--}}
@props([
    'title' => '08. Industrial Toggle Switch & Radio Cards',
    'badge' => 'SWITCHES',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-toggle-switch-matrix']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-toggle-switch-matrix__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-toggle-switch-matrix__body">
        <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
        {{ $slot }}
    </div>
</section>
