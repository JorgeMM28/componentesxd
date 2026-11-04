import { useEffect, useRef } from 'react';
import { mountKanbanMiniBoard } from './kanban-mini-board.js';
import './styles.css';
export function KanbanMiniBoard() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountKanbanMiniBoard(root.current) : undefined, []); return <div className="cxd-widget" data-cxd-control="kanban-mini-board" ref={root}><div className="cxd-widget__columns"><div className="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div className="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span></div>; }
