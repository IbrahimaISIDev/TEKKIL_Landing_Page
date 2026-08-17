# =============================================================================
# TEKKIL LANDING — Dockerfile multi-stage (Next.js 16, pnpm, standalone)
# =============================================================================

# ─── Stage 1 : Dependencies ──────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
ENV PNPM_CONFIG_DANGEROUSLY_ALLOW_ALL_BUILDS=true
RUN pnpm install --frozen-lockfile

# ─── Stage 2 : Build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# ─── Stage 3 : Production ────────────────────────────────────────────────────
FROM node:22-alpine AS production
WORKDIR /app

RUN addgroup -g 1001 -S nodejs \
 && adduser  -u 1001 -S nextjs -G nodejs

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "server.js"]
