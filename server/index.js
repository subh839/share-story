//require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
//const dotenv=require('dotenv')
//dotenv.config();
'https://github.com/subh839/share-story.git'
const app = express();
// express middleware 
//app initialize to express 
app.use(cors());
// cors must be above of postRoutes
app.use(bodyParser.json({ limit: '35mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '35mb', extended: true }))
// bodyparser to populate senders req

app.use('/posts', postRoutes);

const CONNECTION_URL ='mongodb+srv://shubha:shubha1234@cluster0.ezibl.mongodb.net/?retryWrites=true&w=majority';
// string
const PORT = process.env.PORT|| 5000;
// connect database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//return a promise
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  // , callback function 
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
