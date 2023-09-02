import { Controller, Get, Param } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { Advices } from '@prisma/client';

@Controller('advices')
export class AdvicesController {
  constructor(private readonly advicesService: AdvicesService) {}

  @Get(':categoryId')
  async getAdvices(
    @Param('categoryId') categoryId: string,
  ): Promise<Advices[] | null> {
    return this.advicesService.getAdvices(categoryId);
  }
}
