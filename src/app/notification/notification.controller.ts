import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // @Post()
  // notifyUser() {
  //   return this.notificationService.notifyUser();
  // }
}