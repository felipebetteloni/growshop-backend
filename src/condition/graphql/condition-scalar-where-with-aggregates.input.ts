import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ConditionScalarWhereWithAggregatesInput {

    @Field(() => [ConditionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConditionScalarWhereWithAggregatesInput>;

    @Field(() => [ConditionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConditionScalarWhereWithAggregatesInput>;

    @Field(() => [ConditionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConditionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
