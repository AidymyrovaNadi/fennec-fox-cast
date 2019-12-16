#!/bin/sh
cd backend/ || exit
echo Starting deploy...
docker login -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi
docker build --build-arg DBHOST_ARG=$DBHOST DBPASSWORD_ARG=$DBPASSWORD DBUSER_ARG=$DBUSER -f Dockerfile -t $DOCKER_USER/$DOCKER_APP_NAME:$TAG .
docker push $DOCKER_USER/$DOCKER_APP_NAME:$TAG
cd ..
