import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Review, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ReviewService extends BaseCrudService<
  Review,
  Prisma.ReviewFindFirstArgs,
  Prisma.ReviewFindUniqueArgs,
  Prisma.ReviewFindManyArgs,
  Prisma.ReviewGroupByArgs,
  Prisma.ReviewAggregateArgs,
  Prisma.ReviewCreateArgs,
  Prisma.ReviewCreateManyArgs,
  Prisma.ReviewUpdateArgs,
  Prisma.ReviewUpdateManyArgs,
  Prisma.ReviewDeleteArgs,
  Prisma.ReviewDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
