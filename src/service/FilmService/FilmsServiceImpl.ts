import {FilmsService} from "./FilmsService";
import {FilmDto} from "../../dto/FilmDto";
import {AppDataSource} from "../../database/config";
import {Film} from "../../models/Film";

export class FilmsServiceImpl implements FilmsService {
    private filmRepository = AppDataSource.getRepository(Film);

    async getAllFilms(): Promise<FilmDto[]> {
        return await this.filmRepository.find();
    }

    async getFilm(id: number): Promise<FilmDto | null> {
        return await this.filmRepository.findOneBy({id: id});
    }
}