import {Request, Response, Router} from 'express';
import {AuthRepository, CustomErrors, LoginUser, LoginUserDto, RegisterUser, RegisterUserDto} from "../../domain";
import {JwtAdapter} from "../../config";
import {UserModel} from "../../data";
export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository

    ) {}
    private handleError=(e:unknown, res: Response)=> {
        if(e instanceof CustomErrors){
            return res.status(e.statusCode).json({error:e.message});
        }
        return res.status(500).json({error:'An error occurred internal'});//Winstone logger
    }

    registerUser=  (req: Request, res: Response) => {
        const [ error, registerUserDto]=RegisterUserDto.create(req.body);
        if(error) return res.status(400).json({error});

        new RegisterUser(this.authRepository)
            .execute(registerUserDto!)
            .then(x=>res.json(x))
            .catch(e=>this.handleError(e, res));
    }
    loginUser=(req: Request, res: Response) => {
        const [error, loginUserDto]=LoginUserDto.login(req.body);
        if(error) return res.status(400).json({error});
        new LoginUser(this.authRepository)
            .execute(loginUserDto!)
            .then(x=>res.json(x))
            .catch(e=>this.handleError(e, res));
    }
    getUsers=(req: Request, res: Response) => {
        UserModel.find()
            .then(users=> {
                res.json({
                    users: req.body.user
                })
            })
            .catch(()=>res.status(500).json({message: 'error'}));

    }
}