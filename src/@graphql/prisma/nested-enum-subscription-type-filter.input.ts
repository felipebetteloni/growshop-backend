import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionType } from './subscription-type.enum';

@InputType()
export class NestedEnumSubscriptionTypeFilter {

    @Field(() => SubscriptionType, {nullable:true})
    equals?: keyof typeof SubscriptionType;

    @Field(() => [SubscriptionType], {nullable:true})
    in?: Array<keyof typeof SubscriptionType>;

    @Field(() => [SubscriptionType], {nullable:true})
    notIn?: Array<keyof typeof SubscriptionType>;

    @Field(() => NestedEnumSubscriptionTypeFilter, {nullable:true})
    not?: NestedEnumSubscriptionTypeFilter;
}
