#!/bin/bash

docker build -t gcr.io/${PROJECT_ID}/travel-tool-front .
gcloud docker -- push gcr.io/${PROJECT_ID}/travel-tool-front
gcloud container clusters create harith-travel-tool
kubectl create -f deployment/deployment.yml
kubectl create -f deployment/service.yml
