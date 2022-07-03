import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Artist } from '../../artists/entities/artist.entity';
import { Band } from '../../bands/entities/band.entity';
import { Track } from '../../tracks/entities/track.entity';
import { Genre } from '../../genres/entities/genre.entity';

@ObjectType()
export class Album {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  released: number;
  @Field(() => [Artist])
  artists: Artist[];
  @Field(() => [Band])
  bands: Band[];
  @Field(() => [Track])
  tracks: Track[];
  @Field(() => [Genre])
  genres: Genre[];
  @Field({ nullable: true })
  image: string;
}
