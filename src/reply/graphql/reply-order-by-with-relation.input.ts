import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentOrderByWithRelationInput } from '../comment/comment-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ReplyOrderByRelationAggregateInput } from './reply-order-by-relation-aggregate.input';

@InputType()
export class ReplyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    replyId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    comment?: CommentOrderByWithRelationInput;

    @Field(() => ReplyOrderByWithRelationInput, {nullable:true})
    reply?: ReplyOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: ReplyOrderByRelationAggregateInput;
}
