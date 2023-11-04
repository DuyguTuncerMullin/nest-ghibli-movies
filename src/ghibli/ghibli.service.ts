import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class GhibliService {
  constructor(private httpService: HttpService) {}

  getFilms(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://ghibliapi.vercel.app/films');
  }
}