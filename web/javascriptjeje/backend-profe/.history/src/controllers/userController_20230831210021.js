const UserModel = require('../models/user.model')

async function createUser(request, response){
  let {username, email, name, lastname, password} = request.body

  //decirle que quiero crear un documento en la coleccion users
  const newUser = new UserModel({
    username, email, name, lastname, password
  })

  await newUser.save()

  response.json({msg: 'usuario creado'})
}

module.exports = {
  createUser,
};
