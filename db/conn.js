const { Sequelize } = require('sequelize');

const conn = new Sequelize('mvcdb2','root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try{
  conn.authenticate();
  console.log("Conexão com o banco de dados realizada.")
}
catch(err){
  console.log('Erro: ' + err)
}

module.exports = conn;