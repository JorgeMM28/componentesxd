{{--
  ============================================================================
  COMPONENTESXD — 06. Architectural Callout & Warning Block (LARAVEL BLADE)
  Archivo: components/toasts/variants/inline-diff-callout/inline-diff-callout.blade.php
  Uso: <x-cxd.toasts.inline-diff-callout title="06. Architectural Callout & Warning Block" />
  ============================================================================
--}}
@props([
    'title' => '06. Architectural Callout & Warning Block',
    'badge' => 'CALLOUT BOX',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-inline-diff-callout']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-inline-diff-callout__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-inline-diff-callout__body">
        <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
        {{ $slot }}
    </div>
</section>
