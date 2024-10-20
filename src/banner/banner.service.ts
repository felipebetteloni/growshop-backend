import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Banner, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class BannerService extends BaseCrudService<
  Banner,
  Prisma.BannerFindFirstArgs,
  Prisma.BannerFindUniqueArgs,
  Prisma.BannerFindManyArgs,
  Prisma.BannerGroupByArgs,
  Prisma.BannerAggregateArgs,
  Prisma.BannerCreateArgs,
  Prisma.BannerCreateManyArgs,
  Prisma.BannerUpdateArgs,
  Prisma.BannerUpdateManyArgs,
  Prisma.BannerDeleteArgs,
  Prisma.BannerDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
