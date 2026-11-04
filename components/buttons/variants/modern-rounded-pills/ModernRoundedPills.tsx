import { useState } from 'react';
import './styles.css';
const items = [["primary","Botón Píldora Moderno","Despliegue Iniciado"],["soft","Secundario Suave","Modo Previsualización Activo"],["outline","Contorno Redondeado","Sincronizado con Éxito"]];
export function ModernRoundedPills() {
  const [active, setActive] = useState(-1);
  return <div className="cxd-pills">{items.map(([kind, label], index) => <button key={kind} type="button" className={`cxd-pills__button cxd-pills__button--${kind}`} aria-pressed={active === index} onClick={() => setActive(index)}>{label}</button>)}<span className="cxd-pills__status" role="status">{active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2]}</span></div>;
}
