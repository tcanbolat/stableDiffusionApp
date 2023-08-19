FROM node:16.3.0-alpine

ARG NODE_ENV=development

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

CMD ["npx", "expo", "start", "-c", "--port", "3000"]
