import { FavoriteService } from "src/favorite/favorite.service";
import {
  Favorite,
  FindFirstFavoriteArgs,
  FindUniqueFavoriteArgs,
  FindManyFavoriteArgs,
  FavoriteGroupBy,
  FavoriteGroupByArgs,
  AggregateFavorite,
  FavoriteAggregateArgs,
  CreateOneFavoriteArgs,
  CreateManyFavoriteArgs,
  UpdateOneFavoriteArgs,
  UpdateManyFavoriteArgs,
  DeleteOneFavoriteArgs,
  DeleteManyFavoriteArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Favorite)
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Query(() => Favorite, { nullable: false })
  findFirstFavorite(@Args() args: FindFirstFavoriteArgs) {
    this.favoriteService.findFirst(args);
  }

  @Query(() => Favorite, { nullable: false })
  findUniqueFavorite(@Args() args: FindUniqueFavoriteArgs) {
    return this.favoriteService.findUnique(args);
  }

  @Query(() => [Favorite], { nullable: false })
  listFavorites(@Args() args: FindManyFavoriteArgs) {
    return this.favoriteService.findMany(args);
  }

  @Query(() => [FavoriteGroupBy], { nullable: false })
  groupByFavorite(@Args() args: FavoriteGroupByArgs) {
    return this.favoriteService.groupBy(args);
  }

  @Query(() => AggregateFavorite, { nullable: false })
  aggregateFavorite(@Args() args: FavoriteAggregateArgs) {
    return this.favoriteService.aggregate(args);
  }

  @Mutation(() => Favorite, { nullable: true })
  createFavorite(@Args() args: CreateOneFavoriteArgs) {
    return this.favoriteService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyFavorite(@Args() args: CreateManyFavoriteArgs) {
    return this.favoriteService.createMany(args);
  }

  @Mutation(() => Favorite, { nullable: true })
  updateFavorite(@Args() args: UpdateOneFavoriteArgs) {
    return this.favoriteService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyFavorite(@Args() args: UpdateManyFavoriteArgs) {
    return this.favoriteService.updateMany(args);
  }

  @Mutation(() => Favorite, { nullable: true })
  deleteFavorite(@Args() args: DeleteOneFavoriteArgs) {
    return this.favoriteService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyFavorite(@Args() args: DeleteManyFavoriteArgs) {
    return this.favoriteService.deleteMany(args);
  }
}
