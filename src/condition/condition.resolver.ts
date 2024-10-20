import { ConditionService } from "src/condition/condition.service";
import {
  Condition,
  FindFirstConditionArgs,
  FindUniqueConditionArgs,
  FindManyConditionArgs,
  ConditionGroupBy,
  ConditionGroupByArgs,
  AggregateCondition,
  ConditionAggregateArgs,
  CreateOneConditionArgs,
  CreateManyConditionArgs,
  UpdateOneConditionArgs,
  UpdateManyConditionArgs,
  DeleteOneConditionArgs,
  DeleteManyConditionArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Condition)
export class ConditionResolver {
  constructor(private readonly conditionService: ConditionService) {}

  @Query(() => Condition, { nullable: false })
  findFirstCondition(@Args() args: FindFirstConditionArgs) {
    this.conditionService.findFirst(args);
  }

  @Query(() => Condition, { nullable: false })
  findUniqueCondition(@Args() args: FindUniqueConditionArgs) {
    return this.conditionService.findUnique(args);
  }

  @Query(() => [Condition], { nullable: false })
  listConditions(@Args() args: FindManyConditionArgs) {
    return this.conditionService.findMany(args);
  }

  @Query(() => [ConditionGroupBy], { nullable: false })
  groupByCondition(@Args() args: ConditionGroupByArgs) {
    return this.conditionService.groupBy(args);
  }

  @Query(() => AggregateCondition, { nullable: false })
  aggregateCondition(@Args() args: ConditionAggregateArgs) {
    return this.conditionService.aggregate(args);
  }

  @Mutation(() => Condition, { nullable: true })
  createCondition(@Args() args: CreateOneConditionArgs) {
    return this.conditionService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyCondition(@Args() args: CreateManyConditionArgs) {
    return this.conditionService.createMany(args);
  }

  @Mutation(() => Condition, { nullable: true })
  updateCondition(@Args() args: UpdateOneConditionArgs) {
    return this.conditionService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyCondition(@Args() args: UpdateManyConditionArgs) {
    return this.conditionService.updateMany(args);
  }

  @Mutation(() => Condition, { nullable: true })
  deleteCondition(@Args() args: DeleteOneConditionArgs) {
    return this.conditionService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyCondition(@Args() args: DeleteManyConditionArgs) {
    return this.conditionService.deleteMany(args);
  }
}
