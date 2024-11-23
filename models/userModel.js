const pool = require("../db");

const UserModel = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  },
  getById: async (id) => {
    const consulta = "SELECT * FROM users WHERE id = ?";
    const [rows] = await pool.query(consulta, [id]);
    return rows[0];
  },
  postUser: async (nome, email, senha) => {
    const consulta = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";
    await pool.query(consulta, [nome, email, senha]);
  },
  putUser: async (nome, email, senha, id) => {
    const consulta =
      "UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?";
    await pool.query(consulta, [nome, email, senha, id]);
  },
  deleteUser: async (id) => {
    const consulta = "DELETE FROM users WHERE id = ?";
    await pool.query(consulta, [id]);
  },
};

module.exports = UserModel;
