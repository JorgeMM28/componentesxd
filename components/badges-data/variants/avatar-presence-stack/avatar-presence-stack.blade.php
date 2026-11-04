{{--
  ============================================================================
  COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (LARAVEL BLADE)
  Archivo: components/badges-data/variants/avatar-presence-stack/avatar-presence-stack.blade.php
  Uso: <x-cxd.badges-data.avatar-presence-stack title="05. Collaborator Avatar Stack + Presence Ring" />
  ============================================================================
--}}
@props([
    'title' => '05. Collaborator Avatar Stack + Presence Ring',
    'badge' => 'PRESENCE UI',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-badges-data-avatar-presence-stack']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-badges-data-avatar-presence-stack__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-badges-data-avatar-presence-stack__body">
        <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
        {{ $slot }}
    </div>
</section>
