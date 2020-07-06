# Builder Step
FROM node:12 as builder

## Create node_modules
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci

COPY . .
RUN npm run build

## Container
FROM node:12-alpine

RUN npm i -g serve

WORKDIR /app

COPY --from=builder /app/build build/

CMD serve -s build