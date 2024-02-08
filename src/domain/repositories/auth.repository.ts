import {RegisterUserDto} from "../dto/auth/register-user.dto";
import {UserEntity} from "../entities/user.entity";
import {LoginUserDto} from "../dto/auth/login-user.dto";

export abstract  class AuthRepository {

    abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>;

    abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}