import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionType } from './subscription-type.enum';
import { NestedEnumSubscriptionTypeWithAggregatesFilter } from './nested-enum-subscription-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSubscriptionTypeFilter } from './nested-enum-subscription-type-filter.input';

@InputType()
export class EnumSubscriptionTypeWithAggregatesFilter {

    @Field(() => SubscriptionType, {nullable:true})
    equals?: keyof typeof SubscriptionType;

    @Field(() => [SubscriptionType], {nullable:true})
    in?: Array<keyof typeof SubscriptionType>;

    @Field(() => [SubscriptionType], {nullable:true})
    notIn?: Array<keyof typeof SubscriptionType>;

    @Field(() => NestedEnumSubscriptionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSubscriptionTypeFilter, {nullable:true})
    _min?: NestedEnumSubscriptionTypeFilter;

    @Field(() => NestedEnumSubscriptionTypeFilter, {nullable:true})
    _max?: NestedEnumSubscriptionTypeFilter;
}
