FROM node:14 as build-deps
WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
CMD yarn run dev 
EXPOSE 8000
