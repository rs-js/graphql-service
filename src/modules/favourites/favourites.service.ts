import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { RemoveFromFavouritesInput } from './dto/remove-from-favourites.input';

@Injectable()
export class FavouritesService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3007/v1/favourites';

  findAll() {
    return this.httpService
      .get(this.baseUrl)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  addToFavourites(params: { type: string; id: string }) {
    return this.httpService
      .put(`${this.baseUrl}/add`, params)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(removeFavouriteInput: RemoveFromFavouritesInput) {
    return this.httpService
      .put(`${this.baseUrl}/remove`, removeFavouriteInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }
}
