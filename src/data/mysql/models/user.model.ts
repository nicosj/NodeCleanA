import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Role {
    ADMIN = 'ADMIN_ROLE',
    USER = 'USER_ROLE'
}
@Entity()
export class User extends BaseEntity  {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    name: string;
      @Column({
            type: 'varchar',
            length: 100,
            nullable: false,
            unique: true,
        })
    email: string;
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    password: string;

    //enumerator for role mysql
    @Column({
        type: 'enum',
        default: Role.USER,
        enum: Role,

    })
   role: Role

@Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    img: string;
}