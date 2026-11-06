import { useEffect, useRef } from 'react';
import { mountDeployConsole } from './deploy-console.js';
import './styles.css';
export function DeployConsole() { const root = useRef<HTMLDivElement>(null); useEffect(() => root.current ? mountDeployConsole(root.current) : undefined, []); return <section className="cxd-special cxd-deploy" data-cxd-control="deploy-console" ref={root}><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div className="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section>; }
