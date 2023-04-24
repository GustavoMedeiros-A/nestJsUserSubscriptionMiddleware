

import { Controller, Post, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() payload: User) {
    return this.userService.create(payload);
  }

  @Get()
  index() {
    return this.userService.findAll();
  }
}