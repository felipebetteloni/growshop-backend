import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GlobalSettingsCountOrderByAggregateInput } from './global-settings-count-order-by-aggregate.input';
import { GlobalSettingsMaxOrderByAggregateInput } from './global-settings-max-order-by-aggregate.input';
import { GlobalSettingsMinOrderByAggregateInput } from './global-settings-min-order-by-aggregate.input';

@InputType()
export class GlobalSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => GlobalSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: GlobalSettingsCountOrderByAggregateInput;

    @Field(() => GlobalSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: GlobalSettingsMaxOrderByAggregateInput;

    @Field(() => GlobalSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: GlobalSettingsMinOrderByAggregateInput;
}
