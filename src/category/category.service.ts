import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Category, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";
import { DefaultArgs } from "@prisma/client/runtime/library";

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
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  findUnique(args: Prisma.CategoryFindUniqueArgs<DefaultArgs>): Promise<Category> {
    return this.prisma.category.findUnique({
      ...args,
      include: {
        ...this.includeSubCategory(),
        ...this.includeCount(),
      }
    })
  }

  update(args: Prisma.CategoryUpdateArgs<DefaultArgs>): Promise<Category> {
    console.log(args);
    return this.prisma.category.update({
      ...args,
      include: {
        ...this.includeSubCategory(),
        ...this.includeCount(),
      }
    });
  }

  create(args: Prisma.CategoryCreateArgs<DefaultArgs>): Promise<Category> {
    console.log(args);
    return this.prisma.category.create({
      ...args,
      include: {
        ...this.includeSubCategory(),
        ...this.includeCount(),
      }
    });
  }

  includeSubCategory() {
    return {
      SubCategory: {
        select: {
          name: true,
          id: true,       
        }
      }
    }
  }
}
