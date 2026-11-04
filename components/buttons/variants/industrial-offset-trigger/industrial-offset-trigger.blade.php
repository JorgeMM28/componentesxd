{{--
  ============================================================================
  COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/industrial-offset-trigger/industrial-offset-trigger.blade.php
  Uso: <x-cxd.buttons.industrial-offset-trigger title="08. Mechanical Hard-Offset Push Button" />
  ============================================================================
--}}
@props([
    'title' => '08. Mechanical Hard-Offset Push Button',
    'badge' => 'TACTILE PUSH',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-industrial-offset-trigger']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-industrial-offset-trigger__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-industrial-offset-trigger__body">
        <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
        {{ $slot }}
    </div>
</section>
