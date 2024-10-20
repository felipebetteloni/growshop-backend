import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReplyCountAggregate } from './reply-count-aggregate.output';
import { ReplyMinAggregate } from './reply-min-aggregate.output';
import { ReplyMaxAggregate } from './reply-max-aggregate.output';

@ObjectType()
export class AggregateReply {

    @Field(() => ReplyCountAggregate, {nullable:true})
    _count?: ReplyCountAggregate;

    @Field(() => ReplyMinAggregate, {nullable:true})
    _min?: ReplyMinAggregate;

    @Field(() => ReplyMaxAggregate, {nullable:true})
    _max?: ReplyMaxAggregate;
}
