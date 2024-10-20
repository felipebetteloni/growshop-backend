import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { City, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class CityService extends BaseCrudService<
  City,
  Prisma.CityFindFirstArgs,
  Prisma.CityFindUniqueArgs,
  Prisma.CityFindManyArgs,
  Prisma.CityGroupByArgs,
  Prisma.CityAggregateArgs,
  Prisma.CityCreateArgs,
  Prisma.CityCreateManyArgs,
  Prisma.CityUpdateArgs,
  Prisma.CityUpdateManyArgs,
  Prisma.CityDeleteArgs,
  Prisma.CityDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
