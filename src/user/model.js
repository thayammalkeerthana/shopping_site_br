import { generateToken } from "../utills/utills.js";

const createUser = async (req,client) =>{
    const {userName,password,userId,firstName,email,gender,phoneNumber,imageurl,type} = req.body
    try{
        const response = await client.query(`INSERT INTO users 
        (userid,
         username,
         password,
         firstname,
         email,
         gender,
         phoneNumber,
         imageurl,
         type) 
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (email, type) DO NOTHING
         RETURNING userid`,
         [userId,userName,password,firstName,email,gender,phoneNumber,imageurl,type])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "User created successfully"};
         } else {
            return {error: true, message: "User not created successfully"};
         }
    } catch(err){
        console.log("err",err)
        return {error: true, message: err.toString()};
    }
 }
 
 const loginUser = async (req,client) =>{
    const {email,password,type} = req.body
    try{
        const response = await client.query(`SELECT * from users WHERE "email"=$1  AND password=$2 AND type=$3 `,
         [email,password,type])
         if(response.rowCount>0){
            let token = generateToken(response)
             return {error: false, data: {authToken:token,userid:response.rows[0].userid} , message: "Login successfully"};
         } else {
            return {error: true, message: "Invalid user details"};
         }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const getData=async(req,client)=>{
    try{
        const response = await client.query(`SELECT * FROM "users"`)
        if(response){
            return {error: false, data: response.rows , message: "users read successfully"};
        } else {
           return {error: true, message: "users not read successfully"};
        }
    }  catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const updateData = async (req,client) =>{
    const {userid,username,password,firstname,email,gender,phonenumber,imageurl,type} = req.body
    try{
        const response = await client.query(`UPDATE users SET
        username = $2,
        password = $3,
        firstname = $4,
        email = $5,
        gender = $6,
        phonenumber = $7 ,
        imageurl=$8,
        type=$9 WHERE userid = $1 RETURNING userid`,
         [userid,username,password,firstname,email,gender,phonenumber,imageurl,type])
         console.log("response.rowCount",response.rowCount);
         if(response.rowCount>0){
            return {error: false, data: response.rows , message: "user updated successfully"};
        } else {
           return {error: true, message: "user not updated successfully"};
        }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

 
export {
    createUser,
    loginUser,
    getData,
    updateData
 }