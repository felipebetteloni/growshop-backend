import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Condition, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ConditionService extends BaseCrudService<
  Condition,
  Prisma.ConditionFindFirstArgs,
  Prisma.ConditionFindUniqueArgs,
  Prisma.ConditionFindManyArgs,
  Prisma.ConditionGroupByArgs,
  Prisma.ConditionAggregateArgs,
  Prisma.ConditionCreateArgs,
  Prisma.ConditionCreateManyArgs,
  Prisma.ConditionUpdateArgs,
  Prisma.ConditionUpdateManyArgs,
  Prisma.ConditionDeleteArgs,
  Prisma.ConditionDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
