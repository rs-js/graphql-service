import { ObjectType, Field, ID } from '@nestjs/graphql';

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
