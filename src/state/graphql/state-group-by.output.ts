import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StateCountAggregate } from './state-count-aggregate.output';
import { StateMinAggregate } from './state-min-aggregate.output';
import { StateMaxAggregate } from './state-max-aggregate.output';

@ObjectType()
export class StateGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => StateCountAggregate, {nullable:true})
    _count?: StateCountAggregate;

    @Field(() => StateMinAggregate, {nullable:true})
    _min?: StateMinAggregate;

    @Field(() => StateMaxAggregate, {nullable:true})
    _max?: StateMaxAggregate;
}
