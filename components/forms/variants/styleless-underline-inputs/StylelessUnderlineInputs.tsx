import { useEffect, useRef } from 'react';
import { mountStylelessUnderlineInputs } from './styleless-underline-inputs.js';
import './styles.css';
export function StylelessUnderlineInputs() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStylelessUnderlineInputs(root.current) : undefined, []); return <div className="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs" ref={root}><label>Título del documento <input type="text" data-input defaultValue="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span></div>; }
