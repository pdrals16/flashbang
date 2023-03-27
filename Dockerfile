FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9.6.2

RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./

EXPOSE 3000

CMD npm start