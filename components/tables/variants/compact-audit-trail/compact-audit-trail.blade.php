{{--
  ============================================================================
  COMPONENTESXD — 06. Security Audit & Diff History Table (LARAVEL BLADE)
  Archivo: components/tables/variants/compact-audit-trail/compact-audit-trail.blade.php
  Uso: <x-cxd.tables.compact-audit-trail title="06. Security Audit & Diff History Table" />
  ============================================================================
--}}
@props([
    'title' => '06. Security Audit & Diff History Table',
    'badge' => 'SECURITY AUDIT',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-tables-compact-audit-trail']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-tables-compact-audit-trail__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-tables-compact-audit-trail__body">
        <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
        {{ $slot }}
    </div>
</section>
