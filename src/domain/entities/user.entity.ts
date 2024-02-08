
export  class UserEntity{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string,
        public img?: string,
        public bio?: string,
        public avatar_url?: string,
        public html_url?: string,
        public public_repos?: number,
        )
    {

    }

}