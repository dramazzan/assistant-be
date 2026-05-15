FROM node:22-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY index.js ./index.js
COPY src ./src

USER node

EXPOSE 4000

CMD ["node", "index.js"]
