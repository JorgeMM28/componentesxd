# Requiere bun.lock y un script start que escuche en 0.0.0.0:3000.
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps --chown=bun:bun /app/node_modules ./node_modules
COPY --chown=bun:bun . .
USER bun
EXPOSE 3000
CMD ["bun", "run", "start"]
