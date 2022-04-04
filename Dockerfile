FROM cypress/included:9.5.3
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cucumber-html-report.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]

# docker build -t cypress-w3org .
# docker-compose run e2e-chrome
# docker-compose run e2e-firefox
# docker-compose up