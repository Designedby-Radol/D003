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

async function getFollowersByUsername(request, response) {
  try {
    const {username} = request.params
    const { followers } = await UserModel.find({username}, {"followers": 1})
    return response.status(200).json({ followers }); 
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

    let {id_a_seguir, id_que_sigue_a} = request.body

    //personas que sigó
    let que_sigue_a = await UserModel.findById(id_que_sigue_a)
    que_sigue_a.follows.push(id_a_seguir)
    await UserModel.findByIdAndUpdate(id_que_sigue_a, {follows: que_sigue_a.follows})

    //personas que lo siguen
    let a_seguir = await UserModel.findById(id_a_seguir)
    a_seguir.followers.push(id_que_sigue_a)
    await UserModel.findByIdAndUpdate(id_a_seguir, {followers: a_seguir.followers})

    return response.status(400).json({ msg: "Se ha seguido un usuario", id_a_seguir, id_que_sigue_a});

  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }

}

async function deleteFollower(request, response){

  try {

    let {id_a_no_seguir, id_no_sigue_a} = request.body

    //personas que deje de seguir
    let no_sigue_a = await UserModel.findById(id_no_sigue_a)

    let indexToDelete = no_sigue_a.follows.indexOf(id_a_no_seguir)
    no_sigue_a.follows.splice(indexToDelete, 1)

    await UserModel.findByIdAndUpdate(id_no_sigue_a, {follows: no_sigue_a.follows})

    //a la persona que dejaron de seguir
    let no_seguir_a = await UserModel.findById(id_a_no_seguir)

    let followerToDelete = no_seguir_a.followers.indexOf(id_no_sigue_a)
    no_seguir_a.followers.splice(followerToDelete, 1)

    await UserModel.findByIdAndUpdate(id_a_no_seguir, {followers: no_seguir_a.followers})
    return response.status(400).json({ msg: "Se ha dejado de seguir un usuario", id_a_no_seguir, id_no_sigue_a});

  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }

}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getByUsername,
  addFollower,
  deleteFollower,
  getFollowersByUsername
};
