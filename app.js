//external import
const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
//internal import
const app = express();
dotenv.config();



// database connection 
// mongoose
//     .connect(process.env.MONGO_CONNECTION_STRING, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("database connection successful!"))
//     .catch((err) => console.log(err));




// database connection 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9x7m2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



client.connect(err => {
    const collection = client.db("kanban_board").collection("task");
    console.log('database connect');
});




// request parser
app.use(express.json());

//parse-cookies
// app.use(cookieParser(process.env.COOKIE_SECRET));

//routung setup
// app.use('/', loginRouter);
// app.use('/user', userRouter);
// app.use('/inbox', inboxRouter);

// 404 not found handelar
// app.use(notFoundHandelar);
//common error handdaling
// app.use(errorHandler);



app.listen(process.env.PORT, () => {
    console.log(`'Kanban Board server is running ${process.env.PORT}`)
});
