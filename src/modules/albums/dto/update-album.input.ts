import { CreateAlbumInput } from './create-album.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateAlbumInput extends PartialType(CreateAlbumInput) {
  @Field(() => String)
  id: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name: string;
}

// mutation {
//   updateAlbum(updateAlbumInput: {
//     id: "62c1cd7d4a1c6462b9cf9cb8"
//     trackIds: ["62c1da75fa28bb30304c917b"]
//   }){
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
//       title
//       duration
//     }
//     image
//   }
// }

// mutation {
//   deleteAlbum(id: "62c1cd974a1c6462b9cf9cba") {
//     deletedCount
//     acknowledged
//   }
// }
