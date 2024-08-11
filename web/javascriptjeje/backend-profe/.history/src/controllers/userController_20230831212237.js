const UserModel = require('../models/user.model')

async function createUser(request, response){
  //extraer la data del body
  let {username, email, name, lastname, password} = request.body

  //decirle que quiero crear un documento en la coleccion users
  const newUser = new UserModel({
    username, email, name, lastname, password
  })

  // lo guarda
  await newUser.save()

  response.status(201).json({msg: 'usuario creado'})
}

async function getAllUsers(request, response){

  const data = await UserModel.find()
  response.status(200).json({data})

}

module.exports = {
  createUser,
  getAllUsers
};
