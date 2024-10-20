import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Favorite, Prisma } from "@prisma/client";
import { BaseCrudService } from "src/common/base-crud.service";

@Injectable()
export class FavoriteService extends BaseCrudService<
  Favorite,
  Prisma.FavoriteFindFirstArgs,
  Prisma.FavoriteFindUniqueArgs,
  Prisma.FavoriteFindManyArgs,
  Prisma.FavoriteGroupByArgs,
  Prisma.FavoriteAggregateArgs,
  Prisma.FavoriteCreateArgs,
  Prisma.FavoriteCreateManyArgs,
  Prisma.FavoriteUpdateArgs,
  Prisma.FavoriteUpdateManyArgs,
  Prisma.FavoriteDeleteArgs,
  Prisma.FavoriteDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
