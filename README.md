# svelte-routify-vite-express template

This is a template that gets you easily started with svelte, routify, vite and express.


In development it will serve the development version of the frontend, on a separate server.

In production as build it will serve the front end build on the same server.

### To start:
Run `npm run client-install`.
Create `.env` file in root with at least `NODE_ENV = dev` in it.

Run server: `npm run dev`

basic commands:

- `npm run client-install` 
  will install the client side packages (**Launch this first IMPORTANT**) 
- `npm run client-build`  
  this will build the client
- `npm run server-run`  
  this will run the server separately
- `npm run client`  
  this will run the client separately
- `npm run dev`  
  this will run both the server and client concurrently
- `npm run build-server`  
  this will build the server and then launch the production Server (put `production` as `NODE_ENV` in `.env`)



If I've forgotten anything feel free to create an issue.