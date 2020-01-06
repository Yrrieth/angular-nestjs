import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/models/user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    /*const user = await this.usersService.findByName(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;*/
    const user = await this.usersService.findByName(username);
    console.log(user);
    if (user && await this.usersService.compareHash(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}