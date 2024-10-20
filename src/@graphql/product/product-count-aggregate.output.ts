import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    sub_categoryId!: number;

    @Field(() => Int, {nullable:false})
    brandId!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    conditionId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => Int, {nullable:false})
    stateId!: number;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    neighbourhoodId!: number;

    @Field(() => Int, {nullable:false})
    zip_code!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    approvedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    isPromoted!: number;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
