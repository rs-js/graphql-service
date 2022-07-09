import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class RemoveFromFavouritesInput {
  @IsString()
  @Field()
  id: string;

  @IsString()
  @Field()
  type: 'bands' | 'genres' | 'artists' | 'tracks';
}

// mutation {
//   addBandToFavourites(id: "62c1bb33c9f517678fd0c8d9") {
//     id
//     userId
//     bands {
//       name
//     }
//     tracks {
//       duration
//     }
//     artists {
//       firstName
//     }
//     genres {
//       name
//     }
//   }
// }

// query {
//   favourites {
//     id
//     userId
//     bands {
//       name
//     }
//     tracks {
//       duration
//     }
//     artists {
//       firstName
//     }
//     genres {
//       name
//     }
//   }
// }
