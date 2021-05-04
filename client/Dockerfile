FROM node:latest as build-deps
WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
CMD npm run develop 
EXPOSE 8000
