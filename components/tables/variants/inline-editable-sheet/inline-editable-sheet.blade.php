{{--
  ============================================================================
  COMPONENTESXD — 05. Inline Editable Data Sheet (LARAVEL BLADE)
  Archivo: components/tables/variants/inline-editable-sheet/inline-editable-sheet.blade.php
  Uso: <x-cxd.tables.inline-editable-sheet title="05. Inline Editable Data Sheet" />
  ============================================================================
--}}
@props([
    'title' => '05. Inline Editable Data Sheet',
    'badge' => 'SPREADSHEET UI',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-inline-editable-sheet']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-inline-editable-sheet__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-inline-editable-sheet__body">
        <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
        {{ $slot }}
    </div>
</section>
