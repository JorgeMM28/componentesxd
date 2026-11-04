/** Barra segmentada: adaptadores a partir de la implementación compartida de selección. */
import { modernButtonsCode } from './modern-buttons-code.mjs';
const first = [['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']];
const next = [['one','Vista Tabla','Vista de Tabla Estructurada (10 Variantes)'],['two','Vista Tarjetas','Vista de Tarjetas Bento (8 Variantes)'],['three','Vista Grafo 3D','Vista de Grafo Vectorial 3D'],['four','JSON Raw','Inspector JSON Raw en Vivo']];
const markupButtons = (items, active = -1) => items.map(([kind,label,message], index) => `  <button type="button" class="cxd-pills__button cxd-pills__button--${kind}" data-message="${message}" aria-pressed="${index === active}">${label}</button>`).join('\n');
const phpFirst = "[['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']]";
const phpNext = "[['one','Vista Tabla','Vista de Tabla Estructurada (10 Variantes)'],['two','Vista Tarjetas','Vista de Tarjetas Bento (8 Variantes)'],['three','Vista Grafo 3D','Vista de Grafo Vectorial 3D'],['four','JSON Raw','Inspector JSON Raw en Vivo']]";
export function segmentedButtonsCode(fw) {
  if (fw === 'css-scss') return `.cxd-segments{display:flex;flex-wrap:wrap;justify-content:center;gap:0}.cxd-segments__button{border:1px solid #565c70;padding:.65rem .9rem;background:#181c2b;color:#f4f4ff;font:600 .85rem system-ui;cursor:pointer}.cxd-segments__button:first-child{border-radius:8px 0 0 8px}.cxd-segments__button:nth-child(4){border-radius:0 8px 8px 0}.cxd-segments__button[aria-pressed="true"]{background:#7253f4;color:#fff}.cxd-segments__button:focus-visible{outline:3px solid #a78bfa;outline-offset:2px}.cxd-segments__status{width:100%;text-align:center;margin-top:.75rem;font:500 .75rem system-ui}\n`;
  let code = modernButtonsCode(fw);
  return code.replaceAll('cxd-pills', 'cxd-segments').replaceAll('cxd-modern-rounded-pills', 'cxd-segmented-toolbar-fit').replaceAll(JSON.stringify(first), JSON.stringify(next))
    .replaceAll(markupButtons(first).replaceAll('cxd-pills', 'cxd-segments'), markupButtons(next, 0).replaceAll('cxd-pills', 'cxd-segments'))
    .replaceAll(phpFirst, phpNext)
    .replaceAll('ModernRoundedPills', 'SegmentedToolbarFit')
    .replaceAll('modern-rounded-pills.js', 'segmented-toolbar-fit.js')
    .replaceAll('mountModernRoundedPills', 'mountSegmentedToolbarFit')
    .replaceAll('ACCIÓN EJECUTADA: ', 'MODO ACTIVO: ')
    .replaceAll('Selecciona una acción', 'MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)')
    .replaceAll('useState(-1)', 'useState(0)')
    .replaceAll('ref(-1)', 'ref(0)')
    .replaceAll('$state(-1)', '$state(0)')
    .replaceAll('signal(-1)', 'signal(0)')
    .replaceAll('public int $active = -1;', 'public int $active = 0;');
}
