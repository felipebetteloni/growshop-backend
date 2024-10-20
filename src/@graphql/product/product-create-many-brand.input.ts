import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProductCreateManyBrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    sub_categoryId!: string;

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
