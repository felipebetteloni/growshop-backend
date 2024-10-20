import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReplyCountOrderByAggregateInput } from './reply-count-order-by-aggregate.input';
import { ReplyMaxOrderByAggregateInput } from './reply-max-order-by-aggregate.input';
import { ReplyMinOrderByAggregateInput } from './reply-min-order-by-aggregate.input';

@InputType()
export class ReplyOrderByWithAggregationInput {

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

    @Field(() => ReplyCountOrderByAggregateInput, {nullable:true})
    _count?: ReplyCountOrderByAggregateInput;

    @Field(() => ReplyMaxOrderByAggregateInput, {nullable:true})
    _max?: ReplyMaxOrderByAggregateInput;

    @Field(() => ReplyMinOrderByAggregateInput, {nullable:true})
    _min?: ReplyMinOrderByAggregateInput;
}
