import { useEffect, useRef } from 'react';
import { mountFormReplyToast } from './form-reply-toast.js';
import './styles.css';
export function FormReplyToast() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountFormReplyToast(root.current) : undefined, []); return <div className="cxd-toast" data-cxd-control="form-reply-toast" ref={root}><strong>Comentario de revisión</strong><p>¿Podemos subir el límite de rate-limiting?</p><form data-form><input data-input type="text" required aria-label="Respuesta rápida" placeholder="Escribe una respuesta" /><button type="submit">Responder</button></form><span role="status">Esperando respuesta</span></div>; }
