import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BannerMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Int, {nullable:true})
    sorting?: number;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => Int, {nullable:true})
    clickCount?: number;
}
