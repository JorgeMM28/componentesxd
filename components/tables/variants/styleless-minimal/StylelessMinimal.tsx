import { useEffect, useRef } from 'react';
import { mountStylelessMinimal } from './styleless-minimal.js';
import './styles.css';
export function StylelessMinimal() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStylelessMinimal(root.current) : undefined, []); return <div className="cxd-table cxd-table--minimal" data-cxd-control="styleless-minimal" ref={root}><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>; }
