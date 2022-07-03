import { CreateTrackInput } from './create-track.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTrackInput extends PartialType(CreateTrackInput) {
  @IsString()
  @Field(() => String)
  id: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  title: string;
}

// mutation {
//   updateTrack(updateTrackInput:{
//     id: "62c1da75fa28bb30304c917b"
//     title: "Tusla"
//   }){
//     id
//     title
//   }
// }

// mutation {
//   deleteTrack(id: "62c1da33fa28bb30304c9179"){
//     acknowledged
//     deletedCount
//   }
// }
