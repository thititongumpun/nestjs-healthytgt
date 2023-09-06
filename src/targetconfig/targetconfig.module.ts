import { Module } from '@nestjs/common';
import { TargetconfigService } from './targetconfig.service';
import { TargetConfigController } from './targetconfig.controller';

@Module({
  providers: [TargetconfigService],
  controllers: [TargetConfigController],
})
export class TargetconfigModule {}
