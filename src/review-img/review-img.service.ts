import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewImg, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ReviewImgService extends BaseCrudService<
  ReviewImg,
  Prisma.ReviewImgFindFirstArgs,
  Prisma.ReviewImgFindUniqueArgs,
  Prisma.ReviewImgFindManyArgs,
  Prisma.ReviewImgGroupByArgs,
  Prisma.ReviewImgAggregateArgs,
  Prisma.ReviewImgCreateArgs,
  Prisma.ReviewImgCreateManyArgs,
  Prisma.ReviewImgUpdateArgs,
  Prisma.ReviewImgUpdateManyArgs,
  Prisma.ReviewImgDeleteArgs,
  Prisma.ReviewImgDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
