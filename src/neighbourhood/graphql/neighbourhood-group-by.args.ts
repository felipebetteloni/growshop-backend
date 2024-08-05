import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';
import { Type } from 'class-transformer';
import { NeighbourhoodOrderByWithAggregationInput } from './neighbourhood-order-by-with-aggregation.input';
import { NeighbourhoodScalarFieldEnum } from './neighbourhood-scalar-field.enum';
import { NeighbourhoodScalarWhereWithAggregatesInput } from './neighbourhood-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NeighbourhoodCountAggregateInput } from './neighbourhood-count-aggregate.input';
import { NeighbourhoodMinAggregateInput } from './neighbourhood-min-aggregate.input';
import { NeighbourhoodMaxAggregateInput } from './neighbourhood-max-aggregate.input';

@ArgsType()
export class NeighbourhoodGroupByArgs {

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    where?: NeighbourhoodWhereInput;

    @Field(() => [NeighbourhoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NeighbourhoodOrderByWithAggregationInput>;

    @Field(() => [NeighbourhoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NeighbourhoodScalarFieldEnum>;

    @Field(() => NeighbourhoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: NeighbourhoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NeighbourhoodCountAggregateInput, {nullable:true})
    _count?: NeighbourhoodCountAggregateInput;

    @Field(() => NeighbourhoodMinAggregateInput, {nullable:true})
    _min?: NeighbourhoodMinAggregateInput;

    @Field(() => NeighbourhoodMaxAggregateInput, {nullable:true})
    _max?: NeighbourhoodMaxAggregateInput;
}
