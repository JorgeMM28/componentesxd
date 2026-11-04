import { useEffect, useRef } from 'react';
import { mountFloating3dTilt } from './floating-3d-tilt.js';
import './styles.css';
export function Floating3dTilt() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFloating3dTilt(root.current) : undefined, []); return <div className="cxd-card" data-cxd-control="floating-3d-tilt" ref={root}><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div>; }
