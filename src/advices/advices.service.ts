import { Injectable } from '@nestjs/common';
import { Advices } from '@prisma/client';
import { PrismaService } from 'src/providers/prisma/prisma.module';

@Injectable()
export class AdvicesService {
  constructor(private prisma: PrismaService) {}

  async getAdvices(categoryId: number): Promise<Advices[] | null> {
    return this.prisma.advices.findMany({
      include: {
        Categories: true,
      },
      where: {
        Categories: {
          CategoryOrderId: categoryId,
        },
      },
    });
  }
}
