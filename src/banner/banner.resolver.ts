import { BannerService } from "src/banner/banner.service";
import {
  Banner,
  FindFirstBannerArgs,
  FindUniqueBannerArgs,
  FindManyBannerArgs,
  BannerGroupBy,
  BannerGroupByArgs,
  AggregateBanner,
  BannerAggregateArgs,
  CreateOneBannerArgs,
  CreateManyBannerArgs,
  UpdateOneBannerArgs,
  UpdateManyBannerArgs,
  DeleteOneBannerArgs,
  DeleteManyBannerArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Banner)
export class BannerResolver {
  constructor(private readonly bannerService: BannerService) {}

  @Query(() => Banner, { nullable: false })
  findFirstBanner(@Args() args: FindFirstBannerArgs) {
    this.bannerService.findFirst(args);
  }

  @Query(() => Banner, { nullable: false })
  findUniqueBanner(@Args() args: FindUniqueBannerArgs) {
    return this.bannerService.findUnique(args);
  }

  @Query(() => [Banner], { nullable: false })
  listBanners(@Args() args: FindManyBannerArgs) {
    return this.bannerService.findMany(args);
  }

  @Query(() => [BannerGroupBy], { nullable: false })
  groupByBanner(@Args() args: BannerGroupByArgs) {
    return this.bannerService.groupBy(args);
  }

  @Query(() => AggregateBanner, { nullable: false })
  aggregateBanner(@Args() args: BannerAggregateArgs) {
    return this.bannerService.aggregate(args);
  }

  @Mutation(() => Banner, { nullable: true })
  createBanner(@Args() args: CreateOneBannerArgs) {
    return this.bannerService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyBanner(@Args() args: CreateManyBannerArgs) {
    return this.bannerService.createMany(args);
  }

  @Mutation(() => Banner, { nullable: true })
  updateBanner(@Args() args: UpdateOneBannerArgs) {
    return this.bannerService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyBanner(@Args() args: UpdateManyBannerArgs) {
    return this.bannerService.updateMany(args);
  }

  @Mutation(() => Banner, { nullable: true })
  deleteBanner(@Args() args: DeleteOneBannerArgs) {
    return this.bannerService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyBanner(@Args() args: DeleteManyBannerArgs) {
    return this.bannerService.deleteMany(args);
  }
}
