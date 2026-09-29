import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
    private mascotas = [
        {id: 1, nombre: 'Clara', especie: 'gato'},
        {id: 2, nombre: 'Mia', especie: 'Perro'},
        {id: 3, nombre: 'Zia', especie: 'Conejo'},
    ];

    findOne(id:number){
        return this.mascotas.find((m) => m.id === id );
    }
}
