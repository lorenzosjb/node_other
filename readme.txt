Node testing no libraries
    https://www.youtube.com/watch?v=A-5b6IPdLA0

Docker mssql

version: '3.8'
- https://faztweb.com/contenido/docker-compose-nodejs-y-mysql
- https://github.com/fazt/nodejs-mysql-docker
- https://www.youtube.com/watch?v=Aj8E-Vhs1VM

- docker compose up --build
- docker compose down

https://www.builder.io/blog/debug-nodejs
- node server.js --inspect-brk
- If the Node.js icon isn’t there in DevTools:

Go to the chrome://inspect url.
Click Open dedicated DevTools for Node.
Go to Connection tab
Click Add Connection.
Add a connection to match the port that node is listening on; for example, localhost:9229.

