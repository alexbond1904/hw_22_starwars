import {Controller, Get, Param, UseBefore} from "routing-controllers";
import {PeoplesServiceImpl} from "../service/PeoplesService/PeoplesServiceImpl";
import {PeoplesService} from "../service/PeoplesService/PeoplesService";

@Controller('/v1/peoples')
export default class PeoplesControllers {
    peopleService: PeoplesService = new PeoplesServiceImpl();

    @Get("/")
    @UseBefore()
    async getAllPeople() {
        return await this.peopleService.getAllPeoples();
    }

    @Get("/:id")
    @UseBefore()
    async getPeopleById(@Param('id') id: number) {
        return await this.peopleService.getPeople(id);
    }
}