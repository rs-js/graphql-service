import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Result {
  @Field()
  acknowledged: boolean;
  @Field()
  deletedCount: number;
}
