import  'dotenv/config'
import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    mongoUrl: get('MONGO_URL').required().asString(),
    dbName: get('MONGO_DB_Name').required().asString(),
    JWT_SEED: get('JWT_SEED').required().asString(),
}
