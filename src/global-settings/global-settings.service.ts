import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GlobalSettings, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class GlobalSettingsService extends BaseCrudService<
  GlobalSettings,
  Prisma.GlobalSettingsFindFirstArgs,
  Prisma.GlobalSettingsFindUniqueArgs,
  Prisma.GlobalSettingsFindManyArgs,
  Prisma.GlobalSettingsGroupByArgs,
  Prisma.GlobalSettingsAggregateArgs,
  Prisma.GlobalSettingsCreateArgs,
  Prisma.GlobalSettingsCreateManyArgs,
  Prisma.GlobalSettingsUpdateArgs,
  Prisma.GlobalSettingsUpdateManyArgs,
  Prisma.GlobalSettingsDeleteArgs,
  Prisma.GlobalSettingsDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
