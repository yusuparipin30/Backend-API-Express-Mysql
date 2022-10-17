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

const PORT = process.env.PORT || 5000;

//membuat pesan
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error: ${err}`);
  } else {
    console.log('server up and running...');
  }
});
