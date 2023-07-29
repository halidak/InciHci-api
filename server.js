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

//auth
const registerRouter = require('./routes/auth/register');
const verifyRouter = require('./routes/auth/verify');
const loginRouter = require('./routes/auth/login');
const getUserByIdRoute = require('./routes/auth/getById');
const updateUserRoute = require('./routes/auth/update');
const deleteUserRoute = require('./routes/auth/delete');
const changePwdRoute = require('./routes/auth/changePwd');
const resetPwdRoute = require('./routes/auth/reset');
const sendCodeRoute = require('./routes/auth/sendCode');

//products
const createProductRouter = require('./routes/products/create');
const getAllRouter = require('./routes/products/getAll');
const getByIdRoute = require('./routes/products/getById');
const deleteRoute = require('./routes/products/delete');
const updateByIdRoute = require('./routes/products/update');
const getProductyByTypeRouter = require('./routes/products/getByType');
const userProductRoute = require('./routes/products/userProducts');
const likedProductRoute = require('./routes/products/likedProducts');

//type
const createTypeRoute = require('./routes/type/addType');
const getTypesRoute = require('./routes/type/getAll');

//rating
const addRatingRoute = require('./routes/rating/addRating');
const averateRoute = require('./routes/rating/averageRating');

//like
const addLikeRoute = require('./routes/like/addLike');
const likeCountRoute = require('./routes/like/likeCount');
const removeLikeRoute = require('./routes/like/removeLike');

//composition
const addCompositionRoute = require('./routes/composition/add');
const getCompositionsRoute = require('./routes/composition/getByProduct'); 

//comment
const addCommentRoute = require('./routes/comment/add');
const removeCommentRoute = require('./routes/comment/delete');
const getCommentsRoute = require('./routes/comment/getByProduct');
const getAllCommentsRoute = require('./routes/comment/getAll');

//auth
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/verify', verifyRouter);
app.use('/getById', getUserByIdRoute);
app.use('/update', updateUserRoute);
app.use('/delete', deleteUserRoute);
app.use('/changePwd', changePwdRoute);
app.use('/resetPwd', resetPwdRoute);
app.use('/sendCode', sendCodeRoute);

//products
app.use('/createProduct', createProductRouter);
app.use('/getAllProducts', getAllRouter);
app.use('/getById', getByIdRoute);
app.use('/deleteProduct', deleteRoute);
app.use('/updateProduct', updateByIdRoute);
app.use('/getByType', getProductyByTypeRouter);
app.use('/userProducts', userProductRoute);
app.use('/likedProducts', likedProductRoute);

//type
app.use('/createType', createTypeRoute);
app.use('/getTypes', getTypesRoute);

//rating
app.use('/addRating', addRatingRoute);
app.use('/averageRating', averateRoute);

//like
app.use('/addLike', addLikeRoute);
app.use('/likeCount', likeCountRoute);
app.use('/removeLike', removeLikeRoute);

//composition
app.use('/addComposition', addCompositionRoute);
app.use('/getCompositions', getCompositionsRoute);

//comment
app.use('/addComment', addCommentRoute);
app.use('/removeComment', removeCommentRoute);
app.use('/getComments', getCommentsRoute);
app.use('/getAllComments', getAllCommentsRoute);

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
