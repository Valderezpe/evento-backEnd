import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Cpf: number;
    @Column()
    Nome: String
    @Column()
    Telefone: number;
    @Column()
    email:string;
    @Column()
    senha: string;

    hashPassword(){
        this.senha = bcrypt.hashSync(this.senha, 6);
    }

}

