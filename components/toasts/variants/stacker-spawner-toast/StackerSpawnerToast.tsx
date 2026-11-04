import { useEffect, useRef } from 'react';
import { mountStackerSpawnerToast } from './stacker-spawner-toast.js';
import './styles.css';
export function StackerSpawnerToast() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountStackerSpawnerToast(root.current) : undefined, []); return <div className="cxd-toast" data-cxd-control="stacker-spawner-toast" ref={root}><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div className="cxd-toast__list" data-list aria-live="polite"></div></div>; }
