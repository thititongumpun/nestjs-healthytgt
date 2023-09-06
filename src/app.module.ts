import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { AdvicesModule } from './advices/advices.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaModule } from './providers/prisma/prisma.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TargetconfigModule } from './targetconfig/targetconfig.module';

@Module({
  imports: [
    PrismaModule,
    CategoriesModule,
    AdvicesModule,
    AuthModule,
    AccountsModule,
    NotificationsModule,
    TargetconfigModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: AppService,
      useClass: AppService,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
