{{--
  ============================================================================
  COMPONENTESXD — 01. Dynamic Island Morphing Capsule (LARAVEL BLADE)
  Archivo: components/toasts/variants/dynamic-island-capsule/dynamic-island-capsule.blade.php
  Uso: <x-cxd.toasts.dynamic-island-capsule title="01. Dynamic Island Morphing Capsule" />
  ============================================================================
--}}
@props([
    'title' => '01. Dynamic Island Morphing Capsule',
    'badge' => 'MORPHING CAPSULE',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-toasts-dynamic-island-capsule']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-toasts-dynamic-island-capsule__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-toasts-dynamic-island-capsule__body">
        <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
        {{ $slot }}
    </div>
</section>
