import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Band } from '../../bands/entities/band.entity';

@ObjectType()
export class Artist {
  @Field(() => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  secondName: string;
  @Field()
  middleName: string;
  @Field()
  birthDate: string;
  @Field()
  birthPlace: string;
  @Field()
  country: string;
  @Field(() => [Band])
  bands: Band[];
  @Field()
  instruments: string;
}

@ObjectType()
export class PaginatedArtistResponse {
  @Field(() => [Artist])
  items: Artist[];
  @Field(() => Int)
  offset: number;
  @Field(() => Int)
  limit: number;
  @Field(() => Int)
  total: number;
}
