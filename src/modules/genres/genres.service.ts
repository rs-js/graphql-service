import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { HttpService } from '@nestjs/axios';
import { forkJoin, map } from 'rxjs';

@Injectable()
export class GenresService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3001/v1/genres';

  create(createGenreInput: CreateGenreInput) {
    return this.httpService
      .post(this.baseUrl, createGenreInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  findAll() {
    return this.httpService
      .get(this.baseUrl)
      .pipe(
        map(({ data: { items } }) =>
          items.map((item) => ({ ...item, id: item._id })),
        ),
      );
  }

  findOne(id: string) {
    return this.httpService
      .get(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  findGenres(genresIds: string[]) {
    const data = genresIds.map((data) => this.findOne(data));
    return forkJoin(data).pipe(map((data) => data));
  }

  update(id: string, updateGenreInput: UpdateGenreInput) {
    return this.httpService
      .put(`${this.baseUrl}/${id}`, updateGenreInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(id: string) {
    return this.httpService
      .delete(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
