import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';
import { Review } from '../review/review.model';
import { ChatCount } from './chat-count.output';

@ObjectType()
export class Chat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userFromId!: string;

    @Field(() => String, {nullable:false})
    userToId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => User, {nullable:false})
    userFrom?: User;

    @Field(() => User, {nullable:false})
    userTo?: User;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => Review, {nullable:true})
    review?: Review | null;

    @Field(() => ChatCount, {nullable:false})
    _count?: ChatCount;
}
