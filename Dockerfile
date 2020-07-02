FROM node:14.5

RUN mkdir -p /fpi/app
COPY . /fpi/app

WORKDIR /fpi/app/dunder-miff-ui
RUN npm install
RUN npm run build

WORKDIR /fpi/app
RUN npm install

ENV PORT 5000
ENV DBCXN mongodb://192.168.99.100:27017/dunder-mifflin

EXPOSE 5000

CMD [ "npm", "start" ]