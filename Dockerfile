FROM node:18

WORKDIR /myapp
COPY package.json .
RUN npm install

EXPOSE 8080

COPY . .
CMD npm start
