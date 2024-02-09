import {Server} from "./presentation/server";
import {envs} from "./config";
import {AppRoutes} from "./presentation/routes";
import {MongoDatabase, MysqlDatabase, Post, User} from "./data";
import {} from "./data"

(()=>{
    main()
})()

async function main() {
    /*await  MongoDatabase.connect({
        mongoUrl: envs.mongoUrl,
        dbName: envs.dbName
    })*/
    await MysqlDatabase.connect({
        type:envs.MYSQL_TYPE,
        host: envs.MYSQL_HOST,
        port: envs.MYSQL_PORT,
        username: envs.MYSQL_USER,
        password: envs.MYSQL_PASSWORD as string,
        database: envs.MYSQL_DATABASE,
        /*entities: envs.MYSQL_ENTITIES as string[]*/

    });


    await  new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    }).start();
}