{{--
  ============================================================================
  COMPONENTESXD — 07. Keyboard Shortcut Chord Display (LARAVEL BLADE)
  Archivo: components/badges-data/variants/keyboard-shortcut-matrix/keyboard-shortcut-matrix.blade.php
  Uso: <x-cxd.badges-data.keyboard-shortcut-matrix title="07. Keyboard Shortcut Chord Display" />
  ============================================================================
--}}
@props([
    'title' => '07. Keyboard Shortcut Chord Display',
    'badge' => 'KBD CHORDS',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-keyboard-shortcut-matrix']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
        <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
        {{ $slot }}
    </div>
</section>
