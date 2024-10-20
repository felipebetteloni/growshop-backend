import { SubscriptionService } from "src/subscription/subscription.service";
import {
  Subscription,
  FindFirstSubscriptionArgs,
  FindUniqueSubscriptionArgs,
  FindManySubscriptionArgs,
  SubscriptionGroupBy,
  SubscriptionGroupByArgs,
  AggregateSubscription,
  SubscriptionAggregateArgs,
  CreateOneSubscriptionArgs,
  CreateManySubscriptionArgs,
  UpdateOneSubscriptionArgs,
  UpdateManySubscriptionArgs,
  DeleteOneSubscriptionArgs,
  DeleteManySubscriptionArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Subscription)
export class SubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Query(() => Subscription, { nullable: false })
  findFirstSubscription(@Args() args: FindFirstSubscriptionArgs) {
    this.subscriptionService.findFirst(args);
  }

  @Query(() => Subscription, { nullable: false })
  findUniqueSubscription(@Args() args: FindUniqueSubscriptionArgs) {
    return this.subscriptionService.findUnique(args);
  }

  @Query(() => [Subscription], { nullable: false })
  listSubscriptions(@Args() args: FindManySubscriptionArgs) {
    return this.subscriptionService.findMany(args);
  }

  @Query(() => [SubscriptionGroupBy], { nullable: false })
  groupBySubscription(@Args() args: SubscriptionGroupByArgs) {
    return this.subscriptionService.groupBy(args);
  }

  @Query(() => AggregateSubscription, { nullable: false })
  aggregateSubscription(@Args() args: SubscriptionAggregateArgs) {
    return this.subscriptionService.aggregate(args);
  }

  @Mutation(() => Subscription, { nullable: true })
  createSubscription(@Args() args: CreateOneSubscriptionArgs) {
    return this.subscriptionService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManySubscription(@Args() args: CreateManySubscriptionArgs) {
    return this.subscriptionService.createMany(args);
  }

  @Mutation(() => Subscription, { nullable: true })
  updateSubscription(@Args() args: UpdateOneSubscriptionArgs) {
    return this.subscriptionService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManySubscription(@Args() args: UpdateManySubscriptionArgs) {
    return this.subscriptionService.updateMany(args);
  }

  @Mutation(() => Subscription, { nullable: true })
  deleteSubscription(@Args() args: DeleteOneSubscriptionArgs) {
    return this.subscriptionService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManySubscription(@Args() args: DeleteManySubscriptionArgs) {
    return this.subscriptionService.deleteMany(args);
  }
}
