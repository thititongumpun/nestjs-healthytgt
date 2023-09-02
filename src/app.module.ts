import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { AdvicesModule } from './advices/advices.module';
import { PrismaService } from './providers/prisma/prisma.module';

@Module({
  imports: [CategoriesModule, AdvicesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
