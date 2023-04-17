import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Empresas {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    cnpj: number;
    @Column()
    razao_social: string
}

