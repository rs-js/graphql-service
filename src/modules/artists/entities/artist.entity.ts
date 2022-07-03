import { ObjectType, Field, ID } from '@nestjs/graphql';
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
