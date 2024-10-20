import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Report, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class ReportService extends BaseCrudService<
  Report,
  Prisma.ReportFindFirstArgs,
  Prisma.ReportFindUniqueArgs,
  Prisma.ReportFindManyArgs,
  Prisma.ReportGroupByArgs,
  Prisma.ReportAggregateArgs,
  Prisma.ReportCreateArgs,
  Prisma.ReportCreateManyArgs,
  Prisma.ReportUpdateArgs,
  Prisma.ReportUpdateManyArgs,
  Prisma.ReportDeleteArgs,
  Prisma.ReportDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
