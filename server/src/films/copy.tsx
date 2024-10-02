// CONTROLLER

// import { Controller, Get, Param } from '@nestjs/common';
// import { FilmsService } from './films.service';
// import { Film } from 'src/interfaces/film.interface';
// @Controller('films')
// export class FilmsController {
//   constructor(private readonly filmsService: FilmsService) {}

//   @Get()
//   async getAllFilms(): Promise<Film[] | { error: string }> {
//     try {
//       const films: Film[] = await this.filmsService.fetchAllFilms();
//       return films;
//     } catch (error) {
//       return { error: 'Failed to fetch films' };
//     }
//   }

//   @Get(':id')
//   async getFilmById(
//     @Param('id') id: string,
//   ): Promise<Film | { error: string }> {
//     try {
//       const film = await this.filmsService.fetchFilmById(id);
//       return film;
//     } catch (error) {
//       return { error: 'Failed to fetch film' };
//     }
//   }
// }


//SERVICE

// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
// import { Film } from 'src/interfaces/film.interface';
// import axios, { AxiosResponse } from 'axios';

// @Injectable()
// export class FilmsService {
//   constructor(private readonly httpService: HttpService) {}

//   async fetchAllFilms(): Promise<Film[]> {
//     const { data }: AxiosResponse<Film[]> = await axios.get(
//       'https://ghibliapi.vercel.app/films',
//     );
//     return data;
//   }

//   async fetchFilmById(id: string): Promise<Film | { error: string }> {
//     try {
//       const response = await this.httpService
//         .get(`https://ghibliapi.vercel.app/films/${id}`)
//         .toPromise();
//       return response.data;
//     } catch (error) {
//       return { error: 'Failed to fetch film' };
//     }
//   }
// }

// MODULE

// import { Module } from '@nestjs/common';
// import { HttpModule } from '@nestjs/axios';
// import { FilmsService } from './films.service';
// import { FilmsController } from './films.controller';

// @Module({
//   imports: [HttpModule], // Add this line
//   controllers: [FilmsController],
//   providers: [FilmsService],
// })
// export class FilmsModule {}



