import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTrackInput {
  @IsString()
  @Field()
  title: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  albumId: string;

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  artistsIds: string[];

  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  duration: number;

  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  released: number;

  @IsArray()
  @IsOptional()
  @Field(() => [String], { nullable: true })
  genresIds: string[];
}

// mutation {
//   createTrack(createTrackInput: {
//     title: "Tusla time"
//     albumId: "62c1cd7d4a1c6462b9cf9cb8"
//     bandsIds: ["62c1bb33c9f517678fd0c8d9"]
//     artistsIds: ["62c1c3b1840c964a7bc71047"]
//     duration: 12
//     released: 2012
//     genresIds: ["62c1b432dcc3f8a20d523a2a"]
//   }) {
//     id
//     title
//     albums {
//       name
//     }
//     bands {
//       name
//       genres {
//         name
//       }
//     }
//     duration
//     released
//     genres {
//       name
//     }
//   }
// }

// query {
//   tracks(paginatedInput: {
//     limit: 1
//     offset: 0
//   }) {
//     limit
//     offset
//     total
//     items {
//       id
//       title
//       albums {
//         id
//       }
//       bands {
//         name
//         genres {
//           name
//         }
//       }
//       duration
//       released
//       genres {
//         name
//       }
//     }
//   }
// }

// query {
//   track(id: "62c1db83fa28bb30304c9181"){
//     id
//     title
//     albums {
//       id
//     }
//     bands {
//       name
//       genres {
//         name
//       }
//     }
//     duration
//     released
//     genres {
//       name
//     }
//   }
// }
