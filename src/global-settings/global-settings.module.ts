import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { GlobalSettingsResolver } from "./global-settings.resolver";
import { GlobalSettingsService } from "./global-settings.service";

@Module({
  imports: [PrismaModule],
  providers: [GlobalSettingsResolver, GlobalSettingsService],
})
export class GlobalSettingsModule {}
