FROM node:20-alpine AS builder

ENV NODE_ENV=build

USER node
WORKDIR /home/node

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .
RUN yarn build \
    && yarn install --production --frozen-lockfile

# ---

FROM node:20-alpine

ENV NODE_ENV=production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json /home/node/yarn.lock ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/src/main.js"]

EXPOSE 3030
