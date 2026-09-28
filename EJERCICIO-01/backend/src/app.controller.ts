import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hola')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hola2')
  saludar(): string {
    return "Endpoint modificado";
  }
  @Get('pizzas')
  pizzas(): any {
    return this.appService.findAll() ;
  }
  @Get('mascotas/:id')
  mascotas(@Param('id') valor:string ): any {
    return "Valor es" + valor ;
  }

}
