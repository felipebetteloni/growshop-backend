import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumSubscriptionTypeFilter } from '../prisma/enum-subscription-type-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class SubscriptionWhereInput {

    @Field(() => [SubscriptionWhereInput], {nullable:true})
    AND?: Array<SubscriptionWhereInput>;

    @Field(() => [SubscriptionWhereInput], {nullable:true})
    OR?: Array<SubscriptionWhereInput>;

    @Field(() => [SubscriptionWhereInput], {nullable:true})
    NOT?: Array<SubscriptionWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
