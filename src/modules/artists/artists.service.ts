import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { HttpService } from '@nestjs/axios';
import { forkJoin, map } from 'rxjs';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Injectable()
export class ArtistsService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3002/v1/artists';

  create(createArtistInput: CreateArtistInput) {
    return this.httpService
      .post(this.baseUrl, createArtistInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  findAll(params: PaginatedInput) {
    return this.httpService.get(this.baseUrl, { params }).pipe(
      map(({ data }) => ({
        ...data,
        items: data.items.map((item) => ({ ...item, id: item._id })),
      })),
    );
  }

  findOne(id: string) {
    return this.httpService
      .get(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  findArtists(artistsIds: string[]) {
    const data = artistsIds.map((data) => this.findOne(data));
    return forkJoin(data).pipe(map((data) => data));
  }

  update(id: string, updateArtistInput: UpdateArtistInput) {
    return this.httpService
      .put(`${this.baseUrl}/${id}`, updateArtistInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(id: string) {
    return this.httpService
      .delete(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
