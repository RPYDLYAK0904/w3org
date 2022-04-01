FROM cypress/base:12

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

RUN ["npm", "run", "cy:w3org"]

#docker build -t cypress .
#docker-compose up