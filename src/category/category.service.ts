import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category } from './category.entity';
import { Prisma } from '@prisma/client';
import { BaseCrudService } from 'src/common/base-crud.service';

@Injectable()
export class CategoryService extends BaseCrudService<
  Category,
  Prisma.CategoryFindFirstArgs,
  Prisma.CategoryFindUniqueArgs,
  Prisma.CategoryFindManyArgs,
  Prisma.CategoryGroupByArgs,
  Prisma.CategoryAggregateArgs,
  Prisma.CategoryCreateArgs,
  Prisma.CategoryCreateManyArgs,
  Prisma.CategoryUpdateArgs,
  Prisma.CategoryUpdateManyArgs,
  Prisma.CategoryDeleteArgs,
  Prisma.CategoryDeleteManyArgs
>  {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService);
  }
}
