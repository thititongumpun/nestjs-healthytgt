import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('notifications')
@Controller({
  path: 'notifications',
  version: '1',
})
export class NotificationsController {
  @Get()
  async getNotifications(@Request() req) {
    return req.user.Id;
  }
}
