import { buildInteractiveAdapters } from './interactive-buttons-code.mjs';

const css = `.cxd-docker-flow{box-sizing:border-box;width:min(100%,46rem);padding:1.25rem;border:1px solid #506777;border-radius:1rem;background:linear-gradient(135deg,#0d1c27,#142837);color:#edf8ff;font:500 .92rem/1.5 system-ui}.cxd-docker-flow *{box-sizing:border-box}.cxd-docker-flow h3{margin:0}.cxd-docker-flow__stages{display:grid;gap:.65rem;margin:1rem 0;padding:0;list-style:none;counter-reset:stage}.cxd-docker-flow__stage{display:flex;gap:.65rem;align-items:center;padding:.7rem .8rem;border:1px solid #496373;border-radius:.7rem;background:#10212d}.cxd-docker-flow__stage::before{counter-increment:stage;content:counter(stage,decimal-leading-zero);font:700 .72rem ui-monospace,monospace;color:#8af1da}.cxd-docker-flow__stage[aria-current=true]{border-color:#8af1da;background:#15443f;color:#fff}.cxd-docker-flow__actions{display:flex;flex-wrap:wrap;gap:.55rem}.cxd-docker-flow button{font:inherit;color:inherit;border:1px solid #6d96a9;border-radius:.55rem;padding:.55rem .8rem;background:#183544;cursor:pointer}.cxd-docker-flow button:hover{background:#245068}.cxd-docker-flow button:focus-visible{outline:3px solid #8af1da;outline-offset:3px}.cxd-docker-flow [role=status]{display:block;margin-top:.75rem;color:#b8d9e8}@media (max-width:500px){.cxd-docker-flow{padding:.85rem}.cxd-docker-flow__stage{align-items:flex-start}}@media (prefers-reduced-motion:reduce){.cxd-docker-flow *{transition:none!important;scroll-behavior:auto!important}}\n`;

const topologies = [
  ['astro-node-ssr','AstroNodeSsr','Astro / Node SSR',['Instalar dependencias','Compilar rutas estáticas','Arrancar runner sin root']],
  ['laravel-livewire-fpm','LaravelLivewireFpm','Laravel + Livewire',['Nginx FastCGI','PHP-FPM con OPcache','Worker Horizon y Redis']],
  ['spa-nginx-alpine','SpaNginxAlpine','SPA + Nginx',['Generar bundle Vite','Resolver rutas con try_files','Servir assets inmutables']],
  ['fullstack-compose-stack','FullstackComposeStack','Compose full-stack',['Esperar healthcheck de Postgres','Conectar Redis','Levantar aplicación']],
  ['bun-microservice','BunMicroservice','Microservicio Bun',['Resolver lockfile','Ejecutar TypeScript nativo','Exponer endpoint HTTP']],
  ['traefik-tls-proxy','TraefikTlsProxy','Traefik TLS',['Resolver certificado ACME','Balancear réplicas','Publicar métricas']]
];

const specs = Object.fromEntries(topologies.map(([id, name, title, stages]) => [id, {
  name, mount: `mount${name}`,
  markup: `<section class="cxd-docker-flow" data-cxd-control><h3>${title}</h3><ol class="cxd-docker-flow__stages" data-stages>${stages.map((stage, index) => `<li class="cxd-docker-flow__stage" data-stage aria-current="${index === 0 ? 'true' : 'false'}">${stage}</li>`).join('')}</ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>`,
  body: `const stages=Array.from(root.querySelectorAll('[data-stage]'));const status=root.querySelector('[role="status"]');let active=0;const render=(message)=>{stages.forEach((stage,index)=>stage.setAttribute('aria-current',String(index===active)));status.textContent=message;};root.querySelector('[data-run]').addEventListener('click',()=>{active=(active+1)%stages.length;render('Salto '+(active+1)+' de '+stages.length+': '+stages[active].textContent+'.');},{signal});root.querySelector('[data-reset]').addEventListener('click',()=>{active=0;render('Topología reiniciada: '+stages[0].textContent+'.');},{signal});render('Listo para simular la topología.');`
}]));

export const dockerIds = Object.keys(specs);
export function dockerCode(id, framework) { return buildInteractiveAdapters(id, framework, specs[id], css); }
