import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { NeighbourhoodResolver } from "./neighbourhood.resolver";
import { NeighbourhoodService } from "./neighbourhood.service";

@Module({
  imports: [PrismaModule],
  providers: [NeighbourhoodResolver, NeighbourhoodService],
})
export class NeighbourhoodModule {}
