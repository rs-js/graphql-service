import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { Genre } from '../../genres/entities/genre.entity';
import { IsArray, IsString } from 'class-validator';

@ObjectType()
@InputType('MemberDto')
export class Member {
  @IsString()
  @Field()
  artist: string;
  @IsString()
  @Field()
  instrument: string;
  @IsArray()
  @Field(() => [String])
  years: string[];
}

@ObjectType()
export class Band {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  origin: string;
  @Field(() => [Member])
  members: Member[];
  @Field()
  website: string;
  @Field(() => [Genre])
  genres: Genre[];
}

@ObjectType()
export class PaginatedBandResponse {
  @Field(() => [Band])
  items: Band[];
  @Field(() => Int)
  offset: number;
  @Field(() => Int)
  limit: number;
  @Field(() => Int)
  total: number;
}
