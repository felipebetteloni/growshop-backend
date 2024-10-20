import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NeighbourhoodCountOrderByAggregateInput } from './neighbourhood-count-order-by-aggregate.input';
import { NeighbourhoodMaxOrderByAggregateInput } from './neighbourhood-max-order-by-aggregate.input';
import { NeighbourhoodMinOrderByAggregateInput } from './neighbourhood-min-order-by-aggregate.input';

@InputType()
export class NeighbourhoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => NeighbourhoodCountOrderByAggregateInput, {nullable:true})
    _count?: NeighbourhoodCountOrderByAggregateInput;

    @Field(() => NeighbourhoodMaxOrderByAggregateInput, {nullable:true})
    _max?: NeighbourhoodMaxOrderByAggregateInput;

    @Field(() => NeighbourhoodMinOrderByAggregateInput, {nullable:true})
    _min?: NeighbourhoodMinOrderByAggregateInput;
}
