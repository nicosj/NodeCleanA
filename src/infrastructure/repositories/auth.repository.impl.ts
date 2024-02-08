import {AuthDatasource, AuthRepository, LoginUserDto, RegisterUserDto, UserEntity} from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly _authDatasource: AuthDatasource
    ) {

    }
    loginUser(loginUserDto:LoginUserDto): Promise<UserEntity> {
        return this._authDatasource.loginUser(loginUserDto)
    }

    registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this._authDatasource.registerUser(registerUserDto)
    }

}