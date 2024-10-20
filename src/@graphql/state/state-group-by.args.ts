import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';
import { Type } from 'class-transformer';
import { StateOrderByWithAggregationInput } from './state-order-by-with-aggregation.input';
import { StateScalarFieldEnum } from './state-scalar-field.enum';
import { StateScalarWhereWithAggregatesInput } from './state-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StateCountAggregateInput } from './state-count-aggregate.input';
import { StateMinAggregateInput } from './state-min-aggregate.input';
import { StateMaxAggregateInput } from './state-max-aggregate.input';

@ArgsType()
export class StateGroupByArgs {

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;

    @Field(() => [StateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StateOrderByWithAggregationInput>;

    @Field(() => [StateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StateScalarFieldEnum>;

    @Field(() => StateScalarWhereWithAggregatesInput, {nullable:true})
    having?: StateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StateCountAggregateInput, {nullable:true})
    _count?: StateCountAggregateInput;

    @Field(() => StateMinAggregateInput, {nullable:true})
    _min?: StateMinAggregateInput;

    @Field(() => StateMaxAggregateInput, {nullable:true})
    _max?: StateMaxAggregateInput;
}
