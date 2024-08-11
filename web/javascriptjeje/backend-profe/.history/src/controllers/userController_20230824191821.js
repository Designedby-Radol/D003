const router = require("../routes/users");

let db = [
  {
    username: "Striker",
    email: "striker@mail.com",
    password: "compaq",
  },
  {
    username: "Striker",
    email: "striker@mail.com",
    password: "compaq",
  },
  {
    username: "Striker",
    email: "striker@mail.com",
    password: "compaq",
  },
];

function login(request, response) {
  let { username, password, email } = request.query; // { ... }

  if ((username || email) && password) {
    for (let user of db) {
      if (
        (username === user.username || email === user.email) &&
        password === user.password
      ) {
        return response.json({
          message: "Sesion iniciada",
          username,
          email,
        });
      } else {
        return response.json({
          message: "Credenciales incorrectas",
          username,
          email,
        });
      }
    }
    return response.json({ message: "El no usuario existe", username, email });
  }
  return response.json({ message: "Faltan credenciales" });
}

module.exports = {
  login,
};
