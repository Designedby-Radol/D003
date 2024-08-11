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

    let {id_user_to_follow, id_user_that_follow} = request.body

    //personas que sigó
    let user_that_follow = await UserModel.findById(id_user_that_follow)
    user_that_follow.follows.push(id_user_to_follow)
    await UserModel.findByIdAndUpdate(id_user_that_follow, {follows: user_that_follow.follows})

    //personas que lo siguen
    let user_to_follow = await UserModel.findById(id_user_to_follow)
    user_to_follow.followers.push(id_user_that_follow)
    await UserModel.findByIdAndUpdate(id_user_to_follow, {followers: user_to_follow.followers})

    return response.status(400).json({ msg: "Se ha seguido un usuario", id_user_to_follow, id_user_that_follow});

  } catch (error) {
    return response.status(400).json({ msg: "Error", error });
  }

}

async function deleteFollower(request, response){

  try {

    let {id_user_to_unfollow, id_user_that_unfollow} = request.body

    //personas que deje de seguir
    let user_that_unfollow = await UserModel.findById(id_user_that_unfollow)

    let indexToDelete = user_that_unfollow.follows.indexOf(id_user_to_unfollow)
    user_that_unfollow.follows.splice(indexToDelete, 1)

    await UserModel.findByIdAndUpdate(id_user_that_unfollow, {follows: user_that_unfollow.follows})

    //personas que dejaron de seguir
    let user_to_unfollow = await UserModel.findById(id_user_to_unfollow)

    let followerToDelete = user_to_unfollow.followers.indexOf(id_user_that_unfollow)
    user_to_unfollow.followers.splice(followerToDelete, 1)

    await UserModel.findByIdAndUpdate(id_user_to_unfollow, {followers: user_to_unfollow.followers})

    return response.status(400).json({ msg: "Se ha seguido un usuario", id_user_to_unfollow, id_user_that_unfollow});

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
  deleteFollower
};
