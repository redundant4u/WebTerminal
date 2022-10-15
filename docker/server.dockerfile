FROM node:16.16

WORKDIR /home/node

COPY config/entrypoint.server.sh /entrypoint.sh
