import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(payload: User) {
    if(payload.age <= 0) {
      throw new HttpException("Age should be more than zero", HttpStatus.FORBIDDEN)
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