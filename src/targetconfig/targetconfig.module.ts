import { Module } from '@nestjs/common';
import { TargetconfigService } from './targetconfig.service';
import { TargetConfigController } from './targetconfig.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  providers: [TargetconfigService],
  controllers: [TargetConfigController],
})
export class TargetconfigModule {}
