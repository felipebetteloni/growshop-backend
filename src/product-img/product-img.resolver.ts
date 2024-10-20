import { ProductImgService } from "src/product-img/product-img.service";
import {
  ProductImg,
  FindFirstProductImgArgs,
  FindUniqueProductImgArgs,
  FindManyProductImgArgs,
  ProductImgGroupBy,
  ProductImgGroupByArgs,
  AggregateProductImg,
  ProductImgAggregateArgs,
  CreateOneProductImgArgs,
  CreateManyProductImgArgs,
  UpdateOneProductImgArgs,
  UpdateManyProductImgArgs,
  DeleteOneProductImgArgs,
  DeleteManyProductImgArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => ProductImg)
export class ProductImgResolver {
  constructor(private readonly productImgService: ProductImgService) {}

  @Query(() => ProductImg, { nullable: false })
  findFirstProductImg(@Args() args: FindFirstProductImgArgs) {
    this.productImgService.findFirst(args);
  }

  @Query(() => ProductImg, { nullable: false })
  findUniqueProductImg(@Args() args: FindUniqueProductImgArgs) {
    return this.productImgService.findUnique(args);
  }

  @Query(() => [ProductImg], { nullable: false })
  listProductImgs(@Args() args: FindManyProductImgArgs) {
    return this.productImgService.findMany(args);
  }

  @Query(() => [ProductImgGroupBy], { nullable: false })
  groupByProductImg(@Args() args: ProductImgGroupByArgs) {
    return this.productImgService.groupBy(args);
  }

  @Query(() => AggregateProductImg, { nullable: false })
  aggregateProductImg(@Args() args: ProductImgAggregateArgs) {
    return this.productImgService.aggregate(args);
  }

  @Mutation(() => ProductImg, { nullable: true })
  createProductImg(@Args() args: CreateOneProductImgArgs) {
    return this.productImgService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyProductImg(@Args() args: CreateManyProductImgArgs) {
    return this.productImgService.createMany(args);
  }

  @Mutation(() => ProductImg, { nullable: true })
  updateProductImg(@Args() args: UpdateOneProductImgArgs) {
    return this.productImgService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyProductImg(@Args() args: UpdateManyProductImgArgs) {
    return this.productImgService.updateMany(args);
  }

  @Mutation(() => ProductImg, { nullable: true })
  deleteProductImg(@Args() args: DeleteOneProductImgArgs) {
    return this.productImgService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyProductImg(@Args() args: DeleteManyProductImgArgs) {
    return this.productImgService.deleteMany(args);
  }
}
