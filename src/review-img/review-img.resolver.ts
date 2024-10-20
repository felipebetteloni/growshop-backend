import { ReviewImgService } from "src/review-img/review-img.service";
import {
  ReviewImg,
  FindFirstReviewImgArgs,
  FindUniqueReviewImgArgs,
  FindManyReviewImgArgs,
  ReviewImgGroupBy,
  ReviewImgGroupByArgs,
  AggregateReviewImg,
  ReviewImgAggregateArgs,
  CreateOneReviewImgArgs,
  CreateManyReviewImgArgs,
  UpdateOneReviewImgArgs,
  UpdateManyReviewImgArgs,
  DeleteOneReviewImgArgs,
  DeleteManyReviewImgArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => ReviewImg)
export class ReviewImgResolver {
  constructor(private readonly reviewImgService: ReviewImgService) {}

  @Query(() => ReviewImg, { nullable: false })
  findFirstReviewImg(@Args() args: FindFirstReviewImgArgs) {
    this.reviewImgService.findFirst(args);
  }

  @Query(() => ReviewImg, { nullable: false })
  findUniqueReviewImg(@Args() args: FindUniqueReviewImgArgs) {
    return this.reviewImgService.findUnique(args);
  }

  @Query(() => [ReviewImg], { nullable: false })
  listReviewImgs(@Args() args: FindManyReviewImgArgs) {
    return this.reviewImgService.findMany(args);
  }

  @Query(() => [ReviewImgGroupBy], { nullable: false })
  groupByReviewImg(@Args() args: ReviewImgGroupByArgs) {
    return this.reviewImgService.groupBy(args);
  }

  @Query(() => AggregateReviewImg, { nullable: false })
  aggregateReviewImg(@Args() args: ReviewImgAggregateArgs) {
    return this.reviewImgService.aggregate(args);
  }

  @Mutation(() => ReviewImg, { nullable: true })
  createReviewImg(@Args() args: CreateOneReviewImgArgs) {
    return this.reviewImgService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReviewImg(@Args() args: CreateManyReviewImgArgs) {
    return this.reviewImgService.createMany(args);
  }

  @Mutation(() => ReviewImg, { nullable: true })
  updateReviewImg(@Args() args: UpdateOneReviewImgArgs) {
    return this.reviewImgService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReviewImg(@Args() args: UpdateManyReviewImgArgs) {
    return this.reviewImgService.updateMany(args);
  }

  @Mutation(() => ReviewImg, { nullable: true })
  deleteReviewImg(@Args() args: DeleteOneReviewImgArgs) {
    return this.reviewImgService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReviewImg(@Args() args: DeleteManyReviewImgArgs) {
    return this.reviewImgService.deleteMany(args);
  }
}
