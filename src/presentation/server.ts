import express, {Router, urlencoded} from 'express';

interface Options {
    port?: number;
    routes: Router;


}

export class Server {
     app = express();
    private readonly port: number ;
    private readonly routes: Router;
    //Midd

    constructor(options: Options) {
        const { port = 3100, routes} = options;

        this.port = port;
        this.routes = routes;
    }

    async start() {
        this.app.use(express.json());
        this.app.use(urlencoded({extended: true}));//x-www-form-urlencoded
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}