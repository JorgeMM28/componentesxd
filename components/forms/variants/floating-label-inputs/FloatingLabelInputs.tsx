import { useEffect, useRef } from 'react';
import { mountFloatingLabelInputs } from './floating-label-inputs.js';
import './styles.css';
export function FloatingLabelInputs() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFloatingLabelInputs(root.current) : undefined, []); return <div className="cxd-form" data-cxd-control="floating-label-inputs" ref={root}><label className="cxd-form__float"><span>Nombre del cluster</span><input type="text" data-input defaultValue="us-east-production-01" /></label><span role="status">Etiqueta flotante</span></div>; }
