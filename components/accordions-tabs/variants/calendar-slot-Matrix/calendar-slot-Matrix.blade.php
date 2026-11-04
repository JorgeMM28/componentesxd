{{-- Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos — Laravel Blade (components/accordions-tabs/variants/calendar-slot-Matrix/calendar-slot-Matrix.blade.php) --}}
@props(['title' => 'Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos'])
<div {{ $attributes->merge(['class' => 'cxd-accordions-tabs-calendar-slot-Matrix']) }}>
    <h3>{{ $title }}</h3>
    <p>Selecciona día de la semana y franja horaria con confirmación instantánea de reserva.</p>
    {{ $slot }}
</div>
