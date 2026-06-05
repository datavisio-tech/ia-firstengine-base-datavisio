FROM node:20-alpine AS deps
WORKDIR /workspace
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /workspace
COPY --from=deps /workspace/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /workspace
ENV NODE_ENV=production
COPY --from=builder /workspace/package*.json ./
COPY --from=builder /workspace/.next ./.next
COPY --from=builder /workspace/public ./public
COPY --from=builder /workspace/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
