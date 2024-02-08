import {NextFunction,Response,Request} from "express";
import {JwtAdapter} from "../../config";
import {UserModel} from "../../data";

export class AuthMiddleware {
    static    validateJWT = async(req:Request, res:Response, next:NextFunction)=>{
        console.log('paso middleware')
        const token:any  = req.headers['authorization'];
        if (!token) return res.status(401).json({message: 'Token not found'});
        if(!token.startsWith('Bearer ') )return res.status(401).json({message: 'Invalid token'});
        const genToken = token.split(' ').at(1) || "";

        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded;
        try {
            const payload =await JwtAdapter.verifyToken<{id:string}>(genToken);

            if(!payload) return res.status(401).json({message: 'Invalid token'});

            const user=await UserModel.findById(payload.id);

            if(!user) return res.status(401).json({message: 'Invalid Token v'});

            req.body.user = user;
            next();
        }catch (e){
            console.log(e)
            return res.status(500).json({message: 'error'});
        }

    }
}