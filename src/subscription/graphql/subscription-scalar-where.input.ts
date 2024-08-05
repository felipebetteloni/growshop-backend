import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumSubscriptionTypeFilter } from '../prisma/enum-subscription-type-filter.input';

@InputType()
export class SubscriptionScalarWhereInput {

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    AND?: Array<SubscriptionScalarWhereInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    OR?: Array<SubscriptionScalarWhereInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<SubscriptionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => EnumSubscriptionTypeFilter, {nullable:true})
    type?: EnumSubscriptionTypeFilter;
}
