import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class StateScalarWhereWithAggregatesInput {

    @Field(() => [StateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StateScalarWhereWithAggregatesInput>;

    @Field(() => [StateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StateScalarWhereWithAggregatesInput>;

    @Field(() => [StateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StateScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryId?: StringWithAggregatesFilter;
}
