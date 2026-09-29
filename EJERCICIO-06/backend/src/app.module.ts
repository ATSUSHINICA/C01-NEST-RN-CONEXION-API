import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajeService } from './mensaje/mensaje.service';
import { MensajeController } from './mensaje/mensaje.controller';

@Module({
  imports: [],
  controllers: [AppController, MensajeController],
  providers: [AppService, MensajeService],
})
export class AppModule {}
