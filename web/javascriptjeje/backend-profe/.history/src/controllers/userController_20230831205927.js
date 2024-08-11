const UserModel = require('../models/user.model')

async function createUser(request, response){
  let {username, email, name, lastname, password} = request.body

  //decirle que quiero crear un documento en la coleccion users
  const newUser = new UserModel({
    username, email, name, lastname, password
  })

  response.json({msg: 'usuario creado', r: request.body})
}

module.exports = {
  createUser,
};
