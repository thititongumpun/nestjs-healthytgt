import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { PrismaService } from 'src/providers/prisma/prisma.module';
import { AccountsController } from './accounts.controller';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, PrismaService],
  exports: [AccountsService],
})
export class AccountsModule {}
