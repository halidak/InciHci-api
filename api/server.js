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
const getByIdRoute = require('./routes/products/getById');
const deleteRoute = require('./routes/products/delete');
const updateByIdRoute = require('./routes/products/update');
const getProductyByTypeRouter = require('./routes/products/getByType');

//type
const createTypeRoute = require('./routes/type/addType');
const getTypesRoute = require('./routes/type/getAll');

//auth
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/verify', verifyRouter);

//products
app.use('/createProduct', createProductRouter);
app.use('/getAllProducts', getAllRouter);
app.use('/getById', getByIdRoute);
app.use('/deleteProduct', deleteRoute);
app.use('/updateProduct', updateByIdRoute);
app.use('/getByType', getProductyByTypeRouter);


//type
app.use('/createType', createTypeRoute);
app.use('/getTypes', getTypesRoute);

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
