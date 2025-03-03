import "reflect-metadata";
import { DataSource } from "typeorm";
import {People} from "../models/People";
import {Film} from "../models/Film";
import path from "path";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: path.resolve(__dirname, "./sw.sqlite"),
    entities: [Film, People],
    synchronize: true
});

