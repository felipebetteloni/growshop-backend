import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReplyCountAggregate } from './reply-count-aggregate.output';
import { ReplyMinAggregate } from './reply-min-aggregate.output';
import { ReplyMaxAggregate } from './reply-max-aggregate.output';

@ObjectType()
export class ReplyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:true})
    replyId?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => ReplyCountAggregate, {nullable:true})
    _count?: ReplyCountAggregate;

    @Field(() => ReplyMinAggregate, {nullable:true})
    _min?: ReplyMinAggregate;

    @Field(() => ReplyMaxAggregate, {nullable:true})
    _max?: ReplyMaxAggregate;
}
