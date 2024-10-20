import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    products?: number;

    @Field(() => Int, {nullable:false})
    favorites?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    replies?: number;

    @Field(() => Int, {nullable:false})
    messages?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    reports?: number;

    @Field(() => Int, {nullable:false})
    chatsFrom?: number;

    @Field(() => Int, {nullable:false})
    chatsTo?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;

    @Field(() => Int, {nullable:false})
    shares?: number;

    @Field(() => Int, {nullable:false})
    subscriptions?: number;
}
