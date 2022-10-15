//file UserRoute.js berfungsi untuk menghandle semua routingnya
//imort express karna menggunakan express router
import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
    } from "../controllers/UserController.js";

//membuat variabel
const router = express.Router();

//membuat endpoint baru
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;

//memanggil router di file index.js