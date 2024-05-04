FROM node:20 as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY public public
COPY src src
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY tsconfig.json .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/out /usr/share/nginx/html

