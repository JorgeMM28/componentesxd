import { useEffect, useRef } from 'react';
import { mountActionButtonsToast } from './action-buttons-toast.js';
import './styles.css';
export function ActionButtonsToast() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountActionButtonsToast(root.current) : undefined, []); return <div className="cxd-toast" data-cxd-control="action-buttons-toast" ref={root}><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button></div>; }
