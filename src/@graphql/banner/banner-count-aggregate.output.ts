import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BannerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    imgUrl!: number;

    @Field(() => Int, {nullable:false})
    link!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    sorting!: number;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => Int, {nullable:false})
    clickCount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
