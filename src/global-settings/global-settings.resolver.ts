import { GlobalSettingsService } from "src/global-settings/global-settings.service";
import {
  GlobalSettings,
  FindFirstGlobalSettingsArgs,
  FindUniqueGlobalSettingsArgs,
  FindManyGlobalSettingsArgs,
  GlobalSettingsGroupBy,
  GlobalSettingsGroupByArgs,
  AggregateGlobalSettings,
  GlobalSettingsAggregateArgs,
  CreateOneGlobalSettingsArgs,
  CreateManyGlobalSettingsArgs,
  UpdateOneGlobalSettingsArgs,
  UpdateManyGlobalSettingsArgs,
  DeleteOneGlobalSettingsArgs,
  DeleteManyGlobalSettingsArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => GlobalSettings)
export class GlobalSettingsResolver {
  constructor(private readonly globalSettingsService: GlobalSettingsService) {}

  @Query(() => GlobalSettings, { nullable: false })
  findFirstGlobalSettings(@Args() args: FindFirstGlobalSettingsArgs) {
    this.globalSettingsService.findFirst(args);
  }

  @Query(() => GlobalSettings, { nullable: false })
  findUniqueGlobalSettings(@Args() args: FindUniqueGlobalSettingsArgs) {
    return this.globalSettingsService.findUnique(args);
  }

  @Query(() => [GlobalSettings], { nullable: false })
  listGlobalSettingss(@Args() args: FindManyGlobalSettingsArgs) {
    return this.globalSettingsService.findMany(args);
  }

  @Query(() => [GlobalSettingsGroupBy], { nullable: false })
  groupByGlobalSettings(@Args() args: GlobalSettingsGroupByArgs) {
    return this.globalSettingsService.groupBy(args);
  }

  @Query(() => AggregateGlobalSettings, { nullable: false })
  aggregateGlobalSettings(@Args() args: GlobalSettingsAggregateArgs) {
    return this.globalSettingsService.aggregate(args);
  }

  @Mutation(() => GlobalSettings, { nullable: true })
  createGlobalSettings(@Args() args: CreateOneGlobalSettingsArgs) {
    return this.globalSettingsService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyGlobalSettings(@Args() args: CreateManyGlobalSettingsArgs) {
    return this.globalSettingsService.createMany(args);
  }

  @Mutation(() => GlobalSettings, { nullable: true })
  updateGlobalSettings(@Args() args: UpdateOneGlobalSettingsArgs) {
    return this.globalSettingsService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyGlobalSettings(@Args() args: UpdateManyGlobalSettingsArgs) {
    return this.globalSettingsService.updateMany(args);
  }

  @Mutation(() => GlobalSettings, { nullable: true })
  deleteGlobalSettings(@Args() args: DeleteOneGlobalSettingsArgs) {
    return this.globalSettingsService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyGlobalSettings(@Args() args: DeleteManyGlobalSettingsArgs) {
    return this.globalSettingsService.deleteMany(args);
  }
}
