import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';

@ApiBearerAuth()
@ApiTags('categories')
@Controller({
  path: 'categories',
  version: '1',
})
@UseInterceptors(CacheInterceptor)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Categories[]> {
    return this.categoriesService.getCategories();
  }
}
