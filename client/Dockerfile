FROM node:16.3.0-alpine

ARG NODE_ENV
ARG EXPO_USERNAME
ARG EXPO_PASSWORD

ENV NODE_ENV=$NODE_ENV

ENV NODE_PATH=/srv/app/node_modules
WORKDIR /srv/app
COPY package.json ./

RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    npm install --no-cache  --production; \
  else \
    npm install --no-cache; \
  fi;

COPY . /srv/app

EXPOSE 3000

RUN if [ "$NODE_ENV" = "development" ]; then \
      npm install -g expo-cli; \
      npx expo login -u $EXPO_USERNAME -p $EXPO_PASSWORD; \
    fi;

CMD ["npx", "expo", "start", "-c", "--port", "3000"]
