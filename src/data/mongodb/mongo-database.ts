import * as mongoose from "mongoose";


interface MongoClient{
    mongoUrl: string;
    dbName: string;

}

export class MongoDatabase{
    static async connect(mongoClient: MongoClient){
        const {mongoUrl, dbName} = mongoClient;
        try {
         mongoose.connect(mongoUrl, {
             dbName: dbName,
         });
            console.log('Connected to the database');
            return true;
        }
        catch (e) {
            console.log('Error connecting to the database')
            console.log(e)
            throw e
        }
    }
}