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
const getRatingRoute = require('./routes/rating/getRating');

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
app.use('/products/create', createProductRouter);
app.use('/products/getAll', getAllRouter);
app.use('/products/getById', getByIdRoute);
app.use('/products/delete', deleteRoute);
app.use('/products/update', updateByIdRoute);
app.use('/products/getByType', getProductyByTypeRouter);
app.use('/products/userProducts', userProductRoute);
app.use('/products/likedProducts', likedProductRoute);

//type
app.use('/types/create', createTypeRoute);
app.use('/types/getTypes', getTypesRoute);

//rating
app.use('/ratings/addRating', addRatingRoute);
app.use('/ratings/averageRating', averateRoute);
app.use('/ratings/get', getRatingRoute)

//like
app.use('/likes/addLike', addLikeRoute);
app.use('/likes/likeCount', likeCountRoute);
app.use('/likes/removeLike', removeLikeRoute);

//composition
app.use('/compositions/addComposition', addCompositionRoute);
app.use('/compositions/getCompositions', getCompositionsRoute);

//comment
app.use('/comments/addComment', addCommentRoute);
app.use('/comments/removeComment', removeCommentRoute);
app.use('/comments/getComments', getCommentsRoute);
app.use('/comments/getAllComments', getAllCommentsRoute);

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
