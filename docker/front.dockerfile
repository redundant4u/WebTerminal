FROM node:16.16

WORKDIR /home/node

COPY config/entrypoint.front.sh /entrypoint.sh
