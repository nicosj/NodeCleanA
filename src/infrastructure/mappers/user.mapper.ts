import {CustomErrors, UserEntity} from "../../domain";

export class UserMapper{
    static userEntityFromObject(object : { [key:string]: any }) {
        const {id,_id, name, email, password, role, img} = object;
        if(!id && !_id) throw CustomErrors.badRequest('id or _id is required');
        if(!name) throw CustomErrors.badRequest('name is required');
        if(!email) throw CustomErrors.badRequest('email is required');
        if(!password) throw CustomErrors.badRequest('password is required');
        if(!role) throw CustomErrors.badRequest('role is required');

        return new UserEntity (
            id  || _id,
            name,
            email,
            password,
            role,
            img,
        );
    }
    static userEntityFromLoginObject(object : { [key:string]: any }) {
        const {id,_id, name, email, password, role, img} = object;
        if(!id && !_id) throw CustomErrors.badRequest('id or _id is required');
        if(!email) throw CustomErrors.badRequest('email is required');
        if(!password) throw CustomErrors.badRequest('password is required');
        if(!role) throw CustomErrors.badRequest('role is required');

        return new UserEntity (
            id  || _id,
            name,
            email,
            password,
            role,
            img,
        );
    }

}