import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    sub_categoryId?: string;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    conditionId?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPromoted?: boolean;

    @Field(() => Int, {nullable:true})
    viewCount?: number;
}
