import { useState } from 'react';
import './styles.css';
const items = [["documentation","Explorar Documentación Técnica","Abriendo especificación técnica v4.2..."],["download","Descargar Especificación Raw","Descargando manifiesto raw (42 KB)..."]];
export function StylelessTextLinks() {
  const [active, setActive] = useState(-1);
  return <div className="cxd-text-links">{items.map(([kind, label], index) => <button key={kind} type="button" className={`cxd-text-links__button cxd-text-links__button--${kind}`} aria-pressed={active === index} onClick={() => setActive(index)}>{label}</button>)}<span className="cxd-text-links__status" role="status">{active < 0 ? 'Selecciona una opción' : 'RUTA ACTIVA: ' + items[active][2]}</span></div>;
}
