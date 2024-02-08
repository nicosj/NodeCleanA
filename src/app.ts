import {Server} from "./presentation/server";
import {envs} from "./config";
import {AppRoutes} from "./presentation/routes";
import {MongoDatabase} from "./data";

(()=>{
    main()
})()

async function main() {
    await  MongoDatabase.connect({
        mongoUrl: envs.mongoUrl,
        dbName: envs.dbName
    })
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    }).start();
}