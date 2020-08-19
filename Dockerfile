FROM node:10.16.0

RUN mkdir /app
WORKDIR /app

COPY ./ /app
RUN npm install

CMD [ "npm", "run", "start" ]
