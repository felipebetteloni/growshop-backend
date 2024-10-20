import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShareCountOrderByAggregateInput } from './share-count-order-by-aggregate.input';
import { ShareMaxOrderByAggregateInput } from './share-max-order-by-aggregate.input';
import { ShareMinOrderByAggregateInput } from './share-min-order-by-aggregate.input';

@InputType()
export class ShareOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => ShareCountOrderByAggregateInput, {nullable:true})
    _count?: ShareCountOrderByAggregateInput;

    @Field(() => ShareMaxOrderByAggregateInput, {nullable:true})
    _max?: ShareMaxOrderByAggregateInput;

    @Field(() => ShareMinOrderByAggregateInput, {nullable:true})
    _min?: ShareMinOrderByAggregateInput;
}
