import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConditionCountAggregate } from './condition-count-aggregate.output';
import { ConditionMinAggregate } from './condition-min-aggregate.output';
import { ConditionMaxAggregate } from './condition-max-aggregate.output';

@ObjectType()
export class ConditionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ConditionCountAggregate, {nullable:true})
    _count?: ConditionCountAggregate;

    @Field(() => ConditionMinAggregate, {nullable:true})
    _min?: ConditionMinAggregate;

    @Field(() => ConditionMaxAggregate, {nullable:true})
    _max?: ConditionMaxAggregate;
}
