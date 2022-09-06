//external import
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//internal import
const { notFoundHandelar, errorHandler } = require('./middleware/common/errorHandler');
const { connectToServer } = require('./dbConfig/dbConnect');
const TaskRoute = require('./routers/v1/taskRoute');

// const userRouter =require('./Router/userRouter');
// const inboxRouter = require('./Router/inboxRouter');

const app = express();
dotenv.config();
app.use(cors());


// database connection 
connectToServer((err) => {
    if (!err) {
        app.listen(process.env.PORT, () => {
            console.log(`'Kanban Board server is running ${process.env.PORT}`)
        });
    } else {
        console.log(err)
    }
});


// request parser
app.use(express.json());


//routung setup
app.use('/', TaskRoute);
// app.use('/user', userRouter);
// app.use('/inbox', inboxRouter);

// 404 not found handelar
app.use(notFoundHandelar);
//common error handdaling
app.use(errorHandler);




