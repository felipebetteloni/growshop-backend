import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';
import { Type } from 'class-transformer';
import { ConditionOrderByWithRelationInput } from './condition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConditionCountAggregateInput } from './condition-count-aggregate.input';
import { ConditionMinAggregateInput } from './condition-min-aggregate.input';
import { ConditionMaxAggregateInput } from './condition-max-aggregate.input';

@ArgsType()
export class ConditionAggregateArgs {

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;

    @Field(() => [ConditionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConditionOrderByWithRelationInput>;

    @Field(() => ConditionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;

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
