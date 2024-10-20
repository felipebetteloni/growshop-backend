import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Product, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ProductService extends BaseCrudService<
  Product,
  Prisma.ProductFindFirstArgs,
  Prisma.ProductFindUniqueArgs,
  Prisma.ProductFindManyArgs,
  Prisma.ProductGroupByArgs,
  Prisma.ProductAggregateArgs,
  Prisma.ProductCreateArgs,
  Prisma.ProductCreateManyArgs,
  Prisma.ProductUpdateArgs,
  Prisma.ProductUpdateManyArgs,
  Prisma.ProductDeleteArgs,
  Prisma.ProductDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
