import { useEffect, useRef } from 'react';
import { mountStylelessMinimalAlert } from './styleless-minimal-alert.js';
import './styles.css';
export function StylelessMinimalAlert() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStylelessMinimalAlert(root.current) : undefined, []); return <div className="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" ref={root} role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p></div>; }
