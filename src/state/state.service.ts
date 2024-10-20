import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { State, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class StateService extends BaseCrudService<
  State,
  Prisma.StateFindFirstArgs,
  Prisma.StateFindUniqueArgs,
  Prisma.StateFindManyArgs,
  Prisma.StateGroupByArgs,
  Prisma.StateAggregateArgs,
  Prisma.StateCreateArgs,
  Prisma.StateCreateManyArgs,
  Prisma.StateUpdateArgs,
  Prisma.StateUpdateManyArgs,
  Prisma.StateDeleteArgs,
  Prisma.StateDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
