import express  from 'express';
const app = express();
import router from './router.js'
import CONFIG from './src/utills/config.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import multer from 'multer';

//for getting request body on json format
app.use(express.json()) 
app.use(bodyParser.json());
app.use(cors());

// for interceptor, it intercept the request before sending to the route &
// before reaching the response to client
app.use('/',router)
// app.use('/', (req, res) => res.send("it's my first application"));
// app.all('*',(req,res)=>res.send("that route is doesn't exist"))

app.listen((CONFIG.PORT),()=>{
    console.log("app was listening");
})