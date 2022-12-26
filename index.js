import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// importing dotenv to make visible the process env varables in application.
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://anikmishra:anikmishra836@cluster0.5g8i3oz.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT || 5000, () => {
    console.log('Server is listening on port 5000');
}))
.catch((error) => console.log(error.message));

// mongoose.set('strictQuery', true);