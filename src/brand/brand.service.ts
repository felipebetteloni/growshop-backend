import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Brand, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";
import { DefaultArgs } from "@prisma/client/runtime/library";

@Injectable()
export class BrandService extends BaseCrudService<
  Brand,
  Prisma.BrandFindFirstArgs,
  Prisma.BrandFindUniqueArgs,
  Prisma.BrandFindManyArgs,
  Prisma.BrandGroupByArgs,
  Prisma.BrandAggregateArgs,
  Prisma.BrandCreateArgs,
  Prisma.BrandCreateManyArgs,
  Prisma.BrandUpdateArgs,
  Prisma.BrandUpdateManyArgs,
  Prisma.BrandDeleteArgs,
  Prisma.BrandDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  findUnique(args: Prisma.BrandFindUniqueArgs<DefaultArgs>): Promise<Brand> {
    return this.prisma.brand.findUnique({
      ...args,
      include: {
        ...this.includeCount(),
      }
    })
  }

  update(args: Prisma.BrandUpdateArgs<DefaultArgs>): Promise<Brand> {
    return this.prisma.brand.update({
      ...args,
      include: {
        ...this.includeCount(),
      }
    });
  }

  create(args: Prisma.BrandCreateArgs<DefaultArgs>): Promise<Brand> {
    return this.prisma.brand.create({
      ...args,
      include: {
        ...this.includeCount(),
      }
    });
  }
}
