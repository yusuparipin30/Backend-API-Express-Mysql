//mengimport
import express from "express";
import cors from "cors";
//memanggil router
import UserRoute from "./routes/UserRoute.js";

//membuat variabel app
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

//membuat pesan
app.listen(5000, ()=> console.log('server up and running...'));