import { useEffect, useRef } from 'react';
import { mountStylelessEditorial } from './styleless-editorial.js';
import './styles.css';
export function StylelessEditorial() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStylelessEditorial(root.current) : undefined, []); return <div className="cxd-card cxd-card--editorial" data-cxd-control="styleless-editorial" ref={root}><span>ENSAYO ARQUITECTÓNICO // Nº 04</span><h3>La eliminación del contenedor innecesario</h3><p>La jerarquía tipográfica y el espacio definen el bloque.</p><button type="button" data-read>Leer especificación</button><span role="status">Listo para explorar</span></div>; }
