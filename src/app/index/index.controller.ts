import { Controller, Get, UseGuards, SetMetadata } from "@nestjs/common"
import { IndexService } from "./index.service";
import { RolesGuard } from "./roles.guard";
import { Roles } from "./index.decorator";

@Controller()
@UseGuards(RolesGuard) // working in all the class
export class IndexController {
    constructor(private readonly indexService: IndexService) {}

    @Get()
    @Roles("admin")
    getHello(): string {
        return this.indexService.getHello();
    }

    @Get('cat')
    getCats(): string { 
        return "Everyone can see that"
    }


}