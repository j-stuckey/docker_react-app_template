FROM node:11

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install