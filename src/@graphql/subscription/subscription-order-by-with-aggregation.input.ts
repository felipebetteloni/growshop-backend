import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubscriptionCountOrderByAggregateInput } from './subscription-count-order-by-aggregate.input';
import { SubscriptionMaxOrderByAggregateInput } from './subscription-max-order-by-aggregate.input';
import { SubscriptionMinOrderByAggregateInput } from './subscription-min-order-by-aggregate.input';

@InputType()
export class SubscriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    endAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SubscriptionCountOrderByAggregateInput, {nullable:true})
    _count?: SubscriptionCountOrderByAggregateInput;

    @Field(() => SubscriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: SubscriptionMaxOrderByAggregateInput;

    @Field(() => SubscriptionMinOrderByAggregateInput, {nullable:true})
    _min?: SubscriptionMinOrderByAggregateInput;
}
