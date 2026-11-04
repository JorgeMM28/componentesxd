{{--
  ============================================================================
  COMPONENTESXD — 01. Architectural Floating-Label Input (LARAVEL BLADE)
  Archivo: components/forms/variants/floating-precision-input/floating-precision-input.blade.php
  Uso: <x-cxd.forms.floating-precision-input title="01. Architectural Floating-Label Input" />
  ============================================================================
--}}
@props([
    'title' => '01. Architectural Floating-Label Input',
    'badge' => 'FLOATING LABEL',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-floating-precision-input']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-floating-precision-input__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-floating-precision-input__body">
        <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
        {{ $slot }}
    </div>
</section>
