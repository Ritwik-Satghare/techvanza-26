import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const register = async(req, res) => {
    try {
        const {name, phoneNumber, password, role, location} = req.body;

        if (!phoneNumber || !password || !role) 
            return res.status(400).json({message: "Phone number, password, and role are required"});
        
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) 
        return res.status(409).json({message: "User already exists with this phone number"});
        

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            phoneNumber,
            password: hashedPassword,
            role,
            location,
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                phoneNumber: user.phoneNumber,
                role: user.role,
                location: user.location,
            },
        });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({message: "Server error"});
    }
};

export const login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return res.status(400).json({
        message: "Phone number and password are required",
      });
    }

    const user = await User.findOne({ phoneNumber });

    // ❌ User does NOT exist
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please register first.",
      });
    }

    // ❌ Password mismatch
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password. Please try again.",
      });
    }
    // ✅ Successful login
    const token = generateToken({
      userId: user._id,
      role: user.role,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

