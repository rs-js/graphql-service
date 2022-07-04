import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Album } from '../../albums/entities/album.entity';
import { Band } from '../../bands/entities/band.entity';
import { Genre } from '../../genres/entities/genre.entity';

@ObjectType()
export class Track {
  @Field(() => ID)
  id: string;
  @Field()
  title: string;

  @Field(() => [Album], { nullable: true })
  albums: Album[];

  @Field(() => [Band])
  bands: Band[];
  @Field()
  duration: number;
  @Field()
  released: number;
  @Field(() => [Genre])
  genres: Genre[];
}

@ObjectType()
export class PaginatedTrackResponse {
  @Field(() => [Track])
  items: Track[];
  @Field(() => Int)
  offset: number;
  @Field(() => Int)
  limit: number;
  @Field(() => Int)
  total: number;
}
