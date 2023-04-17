import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Compras {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    idClient: number
    @Column()
    idIngresso: number
    @Column()
    data: number
    @Column()
    status: string
}