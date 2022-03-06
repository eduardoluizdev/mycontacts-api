FROM node:17 AS builder
COPY . /www/mycontactsapp
WORKDIR /www/mycontactsapp
RUN yarn
RUN yarn build

FROM node:17-alpine3.15 AS runner
WORKDIR /www/mycontactsapp
COPY --from=builder /www/mycontactsapp/node_modules ./node_modules
COPY --from=builder /www/mycontactsapp/dist/out.js ./dist/out.js
COPY --from=builder /www/mycontactsapp/package.json ./package.json
EXPOSE 3000
CMD ["yarn", "start"]