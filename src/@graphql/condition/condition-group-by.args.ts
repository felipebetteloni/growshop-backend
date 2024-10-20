import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';
import { Type } from 'class-transformer';
import { ConditionOrderByWithAggregationInput } from './condition-order-by-with-aggregation.input';
import { ConditionScalarFieldEnum } from './condition-scalar-field.enum';
import { ConditionScalarWhereWithAggregatesInput } from './condition-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConditionCountAggregateInput } from './condition-count-aggregate.input';
import { ConditionMinAggregateInput } from './condition-min-aggregate.input';
import { ConditionMaxAggregateInput } from './condition-max-aggregate.input';

@ArgsType()
export class ConditionGroupByArgs {

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;

    @Field(() => [ConditionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConditionOrderByWithAggregationInput>;

    @Field(() => [ConditionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConditionScalarFieldEnum>;

    @Field(() => ConditionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConditionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConditionCountAggregateInput, {nullable:true})
    _count?: ConditionCountAggregateInput;

    @Field(() => ConditionMinAggregateInput, {nullable:true})
    _min?: ConditionMinAggregateInput;

    @Field(() => ConditionMaxAggregateInput, {nullable:true})
    _max?: ConditionMaxAggregateInput;
}
