import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService,
  ) {}

  //localhost:3000/
  @Get()
  getHola(): string {
    return this.appService.getHola();
  }

  //localhost:3000/hello
  @Get('hello')
  getHello(): string {
	  return this.appService.getHello();
  }

  //localhost:3000/bonjour
  @Get('bonjour')
  getHelloFrances(): string {
    return this.appService.getHelloFrances();
  }
  //localhost:3000/bonjour
  @Get('bonjour')
  getHelloAleman(): string {
    return this.appService.getHelloAleman();
  }

  @Get('user')
  getUser(@Query('id') id: number) {
    return this.dbManager.getUser(id);
  }

}
