import { ChatService } from "src/chat/chat.service";
import {
  Chat,
  FindFirstChatArgs,
  FindUniqueChatArgs,
  FindManyChatArgs,
  ChatGroupBy,
  ChatGroupByArgs,
  AggregateChat,
  ChatAggregateArgs,
  CreateOneChatArgs,
  CreateManyChatArgs,
  UpdateOneChatArgs,
  UpdateManyChatArgs,
  DeleteOneChatArgs,
  DeleteManyChatArgs,
} from 'src/@graphql';
import { AffectedRows } from "src/common/prisma/affected-rows.output";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

@Resolver(() => Chat)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Query(() => Chat, { nullable: false })
  findFirstChat(@Args() args: FindFirstChatArgs) {
    this.chatService.findFirst(args);
  }

  @Query(() => Chat, { nullable: false })
  findUniqueChat(@Args() args: FindUniqueChatArgs) {
    return this.chatService.findUnique(args);
  }

  @Query(() => [Chat], { nullable: false })
  listChats(@Args() args: FindManyChatArgs) {
    return this.chatService.findMany(args);
  }

  @Query(() => [ChatGroupBy], { nullable: false })
  groupByChat(@Args() args: ChatGroupByArgs) {
    return this.chatService.groupBy(args);
  }

  @Query(() => AggregateChat, { nullable: false })
  aggregateChat(@Args() args: ChatAggregateArgs) {
    return this.chatService.aggregate(args);
  }

  @Mutation(() => Chat, { nullable: true })
  createChat(@Args() args: CreateOneChatArgs) {
    return this.chatService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyChat(@Args() args: CreateManyChatArgs) {
    return this.chatService.createMany(args);
  }

  @Mutation(() => Chat, { nullable: true })
  updateChat(@Args() args: UpdateOneChatArgs) {
    return this.chatService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyChat(@Args() args: UpdateManyChatArgs) {
    return this.chatService.updateMany(args);
  }

  @Mutation(() => Chat, { nullable: true })
  deleteChat(@Args() args: DeleteOneChatArgs) {
    return this.chatService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyChat(@Args() args: DeleteManyChatArgs) {
    return this.chatService.deleteMany(args);
  }
}
