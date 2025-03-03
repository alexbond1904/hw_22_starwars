import {AppDataSource} from "../src/database/config";
import {FilmDto} from "../src/dto/FilmDto";
import {Film} from "../src/models/Film";
import {People} from "../src/models/People";
import {PeopleDto} from "../src/dto/PeopleDto";

AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.error("Database connection error:", error));

const repositoryFilms = AppDataSource.getRepository(Film);
const repositoryPeoples = AppDataSource.getRepository(People);


(async function fetchFilms() {
    try {
        const res = await fetch('https://sw-info-api.herokuapp.com/v1/films');
        if(!res.ok) throw new Error();
        const films = (await res.json()) as FilmDto[];
        const filmEntities = films.map(film => repositoryFilms.create({...film}));
        await repositoryFilms.save(filmEntities);
        console.log("Films saved to DB");
    } catch (e) {
        console.log(e)
    }

})();


(async function fetchPeoples() {
    try {
        const res = await fetch('https://sw-info-api.herokuapp.com/v1/peoples');
        if(!res.ok) throw new Error();
        const peoples = (await res.json()) as PeopleDto[];
        const peoplesEntity = peoples.map(people => repositoryPeoples.create({...people}));
        await repositoryPeoples.save(peoplesEntity);
        console.log("Peoples saved to DB");
    } catch (e) {
        console.log(e)
    }
})();