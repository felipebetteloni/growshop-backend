import { ProductService } from "src/product/product.service";
import {
  Product,
  FindFirstProductArgs,
  FindUniqueProductArgs,
  FindManyProductArgs,
  ProductGroupBy,
  ProductGroupByArgs,
  AggregateProduct,
  ProductAggregateArgs,
  CreateOneProductArgs,
  CreateManyProductArgs,
  UpdateOneProductArgs,
  UpdateManyProductArgs,
  DeleteOneProductArgs,
  DeleteManyProductArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product, { nullable: false })
  findFirstProduct(@Args() args: FindFirstProductArgs) {
    this.productService.findFirst(args);
  }

  @Query(() => Product, { nullable: false })
  findUniqueProduct(@Args() args: FindUniqueProductArgs) {
    return this.productService.findUnique(args);
  }

  @Query(() => [Product], { nullable: false })
  listProducts(@Args() args: FindManyProductArgs) {
    return this.productService.findMany(args);
  }

  @Query(() => [ProductGroupBy], { nullable: false })
  groupByProduct(@Args() args: ProductGroupByArgs) {
    return this.productService.groupBy(args);
  }

  @Query(() => AggregateProduct, { nullable: false })
  aggregateProduct(@Args() args: ProductAggregateArgs) {
    return this.productService.aggregate(args);
  }

  @Mutation(() => Product, { nullable: true })
  createProduct(@Args() args: CreateOneProductArgs) {
    return this.productService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyProduct(@Args() args: CreateManyProductArgs) {
    return this.productService.createMany(args);
  }

  @Mutation(() => Product, { nullable: true })
  updateProduct(@Args() args: UpdateOneProductArgs) {
    return this.productService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyProduct(@Args() args: UpdateManyProductArgs) {
    return this.productService.updateMany(args);
  }

  @Mutation(() => Product, { nullable: true })
  deleteProduct(@Args() args: DeleteOneProductArgs) {
    return this.productService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyProduct(@Args() args: DeleteManyProductArgs) {
    return this.productService.deleteMany(args);
  }
}
