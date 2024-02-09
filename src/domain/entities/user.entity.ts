
export  class UserEntity  {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string,
        public img?: string,

        )
    {

    }
    static userEntityFromObject(object: {[key: string]: any}): UserEntity{
        const {id, name, email, password, role, img, bio, avatar_url, html_url, public_repos} = object;
        return new UserEntity(id, name, email, password, role, img);
    }


}