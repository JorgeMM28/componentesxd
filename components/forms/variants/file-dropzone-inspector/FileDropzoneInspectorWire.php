<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/file-dropzone-inspector/FileDropzoneInspectorWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class FileDropzoneInspectorWire extends Component
{
    public string $title = '07. Drag & Drop Artifact Dropzone';
    public string $badge = 'FILE UPLOAD';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'file-dropzone-inspector');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-file-dropzone-inspector" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-file-dropzone-inspector__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-file-dropzone-inspector__body">
                <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
