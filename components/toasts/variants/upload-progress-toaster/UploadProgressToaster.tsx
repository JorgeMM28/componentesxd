import { useEffect, useRef } from 'react';
import { mountUploadProgressToaster } from './upload-progress-toaster.js';
import './styles.css';
export function UploadProgressToaster() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountUploadProgressToaster(root.current) : undefined, []); return <div className="cxd-toast" data-cxd-control="upload-progress-toaster" ref={root}><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span></div>; }
