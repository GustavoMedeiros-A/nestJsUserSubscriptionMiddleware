import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(payload: User) {
    if(payload.age <= 0) {
      // throw new HttpException("Age should be more than zero", HttpStatus.OK)
        throw new BadRequestException("Age should be more than zero") // 400
    }
    if(payload.name.length <= 1) {
      throw new BadRequestException("Name should be more than one character") 
    }
    this.users.push(payload);
    return payload;
  }

  findAll(): User[] {
    return this.users;
  }

  // findNotificationEnabled() {
  //   return this.findAll().filter(user => user.notified);
  // }
}