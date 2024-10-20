import { CountryService } from "src/country/country.service";
import {
  Country,
  FindFirstCountryArgs,
  FindUniqueCountryArgs,
  FindManyCountryArgs,
  CountryGroupBy,
  CountryGroupByArgs,
  AggregateCountry,
  CountryAggregateArgs,
  CreateOneCountryArgs,
  CreateManyCountryArgs,
  UpdateOneCountryArgs,
  UpdateManyCountryArgs,
  DeleteOneCountryArgs,
  DeleteManyCountryArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => Country, { nullable: false })
  findFirstCountry(@Args() args: FindFirstCountryArgs) {
    this.countryService.findFirst(args);
  }

  @Query(() => Country, { nullable: false })
  findUniqueCountry(@Args() args: FindUniqueCountryArgs) {
    return this.countryService.findUnique(args);
  }

  @Query(() => [Country], { nullable: false })
  listCountrys(@Args() args: FindManyCountryArgs) {
    return this.countryService.findMany(args);
  }

  @Query(() => [CountryGroupBy], { nullable: false })
  groupByCountry(@Args() args: CountryGroupByArgs) {
    return this.countryService.groupBy(args);
  }

  @Query(() => AggregateCountry, { nullable: false })
  aggregateCountry(@Args() args: CountryAggregateArgs) {
    return this.countryService.aggregate(args);
  }

  @Mutation(() => Country, { nullable: true })
  createCountry(@Args() args: CreateOneCountryArgs) {
    return this.countryService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyCountry(@Args() args: CreateManyCountryArgs) {
    return this.countryService.createMany(args);
  }

  @Mutation(() => Country, { nullable: true })
  updateCountry(@Args() args: UpdateOneCountryArgs) {
    return this.countryService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyCountry(@Args() args: UpdateManyCountryArgs) {
    return this.countryService.updateMany(args);
  }

  @Mutation(() => Country, { nullable: true })
  deleteCountry(@Args() args: DeleteOneCountryArgs) {
    return this.countryService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyCountry(@Args() args: DeleteManyCountryArgs) {
    return this.countryService.deleteMany(args);
  }
}
