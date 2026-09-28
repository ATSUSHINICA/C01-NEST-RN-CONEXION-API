import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private pizzas = [
    { id: 1, nombre: 'Margarita', precio: 9 },
    { id: 2, nombre: 'Pepperoni', precio: 11 }
  ];
  findAll() { 
    return this.pizzas; 
  }
  getHello(): string {
    return 'Hello World!';
  }

  
}
