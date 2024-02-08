import jwt from 'jsonwebtoken';

const jwt_seed:string = process.env.JWT_SEED!;
export class JwtAdapter{
    /*constructor(seed: string = jwt_seed!) {
    } crea una instancia */
    static async generateToken(
        payload:Object,
        duration='2h'):Promise<string | null>{
        return new Promise((resolve)=>{
            jwt.sign(
                payload,
                jwt_seed,
                {expiresIn: duration},
                (err, token)=>{

                if(err) throw err;
                resolve(token!);

            });
        });
    }

    static  verifyToken<T>(token: string):Promise<T | null>{
        return new Promise((resolve)=>{
            jwt.verify(
                token,
                jwt_seed,
                (err, decoded)=>{
                if(err) return resolve(null);
                resolve(decoded as T);
            });
        });
    }
    /*static  sign(payload: any, secret: string, expiresIn: string): string {
        return sign(payload, secret, {expiresIn});
    }
    static  decode(token: string): any {
        return decode(token);
    }*/
}