import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { FavoriteResolver } from "./favorite.resolver";
import { FavoriteService } from "./favorite.service";

@Module({
  imports: [PrismaModule],
  providers: [FavoriteResolver, FavoriteService],
})
export class FavoriteModule {}
