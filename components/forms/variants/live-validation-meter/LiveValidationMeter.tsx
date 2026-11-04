import { useEffect, useRef } from 'react';
import { mountLiveValidationMeter } from './live-validation-meter.js';
import './styles.css';
export function LiveValidationMeter() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountLiveValidationMeter(root.current) : undefined, []); return <div className="cxd-form" data-cxd-control="live-validation-meter" ref={root}><label>Contraseña <input type="password" data-password autoComplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span></div>; }
