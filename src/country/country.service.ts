import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Country, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class CountryService extends BaseCrudService<
  Country,
  Prisma.CountryFindFirstArgs,
  Prisma.CountryFindUniqueArgs,
  Prisma.CountryFindManyArgs,
  Prisma.CountryGroupByArgs,
  Prisma.CountryAggregateArgs,
  Prisma.CountryCreateArgs,
  Prisma.CountryCreateManyArgs,
  Prisma.CountryUpdateArgs,
  Prisma.CountryUpdateManyArgs,
  Prisma.CountryDeleteArgs,
  Prisma.CountryDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
