import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { BrandResolver } from "./brand.resolver";
import { BrandService } from "./brand.service";

@Module({
  imports: [PrismaModule],
  providers: [BrandResolver, BrandService],
})
export class BrandModule {}
