import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class People {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    birth_year!: string;

    @Column({ type: "text" })
    eye_color!: string;

    @Column({ type: "text" })
    gender!: string;

    @Column({ type: "text" })
    hair_color!: string;

    @Column({ type: "text" })
    height!: string;

    @Column({ type: "text" })
    mass!: string;

    @Column({ type: "text" })
    skin_color!: string;

    @Column({ type: "integer" })
    homeworld!: number;

    @Column({ type: "text" })
    image!: string;

    @Column({ type: "text" })
    created!: string;

    @Column({ type: "text" })
    edited!: string;
}
