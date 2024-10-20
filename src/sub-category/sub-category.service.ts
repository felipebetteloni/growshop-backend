import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubCategory, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";
import { DefaultArgs } from "@prisma/client/runtime/library";

@Injectable()
export class SubCategoryService extends BaseCrudService<
  SubCategory,
  Prisma.SubCategoryFindFirstArgs,
  Prisma.SubCategoryFindUniqueArgs,
  Prisma.SubCategoryFindManyArgs,
  Prisma.SubCategoryGroupByArgs,
  Prisma.SubCategoryAggregateArgs,
  Prisma.SubCategoryCreateArgs,
  Prisma.SubCategoryCreateManyArgs,
  Prisma.SubCategoryUpdateArgs,
  Prisma.SubCategoryUpdateManyArgs,
  Prisma.SubCategoryDeleteArgs,
  Prisma.SubCategoryDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  findMany(args: Prisma.SubCategoryFindManyArgs<DefaultArgs>): Promise<SubCategory[]> {
    return this.prisma.subCategory.findMany({
      ...args,
      include: {
        ...this.includeCategory(),
        ...this.includeCount(),
      }
    });
  }

  findUnique(args: Prisma.SubCategoryFindUniqueArgs<DefaultArgs>): Promise<SubCategory> {
    return this.prisma.subCategory.findUnique({
      ...args,
      include: {
        ...this.includeCategory(),
        ...this.includeCount(),
      }
    })
  }

  update(args: Prisma.SubCategoryUpdateArgs<DefaultArgs>): Promise<SubCategory> {
    console.log(args);
    return this.prisma.subCategory.update({
      ...args,
      include: {
        ...this.includeCategory(),
        ...this.includeCount(),
      }
    });
  }

  create(args: Prisma.SubCategoryCreateArgs<DefaultArgs>): Promise<SubCategory> {
    console.log(args);
    return this.prisma.subCategory.create({
      ...args,
      include: {
        ...this.includeCategory(),
        ...this.includeCount(),
      }
    });
  }

  includeCategory() {
    return {
      category: {
        select: {
          name: true,
          id: true,       
        }
      }
    }
  }
}
