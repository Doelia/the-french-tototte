#!/bin/bash

set -e

export DOCKER_DEFAULT_PLATFORM=linux/amd64
#export DOCKER_HOST=ssh://debian@
export dockerfile=".cloud/prod/docker-compose.yaml"

if [ -z "$DOCKER_HOST" ]; then
  echo "DOCKER_HOST is not set"
  exit 1
fi

docker build . -f .cloud/Dockerfile -t doelia/the-french-tototte:main
docker compose -p the-french-tototte -f $dockerfile up -d

