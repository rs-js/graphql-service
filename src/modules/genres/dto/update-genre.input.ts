import { CreateGenreInput } from './create-genre.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateGenreInput extends PartialType(CreateGenreInput) {
  @Field(() => String)
  id: string;
  @IsNotEmpty()
  @IsOptional()
  @Field()
  name: string;
}

// mutation {
//   updateGenre(updateGenreInput: {
//     id: "62c1b432dcc3f8a20d523a2a"
//     name: "Rock"
//     description: "Rock Music"
//     country: "USA"
//     year: 2022
//   }) {
//     id
//     name
//     description
//     country
//     year
//   }
// }

// mutation {
//   deleteGenre(id: "62c1b4b0dcc3f8a20d523a2c") {
//     acknowledged
//     deletedCount
//   }
// }
