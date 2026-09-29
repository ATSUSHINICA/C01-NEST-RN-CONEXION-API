import { Controller, Get, Query } from '@nestjs/common';
import {JuegosService} from './juegos.service';

@Controller('juegos')
export class JuegosController {

    constructor(private readonly juegosServices: JuegosService){}

    @Get()
    findAll(@Query('genero') genero?: string) {
    return this.juegosServices.findAll(genero);
    }
}
