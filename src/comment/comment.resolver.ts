import { CommentService } from "src/comment/comment.service";
import {
  Comment,
  FindFirstCommentArgs,
  FindUniqueCommentArgs,
  FindManyCommentArgs,
  CommentGroupBy,
  CommentGroupByArgs,
  AggregateComment,
  CommentAggregateArgs,
  CreateOneCommentArgs,
  CreateManyCommentArgs,
  UpdateOneCommentArgs,
  UpdateManyCommentArgs,
  DeleteOneCommentArgs,
  DeleteManyCommentArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => Comment, { nullable: false })
  findFirstComment(@Args() args: FindFirstCommentArgs) {
    this.commentService.findFirst(args);
  }

  @Query(() => Comment, { nullable: false })
  findUniqueComment(@Args() args: FindUniqueCommentArgs) {
    return this.commentService.findUnique(args);
  }

  @Query(() => [Comment], { nullable: false })
  listComments(@Args() args: FindManyCommentArgs) {
    return this.commentService.findMany(args);
  }

  @Query(() => [CommentGroupBy], { nullable: false })
  groupByComment(@Args() args: CommentGroupByArgs) {
    return this.commentService.groupBy(args);
  }

  @Query(() => AggregateComment, { nullable: false })
  aggregateComment(@Args() args: CommentAggregateArgs) {
    return this.commentService.aggregate(args);
  }

  @Mutation(() => Comment, { nullable: true })
  createComment(@Args() args: CreateOneCommentArgs) {
    return this.commentService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyComment(@Args() args: CreateManyCommentArgs) {
    return this.commentService.createMany(args);
  }

  @Mutation(() => Comment, { nullable: true })
  updateComment(@Args() args: UpdateOneCommentArgs) {
    return this.commentService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyComment(@Args() args: UpdateManyCommentArgs) {
    return this.commentService.updateMany(args);
  }

  @Mutation(() => Comment, { nullable: true })
  deleteComment(@Args() args: DeleteOneCommentArgs) {
    return this.commentService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyComment(@Args() args: DeleteManyCommentArgs) {
    return this.commentService.deleteMany(args);
  }
}
