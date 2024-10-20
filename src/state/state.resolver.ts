import { StateService } from "src/state/state.service";
import {
  State,
  FindFirstStateArgs,
  FindUniqueStateArgs,
  FindManyStateArgs,
  StateGroupBy,
  StateGroupByArgs,
  AggregateState,
  StateAggregateArgs,
  CreateOneStateArgs,
  CreateManyStateArgs,
  UpdateOneStateArgs,
  UpdateManyStateArgs,
  DeleteOneStateArgs,
  DeleteManyStateArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Query(() => State, { nullable: false })
  findFirstState(@Args() args: FindFirstStateArgs) {
    this.stateService.findFirst(args);
  }

  @Query(() => State, { nullable: false })
  findUniqueState(@Args() args: FindUniqueStateArgs) {
    return this.stateService.findUnique(args);
  }

  @Query(() => [State], { nullable: false })
  listStates(@Args() args: FindManyStateArgs) {
    return this.stateService.findMany(args);
  }

  @Query(() => [StateGroupBy], { nullable: false })
  groupByState(@Args() args: StateGroupByArgs) {
    return this.stateService.groupBy(args);
  }

  @Query(() => AggregateState, { nullable: false })
  aggregateState(@Args() args: StateAggregateArgs) {
    return this.stateService.aggregate(args);
  }

  @Mutation(() => State, { nullable: true })
  createState(@Args() args: CreateOneStateArgs) {
    return this.stateService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyState(@Args() args: CreateManyStateArgs) {
    return this.stateService.createMany(args);
  }

  @Mutation(() => State, { nullable: true })
  updateState(@Args() args: UpdateOneStateArgs) {
    return this.stateService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyState(@Args() args: UpdateManyStateArgs) {
    return this.stateService.updateMany(args);
  }

  @Mutation(() => State, { nullable: true })
  deleteState(@Args() args: DeleteOneStateArgs) {
    return this.stateService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyState(@Args() args: DeleteManyStateArgs) {
    return this.stateService.deleteMany(args);
  }
}
