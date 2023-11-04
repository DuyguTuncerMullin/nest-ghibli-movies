import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GhibliController } from './ghibli/ghibli.controller';
import { GhibliService } from './ghibli/ghibli.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, GhibliController],
  providers: [AppService, GhibliService],
})
export class AppModule {}
