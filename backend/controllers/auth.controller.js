import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generatetoken.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Check if username already exists
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10); // Higher value -> better security but slower performance
        const hashedPassword = await bcrypt.hash(password, salt);

        // Determine profile picture based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;

        // Create a new user instance
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword, // Store the hashed password
            gender,
            profilePic,
        });

        
        // Generate JWT token and set it in a cookie
        generateTokenAndSetCookie(newUser, res);

        // Save the new user to the database
        await newUser.save();

        // Generate JWT token and set it in a cookie
        generateTokenAndSetCookie(newUser, res);

        // Respond with the new user's details
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Username does not exist" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password || "");
        if (!isMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }       

        // Generate JWT token and set it in a cookie
        generateTokenAndSetCookie(user._id, res);

        // Respond with the user's details
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
        
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{
            maxAge:0
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({ error: `Internal server Error: ${error.message}` });
    }
};
