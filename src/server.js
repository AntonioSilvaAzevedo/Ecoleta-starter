const express = require('express');


const server = express();

const db = require('./database/db')

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true}))

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

server.post('/savepoint', (request, response) =>{

  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    )VALUES(?,?,?,?,?,?,?);
  `

  const values = [
    request.body.image,
    request.body.name,
    request.body.address,
    request.body.address2,
    request.body.state,
    request.body.city,
    request.body.items,
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log('cadastro realizado')
    console.log(this)

    return response.render('create-point.html', { saved: true})
  }

  db.run(query, values, afterInsertData)

 
})

server.get('/search', (request, response) =>{

  const search = request.query.search

  if(search == "") {
    //pesquisa vazia
    return response.render("search-results.html", { total: 0 })
  }

  // pegar os dados do banco de dados

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    const total = rows.length  // propriedade de um array que conta quantos eletemento tem em um arry
      // mostrar a pagina html com os dados do banco de dados
    return response.render('search-results.html', { places: rows, total})
  })
 
});



server.listen(3333);

console.log('Server up on port 3333')