import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CityResolver } from "./city.resolver";
import { CityService } from "./city.service";

@Module({
  imports: [PrismaModule],
  providers: [CityResolver, CityService],
})
export class CityModule {}
