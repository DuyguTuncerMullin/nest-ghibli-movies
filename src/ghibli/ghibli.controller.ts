import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { GhibliService } from './ghibli.service';

@Controller('ghibli')
export class GhibliController {
  constructor(private ghibliService: GhibliService) {}

  @Get('films')
  async getFilms() {
    const filmsResponse = await this.ghibliService.getFilms().toPromise();
    console.log(filmsResponse.data);
    return filmsResponse.data;
  }
}
