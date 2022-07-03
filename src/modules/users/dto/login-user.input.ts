import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;
}

// query {
//   jwt(loginUserInput: {
//     email: "email@mail.com"
//     password: "qwerty1234"
//   }) {
//     jwt
//   }
// }

// query {
//   user(id: "62c1b0efab69621898bf62b2") {
//     id
//     firstName
//     email
//     password
//     secondName
//   }
// }
