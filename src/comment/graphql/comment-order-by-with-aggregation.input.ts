import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: CommentCountOrderByAggregateInput;

    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentMaxOrderByAggregateInput;

    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: CommentMinOrderByAggregateInput;
}
