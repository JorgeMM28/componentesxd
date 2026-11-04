{{-- Variante 03 — Formulario Content-Fit en Una Sola Línea — Laravel Blade (components/forms/variants/content-fit-inline-bar/content-fit-inline-bar.blade.php) --}}
@props(['title' => 'Variante 03 — Formulario Content-Fit en Una Sola Línea'])
<div {{ $attributes->merge(['class' => 'cxd-forms-content-fit-inline-bar']) }}>
    <h3>{{ $title }}</h3>
    <p>Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.</p>
    {{ $slot }}
</div>
