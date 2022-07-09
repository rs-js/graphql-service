import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateAlbumInput {
  @IsString()
  @Field()
  name: string;

  @IsNumber()
  @IsOptional()
  @Field({ nullable: true })
  released: number;

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  artistsIds: string[];

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  trackIds: string[];

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  genresIds: string[];

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  image: string;
}

// mutation {
//   createAlbum(createAlbumInput: {
//     name: "Gold 80"
//     released: 2021
//     artistsIds: ["62c1c3b1840c964a7bc71047"]
//     bandsIds: ["62c1bb33c9f517678fd0c8d9"]
//     genresIds: ["62c1b432dcc3f8a20d523a2a"]
//     trackIds: []
//     image: "image"
//   }) {
//     id
//     name
//     released
//     artists {
//       firstName
//     }
//     bands {
//       name
//     }
//     genres {
//       name
//     }
//     tracks {
//       duration
//     }
//     image
//   }
// }

// query {
//   albums(paginatedInput: {
//     limit: 2
//     offset: 0
//   }) {
//     limit
//     offset
//     total
//     items {
//       id
//       name
//       released
//       artists {
//         firstName
//       }
//       bands {
//         name
//       }
//       genres {
//         name
//       }
//       tracks {
//         duration
//       }
//       image
//     }
//   }
// }

// query {
//   album(id: "62c1cd974a1c6462b9cf9cba") {
//     id
//     name
//     released
//     artists {
//       firstName
//     }
//     bands {
//       name
//     }
//     genres {
//       name
//     }
//     tracks {
//       duration
//     }
//     image
//   }
// }
