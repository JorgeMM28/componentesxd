# ============================================================================
# COMPONENTESXD — DOCKER BLUEPRINT: ASTRO / REACT / VUE / SVELTE / ANGULAR SSR
# Archivo: components/docker/node-ssr-stack/Dockerfile
# ============================================================================
# Requiere @astrojs/node configurado en modo standalone y package-lock.json.
# Para Astro estático usa el ejemplo static-nginx.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 appuser

COPY --from=builder --chown=appuser:nodejs /app/dist ./dist
COPY --from=builder --chown=appuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:nodejs /app/package.json ./package.json

USER appuser
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]

