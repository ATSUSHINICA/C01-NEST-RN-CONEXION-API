import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajeController } from './mensaje/mensaje.controller';
import { MensajeService } from './mensaje/mensaje.service';

@Module({
  imports: [],
  controllers: [AppController, MensajeController],
  providers: [AppService, MensajeService],
})
export class AppModule {}
