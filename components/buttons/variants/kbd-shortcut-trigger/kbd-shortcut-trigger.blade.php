{{--
  ============================================================================
  COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (LARAVEL BLADE)
  Archivo: components/buttons/variants/kbd-shortcut-trigger/kbd-shortcut-trigger.blade.php
  Uso: <x-cxd.buttons.kbd-shortcut-trigger title="06. Tactical KBD Shortcut Command Button" />
  ============================================================================
--}}
@props([
    'title' => '06. Tactical KBD Shortcut Command Button',
    'badge' => 'HOTKEY READY',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-buttons-kbd-shortcut-trigger']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-buttons-kbd-shortcut-trigger__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-buttons-kbd-shortcut-trigger__body">
        <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
        {{ $slot }}
    </div>
</section>
