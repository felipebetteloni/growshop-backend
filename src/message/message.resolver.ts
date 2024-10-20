import { MessageService } from "src/message/message.service";
import {
  Message,
  FindFirstMessageArgs,
  FindUniqueMessageArgs,
  FindManyMessageArgs,
  MessageGroupBy,
  MessageGroupByArgs,
  AggregateMessage,
  MessageAggregateArgs,
  CreateOneMessageArgs,
  CreateManyMessageArgs,
  UpdateOneMessageArgs,
  UpdateManyMessageArgs,
  DeleteOneMessageArgs,
  DeleteManyMessageArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => Message, { nullable: false })
  findFirstMessage(@Args() args: FindFirstMessageArgs) {
    this.messageService.findFirst(args);
  }

  @Query(() => Message, { nullable: false })
  findUniqueMessage(@Args() args: FindUniqueMessageArgs) {
    return this.messageService.findUnique(args);
  }

  @Query(() => [Message], { nullable: false })
  listMessages(@Args() args: FindManyMessageArgs) {
    return this.messageService.findMany(args);
  }

  @Query(() => [MessageGroupBy], { nullable: false })
  groupByMessage(@Args() args: MessageGroupByArgs) {
    return this.messageService.groupBy(args);
  }

  @Query(() => AggregateMessage, { nullable: false })
  aggregateMessage(@Args() args: MessageAggregateArgs) {
    return this.messageService.aggregate(args);
  }

  @Mutation(() => Message, { nullable: true })
  createMessage(@Args() args: CreateOneMessageArgs) {
    return this.messageService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyMessage(@Args() args: CreateManyMessageArgs) {
    return this.messageService.createMany(args);
  }

  @Mutation(() => Message, { nullable: true })
  updateMessage(@Args() args: UpdateOneMessageArgs) {
    return this.messageService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyMessage(@Args() args: UpdateManyMessageArgs) {
    return this.messageService.updateMany(args);
  }

  @Mutation(() => Message, { nullable: true })
  deleteMessage(@Args() args: DeleteOneMessageArgs) {
    return this.messageService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyMessage(@Args() args: DeleteManyMessageArgs) {
    return this.messageService.deleteMany(args);
  }
}
