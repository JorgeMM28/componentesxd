<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SurveyBuilderWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-survey" data-cxd-control="survey-builder" wire:ignore><header><small>ENCUESTA</small><h3>Prioriza las preguntas</h3></header><ol data-questions><li>Experiencia de búsqueda <button type="button" data-up>↑</button></li><li>Velocidad de carga <button type="button" data-up>↑</button></li><li>Documentación <button type="button" data-up>↑</button></li></ol><button type="button" data-add>Añadir pregunta</button><span role="status">3 preguntas activas.</span></section>
HTML; } }
