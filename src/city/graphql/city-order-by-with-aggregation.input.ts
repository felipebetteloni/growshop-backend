import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityCountOrderByAggregateInput } from './city-count-order-by-aggregate.input';
import { CityMaxOrderByAggregateInput } from './city-max-order-by-aggregate.input';
import { CityMinOrderByAggregateInput } from './city-min-order-by-aggregate.input';

@InputType()
export class CityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateId?: keyof typeof SortOrder;

    @Field(() => CityCountOrderByAggregateInput, {nullable:true})
    _count?: CityCountOrderByAggregateInput;

    @Field(() => CityMaxOrderByAggregateInput, {nullable:true})
    _max?: CityMaxOrderByAggregateInput;

    @Field(() => CityMinOrderByAggregateInput, {nullable:true})
    _min?: CityMinOrderByAggregateInput;
}
