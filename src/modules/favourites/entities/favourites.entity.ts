import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Artist } from '../../artists/entities/artist.entity';
import { Band } from '../../bands/entities/band.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { Track } from '../../tracks/entities/track.entity';

@ObjectType()
export class Favourites {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  userId: string;
  @Field(() => [Band], { nullable: true })
  bands: Band[];
  @Field(() => [Genre], { nullable: true })
  genres: Genre[];
  @Field(() => [Artist], { nullable: true })
  artists: Artist[];
  @Field(() => [Track], { nullable: true })
  tracks: Track[];
}
