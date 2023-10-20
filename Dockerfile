FROM node:18

WORKDIR /myapp
COPY package.json .
RUN npm install

EXPOSE 3000 3306

COPY . .
CMD npm start
