import { ReplyService } from "src/reply/reply.service";
import {
  Reply,
  FindFirstReplyArgs,
  FindUniqueReplyArgs,
  FindManyReplyArgs,
  ReplyGroupBy,
  ReplyGroupByArgs,
  AggregateReply,
  ReplyAggregateArgs,
  CreateOneReplyArgs,
  CreateManyReplyArgs,
  UpdateOneReplyArgs,
  UpdateManyReplyArgs,
  DeleteOneReplyArgs,
  DeleteManyReplyArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Reply)
export class ReplyResolver {
  constructor(private readonly replyService: ReplyService) {}

  @Query(() => Reply, { nullable: false })
  findFirstReply(@Args() args: FindFirstReplyArgs) {
    this.replyService.findFirst(args);
  }

  @Query(() => Reply, { nullable: false })
  findUniqueReply(@Args() args: FindUniqueReplyArgs) {
    return this.replyService.findUnique(args);
  }

  @Query(() => [Reply], { nullable: false })
  listReplys(@Args() args: FindManyReplyArgs) {
    return this.replyService.findMany(args);
  }

  @Query(() => [ReplyGroupBy], { nullable: false })
  groupByReply(@Args() args: ReplyGroupByArgs) {
    return this.replyService.groupBy(args);
  }

  @Query(() => AggregateReply, { nullable: false })
  aggregateReply(@Args() args: ReplyAggregateArgs) {
    return this.replyService.aggregate(args);
  }

  @Mutation(() => Reply, { nullable: true })
  createReply(@Args() args: CreateOneReplyArgs) {
    return this.replyService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyReply(@Args() args: CreateManyReplyArgs) {
    return this.replyService.createMany(args);
  }

  @Mutation(() => Reply, { nullable: true })
  updateReply(@Args() args: UpdateOneReplyArgs) {
    return this.replyService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyReply(@Args() args: UpdateManyReplyArgs) {
    return this.replyService.updateMany(args);
  }

  @Mutation(() => Reply, { nullable: true })
  deleteReply(@Args() args: DeleteOneReplyArgs) {
    return this.replyService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyReply(@Args() args: DeleteManyReplyArgs) {
    return this.replyService.deleteMany(args);
  }
}
