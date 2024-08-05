import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class GlobalSettingsScalarWhereWithAggregatesInput {

    @Field(() => [GlobalSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GlobalSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [GlobalSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GlobalSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [GlobalSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GlobalSettingsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;
}
