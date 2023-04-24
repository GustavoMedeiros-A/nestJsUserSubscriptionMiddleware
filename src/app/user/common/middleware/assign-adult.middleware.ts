import { Injectable, NestMiddleware } from '@nestjs/common';
import { User } from '../../entity/user.entity';

@Injectable()
export class AssignAdultMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const user : User = req.body;
    user.isAdult = false;
    if(user.age >= 20) {
      user.isAdult = true
    }
    next()
  }
}
