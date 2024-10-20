import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Subscription, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class SubscriptionService extends BaseCrudService<
  Subscription,
  Prisma.SubscriptionFindFirstArgs,
  Prisma.SubscriptionFindUniqueArgs,
  Prisma.SubscriptionFindManyArgs,
  Prisma.SubscriptionGroupByArgs,
  Prisma.SubscriptionAggregateArgs,
  Prisma.SubscriptionCreateArgs,
  Prisma.SubscriptionCreateManyArgs,
  Prisma.SubscriptionUpdateArgs,
  Prisma.SubscriptionUpdateManyArgs,
  Prisma.SubscriptionDeleteArgs,
  Prisma.SubscriptionDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
