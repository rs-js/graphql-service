import { CreateArtistInput } from './create-artist.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateArtistInput extends PartialType(CreateArtistInput) {
  @IsString()
  @Field(() => String)
  id: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  firstName: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  secondName: string;
}

// mutation {
//   updateArtist(updateArtistInput: {
//     id: "62c1c3b1840c964a7bc71047"
//     middleName: "Anna-Maria"
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

// mutation {
//   deleteArtist(id: "62c0ab4db3327ca07f1f693d") {
//     acknowledged
//     deletedCount
//   }
// }
