import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CountryResolver } from "./country.resolver";
import { CountryService } from "./country.service";

@Module({
  imports: [PrismaModule],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
