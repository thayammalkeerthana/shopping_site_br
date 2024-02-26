import {getClientFromPool} from './pgConfig.js'
import CONFIG from './config.js';
import jsonwebtoken from 'jsonwebtoken'
import {sentTokenExpiredErrorResponse,sentTokenMissingErrorResponse} from './responseHandler.js'
const jwt = jsonwebtoken;
console.log('jwt',jwt);
//creating pool 
// that create the pool, connect that after disconnect the connection
const 
connectClient = async (data,callback) => {
    let client = null;
    try {
        client = await getClientFromPool();
    } catch (err) {
        throw err;
    }
    try {
        let result = {};
        result = await callback(data,client);
        client.release();
        return result;
    } catch (error) {
        client.release();
        throw error;
    }
};

const generateToken = (userData) =>{
    // user -detaild regards the user data
    // secretKey - key for generate the token
    // third one - {
    //     expiresIn - time in ms in default ( for expiring token) 
    //     example:: 60, "2 days", "10h", "7d"
    //     algorithm - decrypt method default  (default: HS256)
    // }
    console.log("userData[0]",userData);
    const token = jwt.sign(userData.rows[0], CONFIG.secretKey, { expiresIn: CONFIG.tokenExpireTime });
    return token
}

function authMiddleware(req, res, next) {
    console.log("req",req.header);
    let token = req.header('Authorization');
    token = token?.split('Bearer ')[1]
    console.log("token",req.header('Authorization'));
    //if there is no token in the APi it will work for that condition
    if (!token) {
        sentTokenMissingErrorResponse(res)
        return;
    }
  
    jwt.verify(token, CONFIG.secretKey, (err, user) => {
        //if token expires it will call and shows error
      if (err) {
        console.log("err",err.toString());
        sentTokenExpiredErrorResponse(res)
        return;
      }
    //   if valid token then it will call and execure further functions
      req.user = user;
      //it will start next function
      next();
    });
  }

//query for creating table
const memberTable = `CREATE TABLE IF NOT EXISTS public.members
(
    name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "memberId" bigint NOT NULL,
    age bigint NOT NULL,
    department character varying COLLATE pg_catalog."default",
    CONSTRAINT members_pkey PRIMARY KEY ("memberId")
)`
 export {
    connectClient,
    memberTable,
    generateToken,
    authMiddleware
}