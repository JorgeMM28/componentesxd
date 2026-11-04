import { useEffect, useRef } from 'react';
import { mountModernFloatingToast } from './modern-floating-toast.js';
import './styles.css';
export function ModernFloatingToast() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountModernFloatingToast(root.current) : undefined, []); return <div className="cxd-toast" data-cxd-control="modern-floating-toast" ref={root}><strong>Copia de seguridad completada con éxito</strong><p>14.2 GB sincronizados en el almacenamiento encriptado.</p><button type="button" data-replay>Reiniciar barra</button><progress data-progress max="100" value="100" aria-label="Tiempo restante"></progress><span role="status">Notificación activa</span></div>; }
