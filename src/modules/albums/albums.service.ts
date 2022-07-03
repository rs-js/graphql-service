import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AlbumsService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3005/v1/albums';

  create(createAlbumInput: CreateAlbumInput) {
    return this.httpService
      .post(this.baseUrl, createAlbumInput)
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

  findAlbums(albumId: string) {
    return this.findOne(albumId).pipe(
      map((data) => {
        return data.id ? [data] : [];
      }),
    );
  }

  update(id: string, updateAlbumInput: UpdateAlbumInput) {
    return this.httpService
      .put(`${this.baseUrl}/${id}`, updateAlbumInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(id: string) {
    return this.httpService
      .delete(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
