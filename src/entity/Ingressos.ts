import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class Ingressos {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    eventoid: number;
    @Column()
    tipo: String
    @Column()
    Valor: number;
    @Column()
    Qrde: number;

    
}

