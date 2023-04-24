import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { IndexModule } from './index/index.module';

@Module({
  imports: [UserModule, NotificationModule, IndexModule],
})
export class AppModule {}