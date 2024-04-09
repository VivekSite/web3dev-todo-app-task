FROM node:alpine3.19 as node-space
WORKDIR /reactapp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node-space /reactapp/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]