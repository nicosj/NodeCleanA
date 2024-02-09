
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import "reflect-metadata";
@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    titulo: string;
    @Column({
        type: 'text',
        nullable: false,
    })
    contenido: string;
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    autor: string;
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    imagen: string;
    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
    })
    fecha: Date;
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    categoria: string;
    @Column({
        type: 'int',
        nullable: false,
    })
    likes: number;
    @Column({
        type: 'int',
        nullable: false,
    })
    dislikes: number;
    @Column({
        type: 'boolean',
        nullable: false,
    })
    activo: boolean;


}
