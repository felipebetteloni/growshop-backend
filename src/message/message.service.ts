import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Message, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class MessageService extends BaseCrudService<
  Message,
  Prisma.MessageFindFirstArgs,
  Prisma.MessageFindUniqueArgs,
  Prisma.MessageFindManyArgs,
  Prisma.MessageGroupByArgs,
  Prisma.MessageAggregateArgs,
  Prisma.MessageCreateArgs,
  Prisma.MessageCreateManyArgs,
  Prisma.MessageUpdateArgs,
  Prisma.MessageUpdateManyArgs,
  Prisma.MessageDeleteArgs,
  Prisma.MessageDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
