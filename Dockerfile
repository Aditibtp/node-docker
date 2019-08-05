FROM node:10

RUN apt-get update

COPY index.js index.js

ENTRYPOINT node index.js