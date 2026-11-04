import { useEffect, useRef } from 'react';
import { mountFormEmbeddedCard } from './form-embedded-card.js';
import './styles.css';
export function FormEmbeddedCard() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFormEmbeddedCard(root.current) : undefined, []); return <div className="cxd-card" data-cxd-control="form-embedded-card" ref={root}><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" defaultValue="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p></div>; }
