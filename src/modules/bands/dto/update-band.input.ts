import { CreateBandInput } from './create-band.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateBandInput extends PartialType(CreateBandInput) {
  @Field(() => String)
  id: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  name: string;
}

// mutation {
//   updateBand(updateBandInput: {
//     id: "62c1bb33c9f517678fd0c8d9"
//     name: "Nirvana",
//       origin: "USA",
//       website: "www.nirvana.com",
//   }) {
//     id
//     name
//     origin
//     members {
//       artist
//       instrument
//       years
//     }
//     website
//     genres {
//       id
//       name
//       description
//       country
//       year
//     }
//   }
// }

// mutation {
//   deleteBand(id: "62c14a4d3511e703e867ccca") {
//     acknowledged
//     deletedCount
//   }
// }
