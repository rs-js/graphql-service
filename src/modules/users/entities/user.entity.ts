import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  secondName: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
