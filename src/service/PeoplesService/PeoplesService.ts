import {PeopleDto} from "../../dto/PeopleDto";

export interface PeoplesService {

    getAllPeoples(): Promise<PeopleDto[]>;

    getPeople(id: number): Promise<PeopleDto|null>;
}