import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BannerScalarWhereWithAggregatesInput {

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imgUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    link?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sorting?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    viewCount?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    clickCount?: IntNullableWithAggregatesFilter;
}
