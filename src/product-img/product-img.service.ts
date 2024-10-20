import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductImg, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ProductImgService extends BaseCrudService<
  ProductImg,
  Prisma.ProductImgFindFirstArgs,
  Prisma.ProductImgFindUniqueArgs,
  Prisma.ProductImgFindManyArgs,
  Prisma.ProductImgGroupByArgs,
  Prisma.ProductImgAggregateArgs,
  Prisma.ProductImgCreateArgs,
  Prisma.ProductImgCreateManyArgs,
  Prisma.ProductImgUpdateArgs,
  Prisma.ProductImgUpdateManyArgs,
  Prisma.ProductImgDeleteArgs,
  Prisma.ProductImgDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
