import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    title!: string;

    @Column({ type: "integer" })
    episode_id!: number;

    @Column({ type: "text" })
    director!: string;

    @Column({ type: "text" })
    producer!: string;

    @Column({ type: "text" })
    release_date!: string;

    @Column({ type: "text" })
    opening_crawl!: string;

    @Column({ type: "simple-array" })
    characters!: number[];

    @Column({ type: "simple-array" })
    planets!: number[];

    @Column({ type: "simple-array" })
    species!: number[];

    @Column({ type: "simple-array" })
    starships!: number[];

    @Column({ type: "simple-array" })
    vehicles!: number[];

    @Column({ type: "text" })
    created!: string;

    @Column({ type: "text" })
    edited!: string;
}
