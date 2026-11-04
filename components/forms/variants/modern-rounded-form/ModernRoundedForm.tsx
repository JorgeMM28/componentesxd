import { useEffect, useRef } from 'react';
import { mountModernRoundedForm } from './modern-rounded-form.js';
import './styles.css';
export function ModernRoundedForm() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountModernRoundedForm(root.current) : undefined, []); return <div className="cxd-form" data-cxd-control="modern-rounded-form" ref={root}><form data-form><label>Correo electrónico <input type="email" data-email required defaultValue="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span></div>; }
