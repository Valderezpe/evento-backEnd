import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Eventos {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    idEmpresa: number;
    @Column()
    nome: string;
    @Column()
    Tipo: String
    @Column()
    Data: number;
    @Column()
    Hora: number;
}

