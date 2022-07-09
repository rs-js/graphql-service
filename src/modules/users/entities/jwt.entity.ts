import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Jwt {
  @Field()
  jwt: string;
}
