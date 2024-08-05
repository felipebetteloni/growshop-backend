import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { CityOrderByWithAggregationInput } from './city-order-by-with-aggregation.input';
import { CityScalarFieldEnum } from './city-scalar-field.enum';
import { CityScalarWhereWithAggregatesInput } from './city-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CityCountAggregateInput } from './city-count-aggregate.input';
import { CityMinAggregateInput } from './city-min-aggregate.input';
import { CityMaxAggregateInput } from './city-max-aggregate.input';

@ArgsType()
export class CityGroupByArgs {

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;

    @Field(() => [CityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CityOrderByWithAggregationInput>;

    @Field(() => [CityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CityScalarFieldEnum>;

    @Field(() => CityScalarWhereWithAggregatesInput, {nullable:true})
    having?: CityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CityCountAggregateInput, {nullable:true})
    _count?: CityCountAggregateInput;

    @Field(() => CityMinAggregateInput, {nullable:true})
    _min?: CityMinAggregateInput;

    @Field(() => CityMaxAggregateInput, {nullable:true})
    _max?: CityMaxAggregateInput;
}
