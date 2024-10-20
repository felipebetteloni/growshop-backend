import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Reply, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ReplyService extends BaseCrudService<
  Reply,
  Prisma.ReplyFindFirstArgs,
  Prisma.ReplyFindUniqueArgs,
  Prisma.ReplyFindManyArgs,
  Prisma.ReplyGroupByArgs,
  Prisma.ReplyAggregateArgs,
  Prisma.ReplyCreateArgs,
  Prisma.ReplyCreateManyArgs,
  Prisma.ReplyUpdateArgs,
  Prisma.ReplyUpdateManyArgs,
  Prisma.ReplyDeleteArgs,
  Prisma.ReplyDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
