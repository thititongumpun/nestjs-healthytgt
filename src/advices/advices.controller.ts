import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AdvicesService } from './advices.service';
import { Advices } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('advices')
@Controller('advices')
export class AdvicesController {
  constructor(private readonly advicesService: AdvicesService) {}

  @Get(':categoryId')
  async getAdvices(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<Advices[] | null> {
    return this.advicesService.getAdvices(categoryId);
  }
}
