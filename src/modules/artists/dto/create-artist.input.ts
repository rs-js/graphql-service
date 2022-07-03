import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString, Matches } from 'class-validator';

@InputType()
export class CreateArtistInput {
  @IsString()
  @Field()
  firstName: string;

  @IsString()
  @Field()
  secondName: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  middleName: string;

  @IsOptional()
  @Matches(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)
  @Field({ nullable: true })
  birthDate: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  birthPlace: string;

  // not optional (microservice bug)
  @IsString()
  @Field()
  country: string;

  @IsOptional()
  @IsArray()
  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @IsOptional()
  @IsArray()
  @Field(() => [String], { nullable: true })
  instruments: string[];
}

// mutation {
//   createArtist(createArtistInput: {
//     firstName: "John"
//     secondName: "Smith"
//     middleName: "MiddleName"
//     country: "USA"
//     birthDate: "01/10/1980"
//     birthPlace: "London"
//     bandsIds: ["62c1bb33c9f517678fd0c8d9"]
//     instruments: ["drum", "guitar"]
//   }) {
//     id
//     firstName
//     secondName
//     middleName
//     birthDate
//     birthPlace
//     country
//     bands {
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
//     instruments
//   }
// }

// query {
//   artists {
//     id
//     firstName
//     secondName
//     middleName
//     birthDate
//     birthPlace
//     country
//     bands {
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
//     instruments
//   }
// }

// query {
//   artist(id: "62c1c3b1840c964a7bc71047"){
//     id
//     firstName
//     secondName
//     middleName
//     birthDate
//     birthPlace
//     country
//     bands {
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
//     instruments
//   }
// }
