import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("User is adult?", req.body.isAdult)
    // console.log("i am called")
    next();
  }
}
