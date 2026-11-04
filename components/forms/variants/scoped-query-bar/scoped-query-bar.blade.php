{{--
  ============================================================================
  COMPONENTESXD — 05. Scoped Filter & Query Input Bar (LARAVEL BLADE)
  Archivo: components/forms/variants/scoped-query-bar/scoped-query-bar.blade.php
  Uso: <x-cxd.forms.scoped-query-bar title="05. Scoped Filter & Query Input Bar" />
  ============================================================================
--}}
@props([
    'title' => '05. Scoped Filter & Query Input Bar',
    'badge' => 'QUERY BUILDER',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-scoped-query-bar']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-scoped-query-bar__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-scoped-query-bar__body">
        <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
        {{ $slot }}
    </div>
</section>
