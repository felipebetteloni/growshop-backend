import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FavoriteCountOrderByAggregateInput } from './favorite-count-order-by-aggregate.input';
import { FavoriteMaxOrderByAggregateInput } from './favorite-max-order-by-aggregate.input';
import { FavoriteMinOrderByAggregateInput } from './favorite-min-order-by-aggregate.input';

@InputType()
export class FavoriteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => FavoriteCountOrderByAggregateInput, {nullable:true})
    _count?: FavoriteCountOrderByAggregateInput;

    @Field(() => FavoriteMaxOrderByAggregateInput, {nullable:true})
    _max?: FavoriteMaxOrderByAggregateInput;

    @Field(() => FavoriteMinOrderByAggregateInput, {nullable:true})
    _min?: FavoriteMinOrderByAggregateInput;
}
