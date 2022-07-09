import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;

  @Length(8)
  @IsNotEmpty()
  @Field()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;
}

// mutation {
//   register(createUserInput:{
//     firstName: "John"
//     lastName: "Smith"
//     password: "qwerty1234"
//     email: "email@mail.com"
//   }) {
//     id
//     firstName
//     secondName
//     email
//     password
//   }
// }
