import {Controller, Get, Param, UseBefore} from "routing-controllers";
import {FilmsServiceImpl} from "../service/FilmService/FilmsServiceImpl";
import {FilmsService} from "../service/FilmService/FilmsService";

@Controller('/v1/films')
export default class FilmsController {
    filmService: FilmsService = new FilmsServiceImpl();

    @Get("/")
    @UseBefore()
    async getAllFilms() {
        return await this.filmService.getAllFilms();
    }

    @Get("/:id")
    @UseBefore()
    async getFilmById(@Param('id') id: number) {
        return await this.filmService.getFilm(id);
    }
}