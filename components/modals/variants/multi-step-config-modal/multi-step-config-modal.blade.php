{{--
  ============================================================================
  COMPONENTESXD — 04. Stepped Configuration Wizard Modal (LARAVEL BLADE)
  Archivo: components/modals/variants/multi-step-config-modal/multi-step-config-modal.blade.php
  Uso: <x-cxd.modals.multi-step-config-modal title="04. Stepped Configuration Wizard Modal" />
  ============================================================================
--}}
@props([
    'title' => '04. Stepped Configuration Wizard Modal',
    'badge' => 'WIZARD MODAL',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-modals-multi-step-config-modal']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-modals-multi-step-config-modal__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-modals-multi-step-config-modal__body">
        <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
        {{ $slot }}
    </div>
</section>
