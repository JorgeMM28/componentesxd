import { useEffect, useRef } from 'react';
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
export function OrderTracker() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountOrderTracker(root.current) : undefined, []); return <section className="cxd-special cxd-order" data-cxd-control="order-tracker" ref={root}><header><small>PEDIDO #CX-2048</small><h3 data-order-title>Preparación</h3></header><ol data-stages><li>Pagado</li><li>Preparación</li><li>En ruta</li><li>Entregado</li></ol><div className="cxd-special__actions"><button type="button" data-next>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></section>; }
