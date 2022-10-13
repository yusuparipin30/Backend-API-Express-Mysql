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
export const getUserById = async(req, res) => {
    //menggunakan try cacth
    try {
        //buat variabel fungsi dr sequelize
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        //memberikan respon res.status
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}
