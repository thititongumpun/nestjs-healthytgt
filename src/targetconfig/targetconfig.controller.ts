import { CacheInterceptor } from '@nestjs/cache-manager';
import { TargetconfigService } from './targetconfig.service';
import { Controller, Get, Request, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('targetconfig')
@Controller({
  path: 'targetconfig',
  version: '1',
})
@UseInterceptors(CacheInterceptor)
export class TargetConfigController {
  constructor(private readonly targetconfigService: TargetconfigService) {}

  @Get()
  async getNotifications(@Request() req) {
    return this.targetconfigService.getTargetConfigs(req.user.Id);
  }
}
