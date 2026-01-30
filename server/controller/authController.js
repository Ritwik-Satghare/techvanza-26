import User from "../models/user.js";
import bcrypt from "bcrypt";

const register = async(req, res) => {
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

export {register};
