import {AuthDatasource, CustomErrors, LoginUserDto, RegisterUserDto, UserEntity} from "../../domain/";
import {BcryptAdapter} from "../../config";
import {UserMapper} from "../mappers/user.mapper";
import {AppDataSourcex, User} from "../../data";


type hashFunction = (password: string) => string;
type compareFunction = (password: string, hashedPassword: string) => boolean;
export class AuthDatasourceImpl implements AuthDatasource {
    private readonly _authRepository  =AppDataSourcex.getRepository(User);



    constructor(

    private readonly hashPassword: hashFunction=BcryptAdapter.hash,
    private readonly comparePassword: compareFunction=BcryptAdapter.compare,
    ) {}

    async loginUser(loginUserDto:LoginUserDto): Promise<UserEntity > {
        const { email, password} = loginUserDto;
        try{

            const exists= await this._authRepository.findOne({where: {email: email}});
            if(!exists)throw CustomErrors.conflict('credenciales no son correctas');
            const isPasswordValid=await this.comparePassword(password, exists.password);
            if(!isPasswordValid)throw CustomErrors.conflict('credenciales no son correctas');

            return UserMapper.userEntityFromLoginObject(exists);


        }
        catch(e){
            if(e instanceof CustomErrors){
                throw e;
            }
            console.log(e)
            throw CustomErrors.internalServerError()
        }
    }


    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name, email, password} = registerUserDto;

        try{
            const exists=await this._authRepository.findOne({where: {email}});
            if(exists)throw CustomErrors.conflict('email no valido');
            let user=await this._authRepository.save({
                name:name,
                email:email,
                password: this.hashPassword(password)
            });
            return  UserMapper.userEntityFromObject(user);

        }
        catch(e){
            if(e instanceof CustomErrors){
                throw e;
            }
            console.log(e)
            throw CustomErrors.internalServerError()
        }
    }

}