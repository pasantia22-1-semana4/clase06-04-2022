import dotenv from 'dotenv';


const env = dotenv.config();
export const config={
    api:{
        hostname: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 3000,
        name: process.env.NAME || 'api'
    }

}