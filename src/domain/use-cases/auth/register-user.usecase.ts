import {RegisterUserDto} from "../../dto/auth/register-user.dto";
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

interface RegisterUserUsecase{
    execute(registerUserDto:RegisterUserDto): Promise<UserToken>
    //registerUser(user: User): Promise<User>

}
export class RegisterUser implements RegisterUserUsecase{
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly generateToken: GenerateToken=JwtAdapter.generateToken
    ) {
    }

    async execute(registerUserDto:RegisterUserDto): Promise<UserToken> {
        //return this.authRepository.registerUser(registerUserDto);
        const user = await this.authRepository.registerUser(registerUserDto);
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