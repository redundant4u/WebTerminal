#!/bin/bash

docker build -t webterminal-front:dev -f front.dockerfile .
docker build -t webterminal-server:dev -f server.dockerfile .

docker-compose up -d
