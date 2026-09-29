import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {

    juegos = [
        {id: 1, nombre: 'Call of Duty', genero: 'Accion'},
        {id: 2, nombre: 'Battlefiel', genero: 'Accion'},
        {id: 3, nombre: 'FIFA', genero: 'Deportes'},
        {id: 1, nombre: 'Valorant', genero: 'Counter'}
    ];


    findAll(genero?:string){
        if(!genero) return this.juegos;
        return this.juegos.filter(j=> j.genero === genero);
    }
}
