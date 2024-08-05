import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BannerCountAggregate } from './banner-count-aggregate.output';
import { BannerAvgAggregate } from './banner-avg-aggregate.output';
import { BannerSumAggregate } from './banner-sum-aggregate.output';
import { BannerMinAggregate } from './banner-min-aggregate.output';
import { BannerMaxAggregate } from './banner-max-aggregate.output';

@ObjectType()
export class BannerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    sorting!: number;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => Int, {nullable:true})
    clickCount?: number;

    @Field(() => BannerCountAggregate, {nullable:true})
    _count?: BannerCountAggregate;

    @Field(() => BannerAvgAggregate, {nullable:true})
    _avg?: BannerAvgAggregate;

    @Field(() => BannerSumAggregate, {nullable:true})
    _sum?: BannerSumAggregate;

    @Field(() => BannerMinAggregate, {nullable:true})
    _min?: BannerMinAggregate;

    @Field(() => BannerMaxAggregate, {nullable:true})
    _max?: BannerMaxAggregate;
}
