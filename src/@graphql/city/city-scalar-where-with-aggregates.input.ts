import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CityScalarWhereWithAggregatesInput {

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stateId?: StringWithAggregatesFilter;
}
