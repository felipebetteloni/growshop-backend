import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NeighbourhoodCountAggregate } from './neighbourhood-count-aggregate.output';
import { NeighbourhoodMinAggregate } from './neighbourhood-min-aggregate.output';
import { NeighbourhoodMaxAggregate } from './neighbourhood-max-aggregate.output';

@ObjectType()
export class AggregateNeighbourhood {

    @Field(() => NeighbourhoodCountAggregate, {nullable:true})
    _count?: NeighbourhoodCountAggregate;

    @Field(() => NeighbourhoodMinAggregate, {nullable:true})
    _min?: NeighbourhoodMinAggregate;

    @Field(() => NeighbourhoodMaxAggregate, {nullable:true})
    _max?: NeighbourhoodMaxAggregate;
}
