const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ mensagem: "Falha ao buscar usuários", err });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.getById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ mensagem: "Falha ao buscar usuário", err });
  }
};

const createUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await UserModel.postUser(nome, email, senha);
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
  } catch (err) {
    res.status(500).json({ mensagem: "Falha ao cadastrar usuário", err });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    await UserModel.putUser(nome, email, senha, id);
    res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });
  } catch (err) {
    res.status(500).json({ mensagem: "Falha ao atualizar usuário", err });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.deleteUser(id);
    res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ mensagem: "Falha ao deletar usuário", err });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
