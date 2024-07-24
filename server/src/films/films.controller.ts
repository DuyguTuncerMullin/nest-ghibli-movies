import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from 'src/interfaces/film.interface';
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async getAllFilms(): Promise<Film[] | { error: string }> {
    try {
      const films: Film[] = await this.filmsService.fetchAllFilms();
      return films;
    } catch (error) {
      return { error: 'Failed to fetch films' };
    }
  }

  @Get(':id')
  async getFilmById(
    @Param('id') id: string,
  ): Promise<Film | { error: string }> {
    try {
      const film = await this.filmsService.fetchFilmById(id);
      return film;
    } catch (error) {
      return { error: 'Failed to fetch film' };
    }
  }
}
