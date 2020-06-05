const express = require('express');


const server = express();

server.use(express.static('public'))

//utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


server.get('/', (request, response) =>{
  return response.render('index.html')
})

server.get('/create-point', (request, response) =>{
  return response.render('create-point.html')
})

server.get('/search', (request, response) =>{
  return response.render('search-results.html')
})



server.listen(3333);

console.log('Server up on port 3333')