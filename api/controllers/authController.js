const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}))

const handleRegister = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
    return res.status(400).json({'message': 'Email and password are required'});
    
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate)
        return res.status(400).json({'message': 'Email already exists'});
    try {
        const { firstName, lastName, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const verificationCode = Math.floor(10000 + Math.random() * 90000);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            verificationCode,
            verified: false,
            role: 'user',
        });
        console.log(newUser);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
        return transporter.sendMail({
            to: email,
            from: process.env.SENDER_EMAIL,
            subject: 'Verify your email',
            html: `<h1>Verification code: ${verificationCode}</h1>`
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const handleLogin = async (req, res) => {
    // Get the user's credentials from request body
    const { email, password } = req.body;

    // Check if the user exists in the database
    //or not using findOne method of mongoose model
    let existingUser = null;
    try {
        existingUser = await User.findOne({ email })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    // If the user does not exist, return an error
    if (!existingUser)
        return res.status(404).json({ message: 'User does not exist' });

     // Check if the user is verified
    if (!existingUser.verified) {
        return res.status(403).json({ message: 'User is not verified' });
    }
    
    // If the user exists, check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    // If the password is incorrect, return an error
    if (!isPasswordCorrect)
        return res.status(400).json({ message: 'Invalid credentials' });

    // If the password is correct, create a JWT token
    const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
    );

    // Send the token to the client
    res.status(200).json({ result: existingUser, token });
}

const handleVerify = async (req, res) => {
    const { verificationCode } = req.body;
    
    try {
      const user = await User.findOne({ verificationCode });
  
      if (!user) {
        return res.status(404).json({ message: 'Verification code not found' });
      }
  
      // Update the 'verified' field to true
      user.verified = true;
      await user.save();
  
      res.status(200).json({ message: 'Verification successful' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
    handleRegister,
    handleLogin,
    handleVerify
}





