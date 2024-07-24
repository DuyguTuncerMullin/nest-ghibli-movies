import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Film } from 'src/interfaces/film.interface';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class FilmsService {
  constructor(private readonly httpService: HttpService) {}

  async fetchAllFilms(): Promise<Film[]> {
    const { data }: AxiosResponse<Film[]> = await axios.get(
      'https://ghibliapi.vercel.app/films',
    );
    return data;
  }

  async fetchFilmById(id: string): Promise<Film | { error: string }> {
    try {
      const response = await this.httpService
        .get(`https://ghibliapi.vercel.app/films/${id}`)
        .toPromise();
      return response.data;
    } catch (error) {
      return { error: 'Failed to fetch film' };
    }
  }
}
