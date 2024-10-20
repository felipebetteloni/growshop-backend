import { BrandService } from "src/brand/brand.service";
import {
  Brand,
  FindFirstBrandArgs,
  FindUniqueBrandArgs,
  FindManyBrandArgs,
  BrandGroupBy,
  BrandGroupByArgs,
  AggregateBrand,
  BrandAggregateArgs,
  CreateOneBrandArgs,
  CreateManyBrandArgs,
  UpdateOneBrandArgs,
  UpdateManyBrandArgs,
  DeleteOneBrandArgs,
  DeleteManyBrandArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Brand)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Query(() => Brand, { nullable: false })
  findFirstBrand(@Args() args: FindFirstBrandArgs) {
    this.brandService.findFirst(args);
  }

  @Query(() => Brand, { nullable: false })
  findUniqueBrand(@Args() args: FindUniqueBrandArgs) {
    return this.brandService.findUnique(args);
  }

  @Query(() => [Brand], { nullable: false })
  listBrands(@Args() args: FindManyBrandArgs) {
    return this.brandService.findMany(args);
  }

  @Query(() => [BrandGroupBy], { nullable: false })
  groupByBrand(@Args() args: BrandGroupByArgs) {
    return this.brandService.groupBy(args);
  }

  @Query(() => AggregateBrand, { nullable: false })
  aggregateBrand(@Args() args: BrandAggregateArgs) {
    return this.brandService.aggregate(args);
  }

  @Mutation(() => Brand, { nullable: true })
  createBrand(@Args() args: CreateOneBrandArgs) {
    return this.brandService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyBrand(@Args() args: CreateManyBrandArgs) {
    return this.brandService.createMany(args);
  }

  @Mutation(() => Brand, { nullable: true })
  updateBrand(@Args() args: UpdateOneBrandArgs) {
    return this.brandService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyBrand(@Args() args: UpdateManyBrandArgs) {
    return this.brandService.updateMany(args);
  }

  @Mutation(() => Brand, { nullable: true })
  deleteBrand(@Args() args: DeleteOneBrandArgs) {
    return this.brandService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyBrand(@Args() args: DeleteManyBrandArgs) {
    return this.brandService.deleteMany(args);
  }
}
