import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();
  use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl } = req;

    res.on('finish', () => {
      this.logger.log(`${originalUrl}`);
    });
    next();
  }
}
