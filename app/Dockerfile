FROM node:17
COPY . /www/mycontactsapp
WORKDIR /www/mycontactsapp
RUN ls -la
RUN echo "funcionou"
RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version
RUN pwd
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]
