import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  country: string;
  @Field()
  year: number;
}

@ObjectType()
export class PaginatedGenreResponse {
  @Field(() => [Genre])
  items: Genre[];
  @Field(() => Int)
  offset: number;
  @Field(() => Int)
  limit: number;
  @Field(() => Int)
  total: number;
}
