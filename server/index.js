
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: '30mb', extended: true }))

app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use("/user", userRouter);

const CONNECTION_URL = process.env.MONGO

const PORT = process.env.PORT|| 5000;

const DB_NAME = process.env.DB_NAME ;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: DB_NAME })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  
mongoose.set('useFindAndModify', false);