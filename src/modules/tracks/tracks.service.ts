import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { HttpService } from '@nestjs/axios';
import { forkJoin, map } from 'rxjs';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Injectable()
export class TracksService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3006/v1/tracks';

  create(createTrackInput: CreateTrackInput) {
    return this.httpService
      .post(this.baseUrl, createTrackInput)
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

  findTracks(trackIds: string[]) {
    const data = trackIds.map((data) => this.findOne(data));
    return forkJoin(data).pipe(map((data) => data));
  }

  update(id: string, updateTrackInput: UpdateTrackInput) {
    return this.httpService
      .put(`${this.baseUrl}/${id}`, updateTrackInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  remove(id: string) {
    return this.httpService
      .delete(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => data));
  }
}
