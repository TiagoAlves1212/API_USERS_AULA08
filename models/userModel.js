const pool = require("../db");

const UserModel = {
  getAll: async () => {
    const consulta = "SELECT * FROM users";
    const { rows } = await pool.query(consulta);
    return rows;
  },
  getById: async (id) => {
    const consulta = "SELECT * FROM users WHERE id = $1";
    const { rows } = await pool.query(consulta, [id]);
    return rows[0];
  },
  postUser: async (nome, email, senha) => {
    const consulta =
      "INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3)";
    await pool.query(consulta, [nome, email, senha]);
  },
  putUser: async (nome, email, senha, id) => {
    const consulta =
      "UPDATE users SET nome = $1, email = $2, senha = $3 WHERE id = $4";
    await pool.query(consulta, [nome, email, senha, id]);
  },
  deleteUser: async (id) => {
    const consulta = "DELETE FROM users WHERE id = $1";
    await pool.query(consulta, [id]);
  },
};

module.exports = UserModel;
