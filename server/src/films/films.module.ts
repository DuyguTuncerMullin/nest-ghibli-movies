// films.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

@Module({
  imports: [HttpModule], // Add this line
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
