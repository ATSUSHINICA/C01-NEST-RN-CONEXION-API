import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasService } from './mascotas/mascotas.service';
import { MascotasController } from './mascotas/mascotas.controller';

@Module({
  imports: [],
  controllers: [AppController, MascotasController],
  providers: [AppService, MascotasService],
})
export class AppModule {}
