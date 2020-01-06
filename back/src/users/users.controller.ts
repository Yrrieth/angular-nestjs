import { Controller, Get, Request, Post, Body, Param, Put, Delete, Response, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UserEntity } from 'src/users/models/user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    index(): Promise<UserEntity[]> {
      return this.usersService.findAll();
    }

    @Get(':id')
    get(@Param('id') id) {
        return this.usersService.findById(id);
    }

    @Post('register')
    async registerUSer(/*@Response() res: any,*/ @Body() usersData: UserEntity): Promise<any> {
      /*if (!(usersData && usersData.username && usersData.password)) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
      }
      
      let usernameAlreadyExisted = await this.usersService.findByName(usersData.username);
      if (usernameAlreadyExisted) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username exists' });
      }*/
      let usernameAlreadyUsed = await this.usersService.findByName(usersData.username);
      if (!usernameAlreadyUsed) {
        return this.usersService.create(usersData);
      }
      console.log("Username already used");
      return null;
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() usersData: UserEntity): Promise<any> {
        usersData.userId = Number(id);
        console.log('Update #' + usersData.userId)
        return this.usersService.update(usersData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.usersService.delete(id);
    }
}
