const CONFIG = {
    PORT : 8000,
    host: 'localhost',
    user: 'postgres',
    port: 5432, 
    password: 'password',
    database:'shopping', 
    SUCCES_CODE: 200,
    ERROR_CODE: 400,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    secretKey:"node_application_secretKey",
    tokenExpireTime: '6h',
}

export default CONFIG