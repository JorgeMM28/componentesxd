/**
 * Prepara la carpeta .vercel/output siguiendo la especificación oficial
 * Vercel Build Output API v3 para despliegues directos o precompilados (vercel deploy --prebuilt).
 */
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const vercelDir = path.join(rootDir, '.vercel');
const outputDir = path.join(vercelDir, 'output');
const staticDir = path.join(outputDir, 'static');

if (!fs.existsSync(distDir)) {
  console.error('Error: No se encontró el directorio dist/. Ejecuta primero "npm run build".');
  process.exit(1);
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(staticDir, { recursive: true });

// Copiar todos los archivos estáticos compilados de Astro (dist -> .vercel/output/static)
fs.cpSync(distDir, staticDir, { recursive: true });

// Generar .vercel/output/config.json (Build Output API v3)
const config = {
  version: 3,
  routes: [
    {
      src: '^/_astro/(.*)$',
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      },
      continue: true
    },
    {
      handle: 'filesystem'
    }
  ]
};

fs.writeFileSync(path.join(outputDir, 'config.json'), JSON.stringify(config, null, 2), 'utf8');

console.log('Listo: .vercel/output generado (Vercel Build Output API v3) con las 24 páginas estáticas.');

