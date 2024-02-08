import {LoginUserDto} from "../../dto/auth/login-user.dto";
import {AuthRepository} from "../../repositories/auth.repository";
import {JwtAdapter} from "../../../config";
interface UserToken{
    token:string,
    user: {
        id: string,
        name: string,
        email: string

    }
}
type GenerateToken = (payload: Object, duration?: string) => Promise<string | null>

interface LoginUserUsecase{
    execute(loginUserDto:LoginUserDto): Promise<UserToken>
}
export class LoginUser implements LoginUserUsecase{
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly generateToken: GenerateToken=JwtAdapter.generateToken
    ) {
    }

    async execute(loginUserDto:LoginUserDto): Promise<UserToken> {
        const user = await this.authRepository.loginUser(loginUserDto);
        const token= await this.generateToken({ id:user.id}, '2h');
        if(!token) throw new Error('not generated')
        return {
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }


    }
}