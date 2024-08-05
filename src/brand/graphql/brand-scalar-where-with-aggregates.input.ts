import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class BrandScalarWhereWithAggregatesInput {

    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BrandScalarWhereWithAggregatesInput>;

    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BrandScalarWhereWithAggregatesInput>;

    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BrandScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
