FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
RUN npm i
RUN npm run build

FROM node:16-alpine
EXPOSE 8080
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
CMD ["node", "dist/index.js"]
