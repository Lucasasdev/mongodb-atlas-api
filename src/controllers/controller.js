const UserModel = require("../database/models/userModel");

const getUser = async (_req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(message.error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findOne(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);

  try {
    const users = await UserModel.create(req.body);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log({ message: "Internal server error" });
  }
};

const changeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const modifyUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ Message: `User modified! ${user}` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  changeUser,
  modifyUser,
};
