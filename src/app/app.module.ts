import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { IndexModule } from './index/index.module';
// import { InterceptorModule } from './interceptor/interceptor.module';

@Module({
  imports: [UserModule, NotificationModule, IndexModule, InterceptorModule],
})
export class AppModule {}