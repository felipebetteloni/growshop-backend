import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewCountOrderByAggregateInput } from './review-count-order-by-aggregate.input';
import { ReviewMaxOrderByAggregateInput } from './review-max-order-by-aggregate.input';
import { ReviewMinOrderByAggregateInput } from './review-min-order-by-aggregate.input';

@InputType()
export class ReviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => ReviewCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCountOrderByAggregateInput;

    @Field(() => ReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewMaxOrderByAggregateInput;

    @Field(() => ReviewMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewMinOrderByAggregateInput;
}
