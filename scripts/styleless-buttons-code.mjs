/** Botones editoriales sin caja, con sus adaptadores para cada tecnología. */
import { modernButtonsCode } from './modern-buttons-code.mjs';
const original = [['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']];
const items = [['documentation','Explorar Documentación Técnica','Abriendo especificación técnica v4.2...'],['download','Descargar Especificación Raw','Descargando manifiesto raw (42 KB)...']];
const buttons = list => list.map(([kind,label,message]) => `  <button type="button" class="cxd-pills__button cxd-pills__button--${kind}" data-message="${message}" aria-pressed="false">${label}</button>`).join('\n');
const originalPhp = "[['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']]";
const nextPhp = "[['documentation','Explorar Documentación Técnica','Abriendo especificación técnica v4.2...'],['download','Descargar Especificación Raw','Descargando manifiesto raw (42 KB)...']]";
export function stylelessButtonsCode(fw) {
  if (fw === 'css-scss') return `.cxd-text-links{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.cxd-text-links__button{border:0;border-bottom:1px solid currentColor;border-radius:0;padding:.5rem 0;background:transparent;color:inherit;font:600 .9rem system-ui;cursor:pointer;transition:color .2s,border-color .2s}.cxd-text-links__button::after{content:' →';display:inline-block;transition:transform .2s}.cxd-text-links__button:hover::after{transform:translateX(5px)}.cxd-text-links__button[aria-pressed="true"]{color:#9b83ff}.cxd-text-links__button:focus-visible{outline:3px solid #a78bfa;outline-offset:4px}.cxd-text-links__status{width:100%;text-align:center;font:500 .75rem system-ui}@media(prefers-reduced-motion:reduce){.cxd-text-links__button,.cxd-text-links__button::after{transition:none}}\n`;
  return modernButtonsCode(fw).replaceAll(JSON.stringify(original), JSON.stringify(items))
    .replaceAll(buttons(original), buttons(items))
    .replaceAll(originalPhp, nextPhp)
    .replaceAll('cxd-pills', 'cxd-text-links')
    .replaceAll('cxd-modern-rounded-pills', 'cxd-styleless-text-links')
    .replaceAll('ModernRoundedPills', 'StylelessTextLinks')
    .replaceAll('modern-rounded-pills.js', 'styleless-text-links.js')
    .replaceAll('ACCIÓN EJECUTADA: ', 'RUTA ACTIVA: ')
    .replaceAll('Selecciona una acción', 'Selecciona una opción');
}
