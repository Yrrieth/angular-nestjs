import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  /*async findOne(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.find(user => user.username === username);
  }*/

  async findByName(username: string) {
    let user = await this.userRepository.findOne({
      where: [{"username": username}],
    });
    return user;
  }

  async findById(_id: number) {
    let user =  await this.userRepository.findOne({
        where: [{ "id": _id }],
    });
    return user;
}

  async  create(user: UserEntity): Promise<UserEntity> {
    user.password = await this.getHash(user.password);
    // clear password as we don't persist passwords
    //user.password = undefined;
    user.salt = this.saltRounds;
    return await this.userRepository.save(user);
  }

  async getHash(password: string|undefined): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async update(user: UserEntity): Promise<UpdateResult> {
    return await this.userRepository.update(user.userId, user);
  }

  async delete(_id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(_id);
  }
}
