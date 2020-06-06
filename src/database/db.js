// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar objetos que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;


// db.serialize(() => {

  // criar um tabela

//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   const query = `
//       INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//       ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1579756423478-02bc82a97679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "Papersider",
//     "Carlos Bevilacqua, Centro",
//     "Nº 370",
//     "São Paulo",
//     "Castilho",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]



//   function afterInsertData(err) {
//     if(err) {
//       return console.log(err)
//     }

//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

//   db.run(query, values, afterInsertData)

//   // consulta os dados na tabela
//   // db.all(`SELECT name FROM places`, function(err, rows){
//   //   if(err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Aqui estão seus registros")
//   //   console.log(rows)
//   // })

  //deletar um dado na tabela
//   db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//     if(err) {
//       return console.log(err)
//     }

//     console.log("Registro deletado com sucesso")
//   })

 

// })