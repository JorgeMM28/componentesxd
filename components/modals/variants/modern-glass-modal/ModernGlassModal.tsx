import { useEffect, useRef } from 'react';
import { mountModernGlassModal } from './modern-glass-modal.js';
import './styles.css';
export function ModernGlassModal() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountModernGlassModal(root.current) : undefined, []); return <div className="cxd-dialog" data-cxd-control="modern-glass-modal" ref={root}><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div className="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog></div>; }
