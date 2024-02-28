import CONFIG from './config.js';
import pg from 'pg'
const {Pool} = pg

const Client = new Pool ({
    host: CONFIG.host, //host name
    user: CONFIG.user, //user name in db
    port: CONFIG.port, // default one
    password: CONFIG.password, // password for accessing DB
    database:CONFIG.database // DB name
})

//Initialize db when start the application

const getClientFromPool = () => {
    return Client.connect();
 }

export {
    Client,
    getClientFromPool
}