import { useState } from 'react';
import './styles.css';
const items = [["one","Vista Tabla","Vista de Tabla Estructurada (10 Variantes)"],["two","Vista Tarjetas","Vista de Tarjetas Bento (8 Variantes)"],["three","Vista Grafo 3D","Vista de Grafo Vectorial 3D"],["four","JSON Raw","Inspector JSON Raw en Vivo"]];
export function SegmentedToolbarFit() {
  const [active, setActive] = useState(0);
  return <div className="cxd-segments">{items.map(([kind, label], index) => <button key={kind} type="button" className={`cxd-segments__button cxd-segments__button--${kind}`} aria-pressed={active === index} onClick={() => setActive(index)}>{label}</button>)}<span className="cxd-segments__status" role="status">{active < 0 ? 'MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)' : 'MODO ACTIVO: ' + items[active][2]}</span></div>;
}
