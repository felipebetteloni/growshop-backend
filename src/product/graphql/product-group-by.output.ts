import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductAvgAggregate } from './product-avg-aggregate.output';
import { ProductSumAggregate } from './product-sum-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';

@ObjectType()
export class ProductGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    sub_categoryId!: string;

    @Field(() => String, {nullable:false})
    brandId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    conditionId!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:true})
    countryId?: string;

    @Field(() => String, {nullable:true})
    stateId?: string;

    @Field(() => String, {nullable:true})
    cityId?: string;

    @Field(() => String, {nullable:true})
    neighbourhoodId?: string;

    @Field(() => String, {nullable:true})
    zip_code?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false})
    isPromoted!: boolean;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: ProductCountAggregate;

    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: ProductAvgAggregate;

    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: ProductSumAggregate;

    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: ProductMinAggregate;

    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: ProductMaxAggregate;
}
