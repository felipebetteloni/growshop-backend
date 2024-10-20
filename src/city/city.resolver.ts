import { CityService } from "src/city/city.service";
import {
  City,
  FindFirstCityArgs,
  FindUniqueCityArgs,
  FindManyCityArgs,
  CityGroupBy,
  CityGroupByArgs,
  AggregateCity,
  CityAggregateArgs,
  CreateOneCityArgs,
  CreateManyCityArgs,
  UpdateOneCityArgs,
  UpdateManyCityArgs,
  DeleteOneCityArgs,
  DeleteManyCityArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query(() => City, { nullable: false })
  findFirstCity(@Args() args: FindFirstCityArgs) {
    this.cityService.findFirst(args);
  }

  @Query(() => City, { nullable: false })
  findUniqueCity(@Args() args: FindUniqueCityArgs) {
    return this.cityService.findUnique(args);
  }

  @Query(() => [City], { nullable: false })
  listCitys(@Args() args: FindManyCityArgs) {
    return this.cityService.findMany(args);
  }

  @Query(() => [CityGroupBy], { nullable: false })
  groupByCity(@Args() args: CityGroupByArgs) {
    return this.cityService.groupBy(args);
  }

  @Query(() => AggregateCity, { nullable: false })
  aggregateCity(@Args() args: CityAggregateArgs) {
    return this.cityService.aggregate(args);
  }

  @Mutation(() => City, { nullable: true })
  createCity(@Args() args: CreateOneCityArgs) {
    return this.cityService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyCity(@Args() args: CreateManyCityArgs) {
    return this.cityService.createMany(args);
  }

  @Mutation(() => City, { nullable: true })
  updateCity(@Args() args: UpdateOneCityArgs) {
    return this.cityService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyCity(@Args() args: UpdateManyCityArgs) {
    return this.cityService.updateMany(args);
  }

  @Mutation(() => City, { nullable: true })
  deleteCity(@Args() args: DeleteOneCityArgs) {
    return this.cityService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyCity(@Args() args: DeleteManyCityArgs) {
    return this.cityService.deleteMany(args);
  }
}
