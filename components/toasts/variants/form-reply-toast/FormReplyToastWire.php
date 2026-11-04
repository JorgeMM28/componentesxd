<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FormReplyToastWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="form-reply-toast" wire:ignore><strong>Comentario de revisión</strong><p>¿Podemos subir el límite de rate-limiting?</p><form data-form><input data-input type="text" required aria-label="Respuesta rápida" placeholder="Escribe una respuesta" /><button type="submit">Responder</button></form><span role="status">Esperando respuesta</span>@script
<script>
import('/assets/form-reply-toast.js').then(module => module.mountFormReplyToast($wire.$el));
</script>
@endscript</div>
HTML; } }
