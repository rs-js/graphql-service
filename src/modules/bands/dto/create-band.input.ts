import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Member } from '../entities/band.entity';

@InputType()
export class CreateBandInput {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  origin: string;

  @IsArray()
  @IsOptional()
  @Field(() => [Member], { nullable: true })
  members: Member[];

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  website: string;

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  genresIds: string[];
}

// mutation {
//   createBand(createBandInput: {
//     name: "Nirvana"
//     origin: "USA"
//     members: [{artist: "Max", instrument: "drum", years: ["2008"]},{artist: "John", instrument: "guitar", years: ["2009"]}]
//     website: "nirvana.com"
//     genresIds: ["62c19b57dcc3f8a20d523a28", "62c1b432dcc3f8a20d523a2a"]
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

// query {
//   bands(paginatedInput: {
//     limit: 1
//     offset: 0
//   }) {
//     limit
//     offset
//     total
//     items {
//       id
//       name
//       origin
//       members {
//         artist
//         instrument
//         years
//       }
//       website
//       genres {
//         id
//         name
//         description
//         country
//         year
//       }
//     }
//   }
// }

// query {
//   band(id: "62c1bb33c9f517678fd0c8d9") {
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
