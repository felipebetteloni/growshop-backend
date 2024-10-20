import { NeighbourhoodService } from "src/neighbourhood/neighbourhood.service";
import {
  Neighbourhood,
  FindFirstNeighbourhoodArgs,
  FindUniqueNeighbourhoodArgs,
  FindManyNeighbourhoodArgs,
  NeighbourhoodGroupBy,
  NeighbourhoodGroupByArgs,
  AggregateNeighbourhood,
  NeighbourhoodAggregateArgs,
  CreateOneNeighbourhoodArgs,
  CreateManyNeighbourhoodArgs,
  UpdateOneNeighbourhoodArgs,
  UpdateManyNeighbourhoodArgs,
  DeleteOneNeighbourhoodArgs,
  DeleteManyNeighbourhoodArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Neighbourhood)
export class NeighbourhoodResolver {
  constructor(private readonly neighbourhoodService: NeighbourhoodService) {}

  @Query(() => Neighbourhood, { nullable: false })
  findFirstNeighbourhood(@Args() args: FindFirstNeighbourhoodArgs) {
    this.neighbourhoodService.findFirst(args);
  }

  @Query(() => Neighbourhood, { nullable: false })
  findUniqueNeighbourhood(@Args() args: FindUniqueNeighbourhoodArgs) {
    return this.neighbourhoodService.findUnique(args);
  }

  @Query(() => [Neighbourhood], { nullable: false })
  listNeighbourhoods(@Args() args: FindManyNeighbourhoodArgs) {
    return this.neighbourhoodService.findMany(args);
  }

  @Query(() => [NeighbourhoodGroupBy], { nullable: false })
  groupByNeighbourhood(@Args() args: NeighbourhoodGroupByArgs) {
    return this.neighbourhoodService.groupBy(args);
  }

  @Query(() => AggregateNeighbourhood, { nullable: false })
  aggregateNeighbourhood(@Args() args: NeighbourhoodAggregateArgs) {
    return this.neighbourhoodService.aggregate(args);
  }

  @Mutation(() => Neighbourhood, { nullable: true })
  createNeighbourhood(@Args() args: CreateOneNeighbourhoodArgs) {
    return this.neighbourhoodService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyNeighbourhood(@Args() args: CreateManyNeighbourhoodArgs) {
    return this.neighbourhoodService.createMany(args);
  }

  @Mutation(() => Neighbourhood, { nullable: true })
  updateNeighbourhood(@Args() args: UpdateOneNeighbourhoodArgs) {
    return this.neighbourhoodService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyNeighbourhood(@Args() args: UpdateManyNeighbourhoodArgs) {
    return this.neighbourhoodService.updateMany(args);
  }

  @Mutation(() => Neighbourhood, { nullable: true })
  deleteNeighbourhood(@Args() args: DeleteOneNeighbourhoodArgs) {
    return this.neighbourhoodService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyNeighbourhood(@Args() args: DeleteManyNeighbourhoodArgs) {
    return this.neighbourhoodService.deleteMany(args);
  }
}
