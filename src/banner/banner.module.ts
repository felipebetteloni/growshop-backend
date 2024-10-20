import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { BannerResolver } from "./banner.resolver";
import { BannerService } from "./banner.service";

@Module({
  imports: [PrismaModule],
  providers: [BannerResolver, BannerService],
})
export class BannerModule {}
