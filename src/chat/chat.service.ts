import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Chat, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ChatService extends BaseCrudService<
  Chat,
  Prisma.ChatFindFirstArgs,
  Prisma.ChatFindUniqueArgs,
  Prisma.ChatFindManyArgs,
  Prisma.ChatGroupByArgs,
  Prisma.ChatAggregateArgs,
  Prisma.ChatCreateArgs,
  Prisma.ChatCreateManyArgs,
  Prisma.ChatUpdateArgs,
  Prisma.ChatUpdateManyArgs,
  Prisma.ChatDeleteArgs,
  Prisma.ChatDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
