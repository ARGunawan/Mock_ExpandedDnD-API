const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port)

window.fetch('__rules')
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText); 
    } else { 
      return response.ok; 
    }
  })
  .then(response => response.json())
  .then(customRoutes => document.getElementById('custom-routes').innerHTML = CustomRoutesBlock({
    customRoutes}))
  .catch(error => console.log(error));