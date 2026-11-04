import { useEffect, useRef } from 'react';
import { mountHoldConfirmSafety } from './hold-confirm-safety.js';
import './styles.css';
export function HoldConfirmSafety() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountHoldConfirmSafety(root.current) : undefined, []); return <div className="cxd-control" data-cxd-control="hold-confirm-safety" ref={root}><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>; }
