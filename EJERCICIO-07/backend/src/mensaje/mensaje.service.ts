import { Injectable } from '@nestjs/common';

@Injectable()
export class MensajeService {

    private texto = {'texto': 'Backend disponible'};

    obtenerMensaje(){
        return this.texto;
    }
}
