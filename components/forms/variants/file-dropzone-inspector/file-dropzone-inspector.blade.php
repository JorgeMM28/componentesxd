{{--
  ============================================================================
  COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (LARAVEL BLADE)
  Archivo: components/forms/variants/file-dropzone-inspector/file-dropzone-inspector.blade.php
  Uso: <x-cxd.forms.file-dropzone-inspector title="07. Drag & Drop Artifact Dropzone" />
  ============================================================================
--}}
@props([
    'title' => '07. Drag & Drop Artifact Dropzone',
    'badge' => 'FILE UPLOAD',
    'interfaceTheme' => null,
])

<section
    {{ $attributes->merge(['class' => 'cxd-forms-file-dropzone-inspector']) }}
    @if($interfaceTheme) data-theme="{{ $interfaceTheme }}" @endif
>
    <header class="cxd-forms-file-dropzone-inspector__header">
        <span>{{ $title }}</span>
        <span class="cxd-badge">{{ $badge }}</span>
    </header>
    <div class="cxd-forms-file-dropzone-inspector__body">
        <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
        {{ $slot }}
    </div>
</section>
