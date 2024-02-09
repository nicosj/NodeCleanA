import  'dotenv/config'
import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    /*mongoUrl: get('MONGO_URL').required().asString(),
    dbName: get('MONGO_DB_Name').required().asString(),*/
    JWT_SEED: get('JWT_SEED').required().asString(),
    API_NEWS_URL: get('API_NEWS_URL').required().asString(),
    API_NEWS_KEY: get('API_NEWS_KEY').required().asString(),
    MYSQL_TYPE: get('MYSQL_TYPE').required().asString(),
    MYSQL_HOST:get('MYSQL_HOST').required().asString(),
    MYSQL_USER:get('MYSQL_USER').required().asString(),
    MYSQL_PASSWORD:get('MYSQL_PASSWORD').asString(),
    MYSQL_DATABASE:get('MYSQL_DATABASE').required().asString(),
    MYSQL_PORT:get('MYSQL_PORT').required().asPortNumber(),
    /*MYSQL_ENTITIES: get('MYSQL_ENTITIES').required().asJsonArray(),*/

    /*API_NEWS_SECRET: get('API_NEWS_SECRET').required().asString(),
    API_NEWS_ID: get('API_NEWS_ID').required().asString(),
    API_NEWS_SECRET_KEY: get('API_NEWS_SECRET_KEY').required().asString(),*/

}
