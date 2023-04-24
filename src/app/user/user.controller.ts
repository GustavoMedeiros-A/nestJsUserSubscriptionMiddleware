

import { Controller, Post, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserPipe } from './common/pipe/user.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(UserPipe) payload: User) {
    console.log(payload)
    return this.userService.create(payload);
  }

  @Get()
  index() {
    return this.userService.findAll();
  }
}