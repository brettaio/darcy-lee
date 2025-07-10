# docker/dev-frontend.Dockerfile

FROM node:22-alpine
WORKDIR /app

# install Angular CLI
RUN npm install -g @angular/cli

# install dependencies
COPY package*.json ./
RUN npm ci

# copy the entire repo (so angular.json + proxy config are present)
COPY . .

# expose the dev-server port
EXPOSE 4200

# start ng serve for the sponOS project with proxy
CMD ["ng","serve","sponOS","--host","0.0.0.0","--port","4200","--configuration","development","--proxy-config","websites/sponOS/proxy.conf.json"]
