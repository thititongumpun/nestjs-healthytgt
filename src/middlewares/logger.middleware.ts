import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();
  use(req: Request, res: Response, next: NextFunction) {
    // const { originalUrl } = req;

    // res.on('finish', () => {
    //   this.logger.log(`${originalUrl}`);
    // });
    const { ip, method, path: url } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('finish', () => {
      const { statusCode } = res;

      this.logger.log(`${method} ${url} ${statusCode} - ${userAgent} ${ip}`);
    });
    next();
  }
}
