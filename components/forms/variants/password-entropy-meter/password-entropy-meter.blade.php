{{--
  ============================================================================
  COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (LARAVEL BLADE)
  Archivo: components/forms/variants/password-entropy-meter/password-entropy-meter.blade.php
  Uso: <x-cxd.forms.password-entropy-meter title="04. Password Input + Live Entropy Analyzer" />
  ============================================================================
--}}
@props([
    'title' => '04. Password Input + Live Entropy Analyzer',
    'badge' => 'SECURITY METER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-password-entropy-meter']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-password-entropy-meter__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-password-entropy-meter__body">
        <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
        {{ $slot }}
    </div>
</section>
