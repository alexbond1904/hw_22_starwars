import {PeoplesService} from "./PeoplesService";
import {PeopleDto} from "../../dto/PeopleDto";
import {AppDataSource} from "../../database/config";
import {People} from "../../models/People";

export class PeoplesServiceImpl implements PeoplesService{
    private peopleRepository = AppDataSource.getRepository(People);

    async getAllPeoples(): Promise<PeopleDto[]> {
        return await this.peopleRepository.find();
    }

    async getPeople(id: number): Promise<PeopleDto|null> {
        return await this.peopleRepository.findOneBy({id: id});
    }
}