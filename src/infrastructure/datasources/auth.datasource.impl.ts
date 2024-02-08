import {AuthDatasource, CustomErrors, LoginUserDto, RegisterUserDto, UserEntity} from "../../domain/";
import {UserModel} from "../../data";
import {BcryptAdapter} from "../../config";
import {UserMapper} from "../mappers/user.mapper";

type hashFunction = (password: string) => string;
type compareFunction = (password: string, hashedPassword: string) => boolean;
export class AuthDatasourceImpl implements AuthDatasource {
    //private readonly _userRepository: Repository<UserEntity>;

    constructor(
    private readonly hashPassword: hashFunction=BcryptAdapter.hash,
    private readonly comparePassword: compareFunction=BcryptAdapter.compare,
    ) {

    }

    async loginUser(loginUserDto:LoginUserDto): Promise<UserEntity> {
        const {name, email, password} = loginUserDto;
        try{
            const exists=await UserModel.findOne({email }|| {name});
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
            const exists=await UserModel.findOne({email});
            if(exists)throw CustomErrors.conflict('credenciales no son correctas');
            const user=await UserModel.create({
                name:name,
                email:email,
                password: this.hashPassword(password)
            });
            await user.save();
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

    /*async findUserByEmail(email: string): Promise<UserEntity | undefined> {
        return this._userRepository.findOne({ email });
    }

    async findUserById(id: number): Promise<UserEntity | undefined> {
        return this._userRepository.findOne(id);
    }*/
}