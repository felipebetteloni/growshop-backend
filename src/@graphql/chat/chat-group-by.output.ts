import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChatCountAggregate } from './chat-count-aggregate.output';
import { ChatMinAggregate } from './chat-min-aggregate.output';
import { ChatMaxAggregate } from './chat-max-aggregate.output';

@ObjectType()
export class ChatGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userFromId!: string;

    @Field(() => String, {nullable:false})
    userToId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => ChatCountAggregate, {nullable:true})
    _count?: ChatCountAggregate;

    @Field(() => ChatMinAggregate, {nullable:true})
    _min?: ChatMinAggregate;

    @Field(() => ChatMaxAggregate, {nullable:true})
    _max?: ChatMaxAggregate;
}
