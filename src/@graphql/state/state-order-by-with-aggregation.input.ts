import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StateCountOrderByAggregateInput } from './state-count-order-by-aggregate.input';
import { StateMaxOrderByAggregateInput } from './state-max-order-by-aggregate.input';
import { StateMinOrderByAggregateInput } from './state-min-order-by-aggregate.input';

@InputType()
export class StateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => StateCountOrderByAggregateInput, {nullable:true})
    _count?: StateCountOrderByAggregateInput;

    @Field(() => StateMaxOrderByAggregateInput, {nullable:true})
    _max?: StateMaxOrderByAggregateInput;

    @Field(() => StateMinOrderByAggregateInput, {nullable:true})
    _min?: StateMinOrderByAggregateInput;
}
