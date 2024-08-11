const router = require("../routes/users");

async function createUser(request, response){

  //let {username, email, name, lastName, password} = request.body
  console.log({r: request.body})

  response.json({msg: 'usuario creado', r: request.body || "vacio"})

}

module.exports = {
  createUser,
};
