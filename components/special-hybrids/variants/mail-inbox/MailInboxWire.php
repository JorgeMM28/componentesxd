<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class MailInboxWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-inbox" data-cxd-control="mail-inbox" wire:ignore><header><small>BANDEJA · 3 NUEVOS</small><h3 data-subject>Propuesta de proyecto</h3></header><div data-mail-list><button type="button" data-mail="Propuesta de proyecto">Lucía · Propuesta</button><button type="button" data-mail="Informe semanal">Diego · Informe</button><button type="button" data-mail="Invitación a demo">Equipo · Invitación</button></div><div class="cxd-special__actions"><button type="button" data-archive>Archivar seleccionado</button><button type="button" data-restore>Restaurar bandeja</button></div><span role="status">Selecciona un mensaje.</span></section>
HTML; } }
