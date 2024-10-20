import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ConditionResolver } from "./condition.resolver";
import { ConditionService } from "./condition.service";

@Module({
  imports: [PrismaModule],
  providers: [ConditionResolver, ConditionService],
})
export class ConditionModule {}
