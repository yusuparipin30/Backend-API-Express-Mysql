//file UserRoute.js berfungsi untuk menghandle semua routingnya
//imort express karna menggunakan express router
import express from "express";
import {
    getUsers,
     getUserById
    } from "../controllers/UserController.js";

//membuat variabel
const router = express.Router();

//membuat endpoint baru
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

export default router;

//memanggil router di file index.js