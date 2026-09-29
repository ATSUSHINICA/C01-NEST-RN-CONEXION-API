import { Injectable } from '@nestjs/common';

@Injectable()
export class MensajeService {

    private texto = {"texto": "¡Conexión conseguida! 🚀"};

    findAll(){
        return this.texto;
    }
}
