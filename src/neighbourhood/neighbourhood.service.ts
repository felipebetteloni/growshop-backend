import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Neighbourhood, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class NeighbourhoodService extends BaseCrudService<
  Neighbourhood,
  Prisma.NeighbourhoodFindFirstArgs,
  Prisma.NeighbourhoodFindUniqueArgs,
  Prisma.NeighbourhoodFindManyArgs,
  Prisma.NeighbourhoodGroupByArgs,
  Prisma.NeighbourhoodAggregateArgs,
  Prisma.NeighbourhoodCreateArgs,
  Prisma.NeighbourhoodCreateManyArgs,
  Prisma.NeighbourhoodUpdateArgs,
  Prisma.NeighbourhoodUpdateManyArgs,
  Prisma.NeighbourhoodDeleteArgs,
  Prisma.NeighbourhoodDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
