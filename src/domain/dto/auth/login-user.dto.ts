
import {Validators} from "../../../config";

export class LoginUserDto{
    private constructor(

        public email: string,
        public password: string,
    )
    {}

    static login(object:{[key:string]:any}):[string?, LoginUserDto?] {
        const {  email, password, role, img, bio, avatar_url, html_url, public_repos} = object;


        if(!email ) return ['name is required'];

        if(!password) return ['password is required'];
        if(password.length < 6) return ['password must be at least 6 characters long'];
        if(!Validators.isEmail.test(email) ) return ['email is not valid'];


        return [
            undefined,
            new LoginUserDto
            (

                email.toLowerCase(),
                password,

            )

        ];
    }

}