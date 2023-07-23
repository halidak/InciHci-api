const express = require('express');
const connectDB = require('./config/dbConn');
const cors = require('cors');
require('dotenv').config();

// Connect to the database
connectDB();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Import and use the router
const registerRouter = require('./routes/auth/register');
const verifyRouter = require('./routes/auth/verify');
const loginRouter = require('./routes/auth/login');

//products
const createProductRouter = require('./routes/products/create');
const getAllRouter = require('./routes/products/getAll');

//auth
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/verify', verifyRouter);

//products
app.use('/createProduct', createProductRouter);
app.use('/getAllProducts', getAllRouter)

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
