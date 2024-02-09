export class PostEntity {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public author: string,
        public created_at: Date,
        public updated_at: Date,
    ) {
    }
}