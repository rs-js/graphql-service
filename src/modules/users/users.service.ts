import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { LoginUserInput } from './dto/login-user.input';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  baseUrl = 'http://localhost:3004/v1/users';

  create(createUserInput: CreateUserInput) {
    return this.httpService
      .post(`${this.baseUrl}/register`, createUserInput)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }

  loginUser(loginUserInput: LoginUserInput) {
    return this.httpService.post(`${this.baseUrl}/login`, loginUserInput).pipe(
      map(({ data: { jwt } }) => {
        if (jwt) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
          return { jwt };
        }
      }),
    );
  }

  loginUserById(id: string) {
    return this.httpService
      .get(`${this.baseUrl}/${id}`)
      .pipe(map(({ data }) => ({ ...data, id: data._id })));
  }
}
