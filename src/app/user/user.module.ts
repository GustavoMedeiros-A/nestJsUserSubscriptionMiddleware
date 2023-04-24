import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { Request } from 'express';
import { UserLoggerMiddleware } from './common/middleware/user-logger.middleware';
import { AssignAdultMiddleware } from './common/middleware/assign-adult.middleware';


@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AssignAdultMiddleware, UserLoggerMiddleware) // Deixar na ordem correta porq uso AdultMiddleware no loggerMiddleware
    .forRoutes({ path: "user", method: RequestMethod.POST } ); // The middlware just run in the POST method
  } 
  
}