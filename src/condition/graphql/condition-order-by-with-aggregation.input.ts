import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConditionCountOrderByAggregateInput } from './condition-count-order-by-aggregate.input';
import { ConditionMaxOrderByAggregateInput } from './condition-max-order-by-aggregate.input';
import { ConditionMinOrderByAggregateInput } from './condition-min-order-by-aggregate.input';

@InputType()
export class ConditionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ConditionCountOrderByAggregateInput, {nullable:true})
    _count?: ConditionCountOrderByAggregateInput;

    @Field(() => ConditionMaxOrderByAggregateInput, {nullable:true})
    _max?: ConditionMaxOrderByAggregateInput;

    @Field(() => ConditionMinOrderByAggregateInput, {nullable:true})
    _min?: ConditionMinOrderByAggregateInput;
}
