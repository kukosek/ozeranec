# Dockerfile
FROM node:16-alpine3.15 as ts-compiler

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm run build

EXPOSE 8000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8000

CMD [ "npm", "start" ]
