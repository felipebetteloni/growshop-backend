import { Logger } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { FindFirstCategoryArgs } from './graphql';
import { AffectedRows } from 'src/common/prisma';

@Resolver(() => Category)
export class CategoryResolver {
  private readonly logger = new Logger(CategoryResolver.name);

  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category, { nullable: false })
  findFirstCategory(@Args() args: FindFirstCategoryArgs) {
    this.categoryService.findFirst(args);
  }

  @Query(() => Category, { nullable: false })
  findUniqueCategory(@Args() args: FindUniqueCategoryArgs) {
    return this.categoryService.findUnique(args);
  }

  @Query(() => [Category], { nullable: false })
  listCategorys(@Args() args: FindManyCategoryArgs) {
    return this.categoryService.findMany(args);
  }

  @Query(() => [CategoryGroupBy], { nullable: false })
  groupByCategory(@Args() args: CategoryGroupByArgs) {
    return this.categoryService.groupBy(args);
  }

  @Query(() => AggregateCategory, { nullable: false })
  aggregateCategory(@Args() args: CategoryAggregateArgs) {
    return this.categoryService.aggregate(args);
  }

  @Mutation(() => Category, { nullable: true })
  createCategory(@Args() args: CreateOneCategoryArgs) {
    return this.categoryService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyCategory(@Args() args: CreateManyCategoryArgs) {
    return this.categoryService.createMany(args);
  }

  @Mutation(() => Category, { nullable: true })
  updateCategory(@Args() args: UpdateOneCategoryArgs) {
    return this.categoryService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyCategory(@Args() args: UpdateManyCategoryArgs) {
    return this.categoryService.updateMany(args);
  }

  @Mutation(() => Category, { nullable: true })
  deleteCategory(@Args() args: DeleteOneCategoryArgs) {
    return this.categoryService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyCategory(@Args() args: DeleteManyCategoryArgs) {
    return this.categoryService.deleteMany(args);
  }
}
