import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NeighbourhoodScalarWhereWithAggregatesInput {

    @Field(() => [NeighbourhoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NeighbourhoodScalarWhereWithAggregatesInput>;

    @Field(() => [NeighbourhoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NeighbourhoodScalarWhereWithAggregatesInput>;

    @Field(() => [NeighbourhoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NeighbourhoodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cityId?: StringWithAggregatesFilter;
}
