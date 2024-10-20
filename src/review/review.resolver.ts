import { ReviewService } from "src/review/review.service";
import {
  Review,
  FindFirstReviewArgs,
  FindUniqueReviewArgs,
  FindManyReviewArgs,
  ReviewGroupBy,
  ReviewGroupByArgs,
  AggregateReview,
  ReviewAggregateArgs,
  CreateOneReviewArgs,
  CreateManyReviewArgs,
  UpdateOneReviewArgs,
  UpdateManyReviewArgs,
  DeleteOneReviewArgs,
  DeleteManyReviewArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => Review, { nullable: false })
  findFirstReview(@Args() args: FindFirstReviewArgs) {
    this.reviewService.findFirst(args);
  }

  @Query(() => Review, { nullable: false })
  findUniqueReview(@Args() args: FindUniqueReviewArgs) {
    return this.reviewService.findUnique(args);
  }

  @Query(() => [Review], { nullable: false })
  listReviews(@Args() args: FindManyReviewArgs) {
    return this.reviewService.findMany(args);
  }

  @Query(() => [ReviewGroupBy], { nullable: false })
  groupByReview(@Args() args: ReviewGroupByArgs) {
    return this.reviewService.groupBy(args);
  }

  @Query(() => AggregateReview, { nullable: false })
  aggregateReview(@Args() args: ReviewAggregateArgs) {
    return this.reviewService.aggregate(args);
  }

  @Mutation(() => Review, { nullable: true })
  createReview(@Args() args: CreateOneReviewArgs) {
    return this.reviewService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReview(@Args() args: CreateManyReviewArgs) {
    return this.reviewService.createMany(args);
  }

  @Mutation(() => Review, { nullable: true })
  updateReview(@Args() args: UpdateOneReviewArgs) {
    return this.reviewService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReview(@Args() args: UpdateManyReviewArgs) {
    return this.reviewService.updateMany(args);
  }

  @Mutation(() => Review, { nullable: true })
  deleteReview(@Args() args: DeleteOneReviewArgs) {
    return this.reviewService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReview(@Args() args: DeleteManyReviewArgs) {
    return this.reviewService.deleteMany(args);
  }
}
