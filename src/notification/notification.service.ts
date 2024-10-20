import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Notification, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class NotificationService extends BaseCrudService<
  Notification,
  Prisma.NotificationFindFirstArgs,
  Prisma.NotificationFindUniqueArgs,
  Prisma.NotificationFindManyArgs,
  Prisma.NotificationGroupByArgs,
  Prisma.NotificationAggregateArgs,
  Prisma.NotificationCreateArgs,
  Prisma.NotificationCreateManyArgs,
  Prisma.NotificationUpdateArgs,
  Prisma.NotificationUpdateManyArgs,
  Prisma.NotificationDeleteArgs,
  Prisma.NotificationDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
