const UserModel = require("../models/user.model");

//POST
async function createUser(request, response) {
  //extraer la data del body
  let { username, email, name, lastname, password } = request.body;

  // revisar si en la base de datos se encuentran registros con el username o el email
  const data = await UserModel.find({ $or: [{ email }, { username }] });

  // condicionar si se va a crear o si va a mostrar un mensaje de que yta existe - [] - null
  if (data && data.length !== 0) {
    return response.status(400).json({ msg: "este usuario ya existe" });
  }

  //decirle que quiero crear un documento en la coleccion users
  const newUser = new UserModel({
    username,
    email,
    name,
    lastname,
    password,
  });

  // lo guarda
  await newUser.save();

  return response.status(201).json({ msg: "usuario creado" });
}

//GET
async function getAllUsers(request, response) {
  const data = await UserModel.find();
  response.status(200).json({ data });
}

async function getByUsername(request, response) {
  try {
    const {username} = request.params
    const user = await UserModel.findOne({username})
    return response.status(200).json({ user }); 
  } catch (error) {
    return response.status(400).json({ msg: "Error", error }); 
  }
}

//PUT
async function updateUser(request, response) {
  try {
    //query param - request.query

    //url params - request.param
    let { _id } = request.params;
    console.log(_id);

    //body - request.body

    let data = request.body;

    //actualice el usuario
    await UserModel.findByIdAndUpdate(_id, data);

    return response.status(200).json({ msg: "Usuario fue actualizado" });
  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }
}

//DELETE
async function deleteUser(request, response){

  try {
    let { _id } = request.params;

    //elimine el usuario
    await UserModel.findByIdAndRemove(_id);

    return response.status(200).json({ msg: "Usuario fue eliminado" });
  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }
}

async function addFollower(request, response){

  try {
    
  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }

}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getByUsername
};
