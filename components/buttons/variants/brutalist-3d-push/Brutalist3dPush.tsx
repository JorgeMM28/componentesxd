import { useEffect, useRef } from 'react';
import { mountBrutalist3dPush } from './brutalist-3d-push.js';
import './styles.css';
export function Brutalist3dPush() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountBrutalist3dPush(root.current) : undefined, []); return <div className="cxd-mechanical" ref={root}><button type="button" className="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button><button type="button" className="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button></div>; }
