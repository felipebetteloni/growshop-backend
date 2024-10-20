import { SubCategoryService } from "src/sub-category/sub-category.service";
import {
  SubCategory,
  FindFirstSubCategoryArgs,
  FindUniqueSubCategoryArgs,
  FindManySubCategoryArgs,
  SubCategoryGroupBy,
  SubCategoryGroupByArgs,
  AggregateSubCategory,
  SubCategoryAggregateArgs,
  CreateOneSubCategoryArgs,
  CreateManySubCategoryArgs,
  UpdateOneSubCategoryArgs,
  UpdateManySubCategoryArgs,
  DeleteOneSubCategoryArgs,
  DeleteManySubCategoryArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => SubCategory)
export class SubCategoryResolver {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Query(() => SubCategory, { nullable: false })
  findFirstSubCategory(@Args() args: FindFirstSubCategoryArgs) {
    this.subCategoryService.findFirst(args);
  }

  @Query(() => SubCategory, { nullable: false })
  findUniqueSubCategory(@Args() args: FindUniqueSubCategoryArgs) {
    return this.subCategoryService.findUnique(args);
  }

  @Query(() => [SubCategory], { nullable: false })
  listSubCategorys(@Args() args: FindManySubCategoryArgs) {
    return this.subCategoryService.findMany(args);
  }

  @Query(() => [SubCategoryGroupBy], { nullable: false })
  groupBySubCategory(@Args() args: SubCategoryGroupByArgs) {
    return this.subCategoryService.groupBy(args);
  }

  @Query(() => AggregateSubCategory, { nullable: false })
  aggregateSubCategory(@Args() args: SubCategoryAggregateArgs) {
    return this.subCategoryService.aggregate(args);
  }

  @Mutation(() => SubCategory, { nullable: true })
  createSubCategory(@Args() args: CreateOneSubCategoryArgs) {
    return this.subCategoryService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManySubCategory(@Args() args: CreateManySubCategoryArgs) {
    return this.subCategoryService.createMany(args);
  }

  @Mutation(() => SubCategory, { nullable: true })
  updateSubCategory(@Args() args: UpdateOneSubCategoryArgs) {
    return this.subCategoryService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManySubCategory(@Args() args: UpdateManySubCategoryArgs) {
    return this.subCategoryService.updateMany(args);
  }

  @Mutation(() => SubCategory, { nullable: true })
  deleteSubCategory(@Args() args: DeleteOneSubCategoryArgs) {
    return this.subCategoryService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManySubCategory(@Args() args: DeleteManySubCategoryArgs) {
    return this.subCategoryService.deleteMany(args);
  }
}
