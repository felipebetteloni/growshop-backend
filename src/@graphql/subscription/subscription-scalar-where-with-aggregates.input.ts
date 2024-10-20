import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumSubscriptionTypeWithAggregatesFilter } from '../prisma/enum-subscription-type-with-aggregates-filter.input';

@InputType()
export class SubscriptionScalarWhereWithAggregatesInput {

    @Field(() => [SubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [SubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [SubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => EnumSubscriptionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumSubscriptionTypeWithAggregatesFilter;
}
