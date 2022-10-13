//model ini berisi table yang bagaimana nanti data tersimpan di database
import { Sequelize } from "sequelize";
//kemudian import , di ambil dari file database.js
import db from "../config/database.js";

//bkin fungsi dari Sequelize
const {DataTypes} = Sequelize;

//membuat sturktur table pada parameter pertama : ada user, kedua : ada fielnya, ketiga ada :opsi
const User = db.define('users',{
    name : DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

//export default user
export default User;

//membuat function yang berfungsi men-generate table ,jika table user tidak terdapat di database
//membuat asyncronus
//functionnya tdk memiliki nama
(async()=>{
    //tambahkan fungsi await db

    await db.sync();

    //memanggil functionnya dengan tanda kurung, function ini akan runing saat memanggil file UserModel.js
})();

//selanjutnya membuat folder controllers di folder backend