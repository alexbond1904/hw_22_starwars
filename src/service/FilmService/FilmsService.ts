import {FilmDto} from "../../dto/FilmDto";

export interface FilmsService {

    getAllFilms(): Promise<FilmDto[]>;

    getFilm(id: number): Promise<FilmDto|null>;

}