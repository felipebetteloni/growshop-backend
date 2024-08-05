import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class SubCategoryScalarWhereWithAggregatesInput {

    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;
}
