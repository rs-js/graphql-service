import { Injectable } from '@nestjs/common';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { HttpService } from '@nestjs/axios';
import { forkJoin, map } from 'rxjs';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Injectable()
export class BandsService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3003/v1/bands';

  create(createBandInput: CreateBandInput) {
    return this.httpService
      .post(this.baseUrl, createBandInput)
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

  findBands(bandsIds: string[]) {
    const data = bandsIds.map((data) => this.findOne(data));
    return forkJoin(data).pipe(map((data) => data));
  }

  update(id: string, updateBandInput: UpdateBandInput) {
    return this.httpService
      .put(`${this.baseUrl}/${id}`, updateBandInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(id: string) {
    return this.httpService
      .delete(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
