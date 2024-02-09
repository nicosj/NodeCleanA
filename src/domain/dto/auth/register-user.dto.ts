import {Validators} from "../../../config";

export class RegisterUserDto{
    private constructor(
        public name: string,
        public email: string,
        public password: string,
        public role?: string,
        public img?: string,
        /*public bio?: string,
        public avatar_url?: string,
        public html_url?: string,
        public public_repos?: number,*/
        )
    {}

    static create(object:{[key:string]:any}):[string?, RegisterUserDto?] {
        const {name, email, password, role, img} = object;

        if(!name) return ['name is required'];
        if(!email) return ['email is required'];
        if(!password) return ['password is required'];
        if(password.length < 6) return ['password must be at least 6 characters long'];
        if(!Validators.isEmail.test(email) ) return ['email is not valid'];


        return [
            undefined,
            new RegisterUserDto
                (
                        name,
                        email.toLowerCase(),
                        password,
                        role,
                        img,
                        /*bio,
                        avatar_url,
                        html_url,
                        public_repos,*/
                )

            ];
    }

}