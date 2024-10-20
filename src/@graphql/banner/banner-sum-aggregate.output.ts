import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BannerSumAggregate {

    @Field(() => Int, {nullable:true})
    sorting?: number;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => Int, {nullable:true})
    clickCount?: number;
}
