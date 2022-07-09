import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateGenreInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  @Field({ nullable: true })
  description: string;

  @IsNotEmpty()
  @IsOptional()
  @Field({ nullable: true })
  country: string;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  year: number;
}

// mutation {
//   createGenre(createGenreInput: {
//     name: "Rock"
//     description: "Rock music"
//     country: "USA"
//     year: 2022
//   }) {
//     name
//     description
//     country
//     year
//   }
// }

// query {
//   genre(id: "62c1b4b0dcc3f8a20d523a2c") {
//     id
//     name
//     description
//     country
//     year
//   }
// }

// query {
//   genres(paginatedInput: {
//     limit: 2
//     offset: 0
//   }) {
//     limit
//     offset
//     total
//     items {
//       id
//       name
//       description
//       country
//       year
//     }
//   }
// }
