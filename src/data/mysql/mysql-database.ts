import  {DataSource, DataSourceOptions} from "typeorm";
import {Post} from "./models/post.model";
import {User} from "./models/user.model";



interface MysqlClient{
    type:string,
    host: string,
    port: number,
    username:string,
    password: string,
    database:string,

}
export const AppDataSourcex= new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password:"" ,
    database: "bdnode",
    entities: [User, Post],
    synchronize: true,
    logging: false,

});
AppDataSourcex.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

export class MysqlDatabase{
    static async connect(mysqlClient: MysqlClient){
        const {type, host, port, username, password, database} = mysqlClient;
        try {
            const AppDataSource :DataSourceOptions=({
                type: "mysql",
                host: host,
                port: port,
                username: username,
                password: password,
                database: database,
                entities: [User, Post],
                synchronize: true,
                logging: false,

            });
            const connection = new DataSource(AppDataSource);
            await connection.initialize()

            console.log('Connected to the database MYSQL');
            return true
        }
        catch (e) {
            console.log('Error connecting to the database')
            console.log(e)
            throw e
        }
    }
}