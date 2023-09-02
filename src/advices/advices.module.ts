import { Module } from '@nestjs/common';
import { AdvicesController } from './advices.controller';
import { AdvicesService } from './advices.service';
import { PrismaService } from 'src/providers/prisma/prisma.module';

@Module({
  controllers: [AdvicesController],
  providers: [AdvicesService, PrismaService],
})
export class AdvicesModule {}
