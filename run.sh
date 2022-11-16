#!/bin/bash
set +x;

echo "Stopping old containers....."
podman rm -f swgoh cors

echo "Building new applicaiton..."
npm run build


echo "Building new version image......"
podman build -t chentex/swgoh-status:latest .

echo "Running...."

figlet "SWGOH STATUS"

podman run --name swgoh -p 5000:80 -d chentex/swgoh-status:latest
podman run -it -d --rm --name cors -p 8080:8080 chentex/cors:latest
