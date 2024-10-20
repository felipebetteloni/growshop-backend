import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Share, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ShareService extends BaseCrudService<
  Share,
  Prisma.ShareFindFirstArgs,
  Prisma.ShareFindUniqueArgs,
  Prisma.ShareFindManyArgs,
  Prisma.ShareGroupByArgs,
  Prisma.ShareAggregateArgs,
  Prisma.ShareCreateArgs,
  Prisma.ShareCreateManyArgs,
  Prisma.ShareUpdateArgs,
  Prisma.ShareUpdateManyArgs,
  Prisma.ShareDeleteArgs,
  Prisma.ShareDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
