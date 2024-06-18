import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import UserModal from "../models/user.js";

dotenv.config();

const secret = process.env.SECRET;

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });

  } catch (err) {

    res.status(500).json({ message: "Something went wrong" });
    
  }
};

export const signup = async (req, res) => {

  const { email, password, firstName, lastName, mobile } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, first_name: firstName, last_name: lastName, mobile: mobile });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

    res.status(201).json({ result, token });

  } catch (error) {

    res.status(500).json({ message: "Something went wrong" });

  }
};

export const userDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const oldUser = await UserModal.findOne({ _id: id });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    res.status(200).json({ result: oldUser });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
