import User from "../models/UserModel.js";

//membuat method getUsers mengexport langsung dan menggunakan ansyncronus function dengan parameter req & respon
export const getUsers = async(req, res) => {
    //menggunakan try cacth
    try {
        //buat variabel fungsi dr sequelize
        const response = await User.findAll();
        //memberikan respon res.status
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}

//membuat folder di backend routes

//membuat method untuk mengambil single data
//tampil data user
export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}

//tambah data user
export const createUser = async(req, res) => {
    try {
       await User.create(req.body);
        res.status(201).json({msg:"User Created"});
    }catch (error) {
        console.log(error.message);
    }
}

//update data user
export const updateUser = async(req, res) => {
    try {
       await User.update(req.body,{
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg:"User Updated"});
    }catch (error) {
        console.log(error.message);
    }
}

//delete user
export const deleteUser = async(req, res) => {
    try {
       await User.destroy({
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg:"User Deleted"});
    }catch (error) {
        console.log(error.message);
    }
}