import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class PaginatedInput {
  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  offset: number;

  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  limit: number;
}
