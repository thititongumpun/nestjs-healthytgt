import { Injectable } from '@nestjs/common';
import { Categories } from '@prisma/client';
import { PrismaService } from 'src/providers/prisma/prisma.module';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getCategories(): Promise<Categories[] | null> {
    return this.prisma.categories.findMany({
      orderBy: {
        CategoryOrderId: 'asc',
      },
    });
  }
}
