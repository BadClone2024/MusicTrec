import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import users from './routes/users.js';


dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to the database"))

app.use('/users', users)



app.listen(3000, () => {
    console.log("Server is running");
})