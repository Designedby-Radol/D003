const router = require("../routes/users");

async function createUser(request, response){

  let {username, email, name, lastName, password} = request.body

  response.json({msg: 'usuario creado', request.body})

}

module.exports = {
};
