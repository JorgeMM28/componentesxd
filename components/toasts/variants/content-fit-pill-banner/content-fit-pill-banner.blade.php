{{-- Variante 07 — Banner Content-Fit Flotante Tipo Píldora — Laravel Blade (components/toasts/variants/content-fit-pill-banner/content-fit-pill-banner.blade.php) --}}
@props(['title' => 'Variante 07 — Banner Content-Fit Flotante Tipo Píldora'])
<div {{ $attributes->merge(['class' => 'cxd-toasts-content-fit-pill-banner']) }}>
    <h3>{{ $title }}</h3>
    <p>Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.</p>
    {{ $slot }}
</div>
